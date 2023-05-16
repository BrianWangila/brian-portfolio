import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'


import './assets/css/main.css'





const spa = createApp(App)


spa.use(router)
   .mount('#app')


