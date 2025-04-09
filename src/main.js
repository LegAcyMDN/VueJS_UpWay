import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookies)
app.use(VueAxios, axios)

// setup env variables for developement environement
Object.entries(import.meta.env).forEach(([key, value]) => {
  window[key] = value
})

app.config.globalProperties.window = window

if (window.VITE_BACKEND_URL.endsWith('/')) {
  window.VITE_BACKEND_URL = window.VITE_BACKEND_URL.slice(0, -1)
}

app.mount('#app')
