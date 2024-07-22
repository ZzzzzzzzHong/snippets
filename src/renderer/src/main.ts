import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '@icon-park/vue-next/styles/index.css'
import App from './App.vue'
import antdComponents from './configs/antd.config'
import './styles/index'

const pinia = createPinia()
const app = createApp(App)

antdComponents.forEach((component) => {
  app.use(component)
})

app.use(pinia)
app.mount('#app')
