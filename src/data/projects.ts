import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'My-Chat',
    name: 'My-Chat',
    description: {
      zh: 'My-Chat 是一套基于 Spring AI 的通用 Agent 工具：围绕自建的自循环编排（Orchestrator-Workers），整合RAG知识库、编辑工作区、工具调用等多种功能，并可通过编程扩展更多应用。',
      en: 'My-Chat is a general-purpose agent tool based on Spring AI: it revolves around a self-built self-circulating orchestration (Orchestrator-Workers), integrates a RAG knowledge base, an editing workspace, tool invocation, and various other functions, and can be further extended to more applications through programming.'
    },
    tags: ['Vue 3', 'Spring AI 2.0.0', 'PostgreSQL', 'PGVector'],
    repo: 'https://github.com/All1217/My-Chat',
    language: 'Java/TS',
    stars: '0',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'personal-blog',
    name: 'personal-blog',
    description: {
      zh: '我的个人博客源代码仓库，其展示效果就是本网站。',
      en: 'My personal blog source code repository, the display effect of which is this website.'
    },
    tags: ['Vue3', 'Less'],
    repo: 'https://github.com/All1217/personal-blog',
    language: 'TS',
    stars: '0',
    status: { zh: '稳定', en: 'Stable' }
  },
  {
    id: 'AniLink-Java',
    name: 'AniLink-Java',
    description: {
      zh: '一个以Bilibili为蓝本制作的弹幕视频网站，该仓库为完整项目的后端部分。',
      en: 'A bullet comment video website made based on Bilibili, this repository is the backend part of the complete project.'
    },
    tags: ['Spring Cloud', 'MySQL', 'Redis', 'RabbitMQ', 'ElasticSearch'],
    repo: 'https://github.com/All1217/AniLink-Java',
    language: 'Java',
    stars: '0',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'AniLink-Vue3',
    name: 'AniLink-Vue3',
    description: {
      zh: '一个以Bilibili为蓝本制作的弹幕视频网站，该仓库为完整项目的前端部分。',
      en: 'A bullet comment video website made based on Bilibili, this repository is the front-end part of the complete project.'
    },
    tags: ['Pinia', 'Less', 'Element-Plus', 'Echarts'],
    repo: 'https://github.com/All1217/AniLink-Vue3',
    language: 'TS',
    stars: '0',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'AniLink-AlgorithmEngine',
    name: 'AniLink-AlgorithmEngine',
    description: {
      zh: '一个以Bilibili为蓝本制作的弹幕视频网站，该仓库为完整项目的算法引擎部分，包括用户画像和协同过滤。',
      en: 'A bullet screen video website created based on Bilibili. This repository is the algorithm engine part of the complete project, including user profiling and collaborative filtering.'
    },
    tags: ['Flask', 'User Profile', 'Redis', 'Collaborative Filtering Algorithm'],
    repo: 'https://github.com/All1217/AniLink-AlgorithmEngine',
    language: 'Python',
    stars: '0',
    status: { zh: '实验', en: 'Experimental' }
  },
]
