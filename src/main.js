import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@/plugins/fontawsome.config'
import VueAwesomePaginate from "vue-awesome-paginate";
// import the necessary css file

import "vue-awesome-paginate/dist/style.css";
import '@/plugins/vee-vailbate.config';

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(VueAwesomePaginate)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('LoadingComponent', Loading)
app.mount('#app')
