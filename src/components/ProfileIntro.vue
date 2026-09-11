<template>
  <section id="intro" class="intro">
    <div class="page-wrap intro__grid">
      <div class="intro__copy">
        <p class="eyebrow">
          {{ t('intro.basedIn') }} {{ tx(profile.location) }} · {{ tx(profile.availability) }}
        </p>
        <h1>{{ tx(profile.name) }}</h1>
        <p class="role">{{ tx(profile.role) }}</p>
        <p class="bio">{{ tx(profile.bio) }}</p>
        <ul class="skills">
          <li v-for="skill in profile.skills" :key="skill">{{ skill }}</li>
        </ul>
        <div class="socials">
          <a v-for="social in profile.socials" :key="social.id" :href="social.href" target="_blank" rel="noreferrer">
            {{ tx(social.label) }}
          </a>
        </div>
      </div>

      <ul class="stats">
        <li v-for="stat in profile.stats" :key="stat.value">
          <strong>{{ stat.value }}</strong>
          <span>{{ tx(stat.label) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t, tx } = useI18n()
</script>

<style scoped lang="less">
@import '../styles/mixins.less';

.intro {
  padding: 28px 0 24px;

  &__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.7fr) minmax(180px, 0.8fr);
    gap: 24px;
    align-items: start;

    .mobile({
      grid-template-columns: 1fr;
      gap: 16px;
    });
  }

  h1 {
    font-size: 2rem;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: var(--text-heading);
    margin: 4px 0 6px;
  }
}

.eyebrow,
.role {
  font-size: 0.84rem;
  color: var(--text-secondary);
}

.bio {
  margin-top: 10px;
  font-size: 0.92rem;
  color: var(--text);
  max-width: 62ch;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin-top: 14px;

  li {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    background: var(--accent-soft);
    color: var(--accent);
  }
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;

  a {
    font-size: 0.84rem;
    font-weight: 600;
    color: var(--text-heading);
    text-decoration: none;
    border-bottom: 1px solid var(--border);

    &:hover {
      color: var(--accent);
      border-color: var(--accent);
    }
  }
}

.stats {
  list-style: none;
  display: grid;
  gap: 8px;

  li {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius);

    strong {
      font-size: 1.25rem;
      letter-spacing: -0.03em;
      color: var(--text-heading);
    }

    span {
      font-size: 0.78rem;
      color: var(--text-secondary);
    }
  }

  .mobile({
    grid-template-columns: repeat(3, minmax(0, 1fr));

    li {
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      padding: 10px;
    }
  });
}
</style>
