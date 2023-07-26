import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3'

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(router)
              .use(BootstrapVue3)
              .mount('#app')
