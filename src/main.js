import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@/plugins/fontawsome.config'
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file

import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)
app.use(createPinia())
app.use(VueAwesomePaginate)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
