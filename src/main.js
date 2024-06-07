// css
import './assets/index.css'

// app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// router
import router from './router'
app.use(router)

// store
import { createPinia } from 'pinia'
app.use(createPinia())

// components
import { components } from './components'
app.use(components)

app.mount('#app')
