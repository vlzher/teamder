import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import {router} from "@/router";
const app = createApp(App)


app.mount('#app')
app.use(router)
