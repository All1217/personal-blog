// 重定向
const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('p')
if (redirectPath && redirectPath.startsWith('/') && !redirectPath.startsWith('//')) {
  history.replaceState(null, '', redirectPath)
}

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

createApp(App).use(router).mount('#app')
