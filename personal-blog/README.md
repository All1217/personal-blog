# 📝 Personal Blog

一个基于 **Vite + Vue 3** 构建的个人博客网站，采用组件化开发，风格简约大气。

## 🚀 技术栈

| 技术 | 说明 |
|------|------|
| **Vue 3** | 渐进式 JavaScript 框架（Composition API） |
| **Vite** | 下一代前端构建工具（快速冷启动、热更新） |
| **JavaScript** | 核心开发语言 |
| **CSS3** | 纯 CSS 实现响应式布局与动画 |

## 📁 项目结构

```
personal-blog/
├── index.html                 # 入口 HTML
├── package.json               # 依赖与脚本配置
├── vite.config.js             # Vite 配置（端口 5100）
├── public/
│   └── vite.svg               # 网站图标
└── src/
    ├── main.js                # 应用入口
    ├── App.vue                # 根组件（全局布局）
    └── components/
        ├── NavBar.vue         # 导航栏（响应式菜单）
        ├── Hero.vue           # 首页英雄区域
        ├── About.vue          # 关于我
        ├── Projects.vue       # 个人项目展示
        ├── Writing.vue        # 文字创作
        ├── Gallery.vue        # 光影集
        ├── Contact.vue        # 联系方式
        ├── FooterBar.vue      # 页脚
        └── BackToTop.vue      # 回到顶部按钮
```

## 🛠️ 本地运行

```bash
# 1️⃣ 克隆项目
git clone https://github.com/your-username/personal-blog.git
cd personal-blog

# 2️⃣ 安装依赖
npm install

# 3️⃣ 启动开发服务器（默认 http://localhost:5100）
npm run dev
```

## 📦 生产构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录，可直接部署到任意静态服务器（Nginx、Vercel、Netlify 等）。

## 🌐 功能特性

- ✅ 纯前端 SPA，无需后端服务
- ✅ 响应式布局，适配桌面 / 平板 / 手机
- ✅ 平滑滚动导航
- ✅ 回到顶部按钮
- ✅ 导航栏滚动高亮当前区域
- ✅ 组件化架构，易于扩展

## 📄 页面内容

| 区块 | 说明 |
|------|------|
| 🏠 Hero | 个人简介标语 |
| 👤 About | 个人背景介绍 |
| 💼 Projects | 项目作品展示 |
| ✍️ Writing | 文章 / 随笔列表 |
| 📸 Gallery | 摄影 / 设计作品 |
| 📬 Contact | 联系方式与社交链接 |

## 📃 许可证

本项目仅供学习和个人使用。

---

*Made with ❤️ using Vue 3 + Vite*
