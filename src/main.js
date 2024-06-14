import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * CSS import section
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/styles/main.css'

const application = createApp(App)
application.use(router)
application.mount('#app')
