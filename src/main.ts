// import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { svgSpritePlugin } from 'vue-svg-sprite'


const app = createApp(App)

app.use(router)
app.use(svgSpritePlugin, {})

app.mount('#app')
