import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

createApp(App).use(router).mount('#app')
