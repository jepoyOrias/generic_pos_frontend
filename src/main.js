import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {BootstrapVue3} from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createPinia } from 'pinia'

const pinia = createPinia();



 createApp(App).use(pinia)
              .use(router)
              .use(BootstrapVue3)
              .mount('#app')

