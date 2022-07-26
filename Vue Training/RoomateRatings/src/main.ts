import { createApp } from 'vue';
import { createPinia } from 'pinia';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
