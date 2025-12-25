import './assets/main.css'
import {router} from "@/router/index.js";
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './assets/styles/element/index.scss'

import 'virtual:uno.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
