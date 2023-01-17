import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {io} from 'socket.io-client'

const app = createApp(App)

app.config.globalProperties.$socket = io(process.env.VUE_APP_SOCKET_DSN, {
  path: '/socket.io'
})

app.use(store).use(router).mount('#app')
