// import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { svgSpritePlugin } from 'vue-svg-sprite'

import DefaultLayout from "./layouts/DefaultLayout.vue"
import LayoutWithHeader from "./layouts/LayoutWithHeader.vue"


const app = createApp(App)

app.use(router)
app.use(svgSpritePlugin, {})

app.component("default-layout", DefaultLayout)
app.component("layout-with-header", LayoutWithHeader)

app.mount('#app')
