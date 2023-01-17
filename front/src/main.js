import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {io} from 'socket.io-client'

const app = createApp(App)

// use port in .env.local file
app.config.globalProperties.$socket = io('http://localhost:' + process.env.PORT)

app.use(store).use(router).mount('#app')
