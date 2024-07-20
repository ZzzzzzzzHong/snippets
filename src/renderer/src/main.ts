import './styles/index'

import { createApp } from 'vue'
import App from './App.vue'
import antdComponents from './configs/antd.config'

const app = createApp(App)

antdComponents.forEach((component) => {
  app.use(component)
})

app.mount('#app')
