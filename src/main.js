import { createApp } from 'vue'
import App from './App.vue'
// './router'是简写，靠 Node.js/Vite 的模块解析规则帮你自动补全成,'./router/index.js'是完整写法
import router from './router'

// 图标
import './plugins/fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// pinia持续化存储
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// createApp(App).mount('#app')
const app = createApp(App)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

// 路由
app.use(router)
// 图标
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')