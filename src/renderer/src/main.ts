import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '@icon-park/vue-next/styles/index.css'
import App from './App.vue'
import router from './router/index'
import antdComponents from './configs/antd.config'
import './styles/index'

const pinia = createPinia()
const app = createApp(App)

antdComponents.forEach((component) => {
  app.use(component)
})

app.use(router)
app.use(pinia)
app.mount('#app')
