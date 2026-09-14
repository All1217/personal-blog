---
title: 脚手架问得越少，用的人越多
titleEn: The fewer prompts a scaffolder asks, the more it gets used
excerpt: draft-cli 曾经有 14 个问题。我把它收成 3 个，其余全部给可覆盖的默认值。这篇是删除过程中的判断标准。
excerptEn: draft-cli once asked 14 questions. It now asks 3, with overridable defaults for the rest. A log of what earned a prompt and what did not.
date: 2026-02-16
---

交互式脚手架的每一个问题，都是一次「要不要关掉终端」的机会。

## 什么样的问题配活下来

只有「默认值会让人立刻后悔」的选择才配做成提问，例如包管理器、是否进 Git。目录结构、Lint 规则、端口，给能改的默认值就行。

draft-cli 从 14 问收到 3 问之后，我自己也重新开始用它。
