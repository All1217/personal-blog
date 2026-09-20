---
title: Personal Blog Introduction
excerpt: An introduction to the Personal Blog project — the site you are reading right now.
date: 2026-09-19
cover:
---

Project overview: [README](../../../README.md)

# 1 How static articles are organized

```
content/
└── writings/
    ├── anime/ # category folder; the loader treats this name as the Anime section
    │   └── Puella-Magi-Madoka-Magica1/ # folder name becomes the article slug in the URL
    │       ├── zh.md
    │       ├── 封面.jpeg
    │       ├── 配图1-意气风发.png
    │       ├── 配图2.png
    │       ├── 配图3.png
    │       ├── 配图4.png
    │       ├── 配图5.png
    │       ├── 配图6.png
    │       ├── 配图7.png
    │       ├── 配图8.png
    │       ├── 配图9.png
    │       └── 配图10.png
    ├── career/ # Career section
    │   └── Analysis of Popular College Metrics (v1.0)/
    │       ├── zh.md
    │       └── Analysis_of_Popular_College_Metrics_cover.png
    └── notes/ # Technical notes
        └── Personal Blog Introduction/
            ├── zh.md
            └── en.md
```

There is no database. This follows a common pattern for small documentation sites: each article and its images live in one folder, the directory tree carries the category, and the build turns everything into static assets. Hugo, Astro, VitePress, and Hexo all work this way.

For bilingual pages, Chinese and English live side by side in the same folder as `zh.md` and `en.md`. When the UI is in Chinese, the site loads `zh.md`; when it is in English, it loads `en.md`.

This setup fits sites with a few hundred articles at most and no complex interactions such as comments or likes.

The convention has to show up in code. At build time, Vite’s `import.meta.glob` pulls every Markdown file and image under `content/writings/` into the frontend bundle (see `src/data/loadWritings.ts`). Markdown is loaded as raw text; images become built URLs:

```ts
const markdownFiles = import.meta.glob('../../content/writings/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const imageFiles = import.meta.glob(
  '../../content/writings/**/*.{png,jpg,jpeg,webp,gif,svg}',
  { query: '?url', import: 'default', eager: true }
)
```

Path parsing only accepts three levels: category / article folder / locale file. The folder name is the slug in the URL; the file name must be `zh.md` or `en.md`. Any other `.md` file is ignored:

```ts
function parsePath(path: string) {
  const match = path
    .replace(/\\/g, '/')
    .match(/content\/writings\/([^/]+)\/([^/]+)\/(zh|en)\.md$/)
  if (!match) return null
  const [, category, slug, locale] = match
  // category must also appear in WRITING_CATEGORY_IDS
  return { category, slug, locale }
}
```

# 2 Fuzzy search

The Writing section supports keyword search over article text. There is no Elasticsearch on a backend. Search runs entirely in the browser with [Fuse.js](https://www.fusejs.io/). The wiring lives in `src/composables/useWritingSearch.ts`.

Ordinary exact search (KMP, Boyer–Moore, naive scanning, and similar) asks only one question: does this contiguous string appear as written? Drop a character, add one, or change the order, and the match fails. Suppose you search for `高新街的城市便捷酒店` inside `打车去高新街的城市便捷酒店`. Every character in the query must appear in that exact order. Variants such as `高新街城市便捷酒店`, `高新路的城市便捷酒店`, or `城市便捷酒店高新街店` mean roughly the same thing to a person, but exact algorithms miss them because a character is missing, wrong, or reordered. That is why those algorithms do not transfer directly to fuzzy matching.

Fuse.js is built for that gap. It asks how many edits it takes for the query to line up with some short span of the article. Fewer edits means a closer match; too many edits means the hit is discarded. `高新街城市便捷酒店` differs from `高新街的城市便捷酒店` by a single missing `的`, so Fuse treats them as similar. The cost model is the same family of problem as LeetCode’s [Edit Distance](https://leetcode.com/problems/edit-distance/) (also mirrored on [leetcode.cn](https://leetcode.cn/problems/edit-distance/description/)).

LeetCode 72 asks: given two words, using only insert, delete, and substitute of a single character, what is the minimum number of operations to turn `word1` into `word2`? That number is the Levenshtein distance. The smaller the distance, the more similar the two strings are.

LeetCode is a practice problem. It wants one integer between two complete strings. The classic solution fills a table where `dp[i][j]` is the cost of turning the first `i` characters of `word1` into the first `j` characters of `word2`. The skeleton looks like this (pseudocode, not a full solution):

```text
# dp[i][j] = min steps to turn word1[0..i) into word2[0..j)
for i in 0..len(word1):
  dp[i][0] = i          # delete all
for j in 0..len(word2):
  dp[0][j] = j          # insert all

for i in 1..len(word1):
  for j in 1..len(word2):
    if word1[i-1] == word2[j-1]:
      dp[i][j] = dp[i-1][j-1]           # no edit
    else:
      dp[i][j] = 1 + min(
        dp[i-1][j],     # delete
        dp[i][j-1],     # insert
        dp[i-1][j-1]    # substitute
      )

return dp[len(word1)][len(word2)]
```

Production search needs more than that single integer.

Compared with the textbook problem, Fuse first asks **which short span of a long article the query appears in**, not how far two whole documents are from each other. If you compared a few-character query against a multi-thousand-character body as two complete strings, the distance would be roughly body length minus query length — always “far” — and ranking would be useless. Fuse instead walks the body character by character, tracking how much of the query has matched and how many errors were used. When the query is fully consumed at some character, the span just scanned is a candidate. Each article keeps its best score and is then compared with other articles.

LeetCode’s input is only two strings. Search also has to decide whether a hit in the title should beat a hit buried in a three-thousand-character body. Fuse’s default penalizes matches far from the start of a field. Bodies are long and the useful sentence is often in the middle, so this site sets `ignoreLocation: true` and stops location from hurting the score. Search first narrows by category, then flattens each article into four fields with weights:

| Field | Weight | Why |
| ------ | ---- | ---- |
| Title | 2 | A title hit should outrank a chance appearance in the body |
| Excerpt | 1.2 | More important than the body, less than the title |
| Category label | 1 | Searching “Notes” can hit the category name |
| Body | 0.5 | Full-text coverage without drowning the title |

Each field gets its own score; weighted scores are merged; lower scores rank first. Those weights are not a verbal agreement — they are written into the site’s Fuse config in `useWritingSearch` below.

When the input box is empty, Fuse is not run; the current category list is shown by date. After switching language, title, excerpt, and body are rebuilt for the active locale, so search runs against the language you are reading, not a Chinese–English mashup.

**LeetCode asks for the exact minimum distance. Fuse cares more about whether the distance clears a cutoff.** It uses Bitap: the query is encoded as a row of switches and the body is scanned left to right. A matching character advances a switch; a mismatch can still advance, but counts as one edit. At the same time the algorithm tracks two things: how far the query has matched with zero edits, and how much farther it can go when one edit is allowed. If the error budget is spent before the query is finished, that alignment is dropped. The three operations match LeetCode: substituting one character, inserting an extra character from the body, and deleting a character that exists in the query but not in the body.

> Fuse scans the body once. At each character, in the same pass, it keeps several possible alignments of “how we might have matched so far.”
>
> Different alignments are different ways to pair query characters with body characters. Example: query `组件` (“component”), body span `组建件`:
>
> - Alignment A: map `件` to `建` as a substitution, then map the following `件` to `件`. Edits = 1.
> - Alignment B: treat the middle `建` as an insertion (extra body character), then map `组`→`组` and `件`→`件`. Edits = 1.
>
> Both cost one edit. Bitap keeps those unfinished alignments in the same row of switches (multiple progress values in one loop, not multiple threads). If one alignment burns the error budget early, only that alignment is discarded; if another still finishes the query, the article still counts as a hit.

The scan above collapses into pseudocode like this (not the Fuse.js source):

```text
# pattern = query, text = body, maxErrors = allowed edits
# matched[e] = how many pattern chars matched using exactly e edits

bestScore = +inf

for each char in text:                    # one pass over the body
  for e from maxErrors down to 0:
    if char matches the next pattern char:
      advance matched[e]                  # exact step
    else:
      # substitute / insert / delete each cost 1 edit;
      # progress is inherited from matched[e-1]
      matched[e] = transition from matched[e-1]

    if matched[e] == len(pattern):        # query fully consumed
      score = e / len(pattern)            # see normalization below
      bestScore = min(bestScore, score)

# keep bestScore for this article, then rank against others
```

**Fuse also normalizes edit distance into a score between 0 and 1, then applies a threshold.** With this site’s `ignoreLocation: true`, it is roughly:

```text
score ≈ editCount / queryLength
```

0 means an exact match. `threshold: 0.36` drops anything above 0.36 (too many edits). For a four-character query such as `组件边界`, one edit scores `0.25` and is kept; two edits score `0.5` and are dropped. Setting the threshold to 0 reduces the search to exact matching. LeetCode has no such cutoff; it always returns the minimum distance.

The site wires this up in `src/composables/useWritingSearch.ts`. Category filtering, locale flattening, weights, and the threshold all live here:

```ts
const scoped = computed(() => {
  const current = unref(category)
  if (current === 'all') return writings
  return writings.filter((item) => item.category === current)
})

const searchable = computed(() =>
  scoped.value.map((writing) => ({
    writing,
    title: tx(writing.title),
    excerpt: tx(writing.excerpt),
    categoryLabel: t(`writing.${writing.category}`),
    body: tx(writing.body)
  }))
)

const fuse = computed(
  () =>
    new Fuse(searchable.value, {
      ignoreLocation: true,
      threshold: 0.36,
      keys: [
        { name: 'title', weight: 2 },
        { name: 'excerpt', weight: 1.2 },
        { name: 'categoryLabel', weight: 1 },
        { name: 'body', weight: 0.5 }
      ]
    })
)

const results = computed(() => {
  const keyword = unref(query).trim()
  void locale.value
  if (!keyword) return scoped.value
  return fuse.value.search(keyword).map((hit) => hit.item.writing)
})
```

Read this against the table above: `keys` are the four field weights; `threshold: 0.36` is the normalized-score cutoff; `tx(...)` keeps search on the active locale’s title, excerpt, and body; an empty query returns `scoped` without calling `fuse.search`.

## 2.1 Why edit distance instead of KMP

KMP answers a different question: does this pattern appear **verbatim** as a contiguous substring? It remembers the matched prefix so a mismatch does not restart from scratch, which yields linear time. Boyer–Moore and `String.prototype.includes` belong to the same family; they differ mainly in how they skip impossible positions.

None of them answer “does one wrong character still count?” Search for `组建边界` when the body only has `组件边界`, and KMP says there is no match. Edit distance’s definition already includes insert, delete, and substitute, so a one-character typo still has a distance and can still be ranked. Fuzzy search needs that definition, not a faster exact finder.

Inverted indexes (Elasticsearch, Lunr, and similar) are a third path: tokenize documents, build a word → document map, and look up tokens instead of scanning every character. That fits large corpora and frequent queries. Chinese has no spaces, so tokenization needs a dictionary or segmenter; a missing character often breaks the tokens and you still fall back to edit distance on them. With only a small number of articles here, that machinery does not pay for itself.

## 2.2 Why this project uses Fuse.js

Articles are baked into the frontend bundle at build time and sit in memory when the page opens — dozens to a few hundred documents. Search runs in the browser; there is no separate search service. Against that constraint, the alternatives look like this:

| Approach | Why not |
|------|------------|
| `includes` or hand-rolled KMP | Cannot tolerate typos; opposite of “fuzzy” |
| Hand-rolled LeetCode DP table | Compares two full strings; ranking long bodies that way is wrong; scores, thresholds, and multi-field weights still have to be written. Reinventing that costs far more than importing a library. |
| Lunr, FlexSearch, MiniSearch | Inverted indexes; better when the corpus grows, but Chinese tokenization is extra work for this site’s size |
| Elasticsearch | Needs its own service and index sync. This site has no backend; publishing means rebuilding, not pushing a document into a search engine |

Fuse.js already packages Bitap, 0–1 scores, `threshold`, multi-field `keys` with weights, and `ignoreLocation`. Callers only flatten the current category into title, excerpt, category label, and body. The trade-off is a linear scan of those bodies on every query — fine here, not a million-document search engine. When the corpus grows enough, switch to an inverted index or another stronger approach.
