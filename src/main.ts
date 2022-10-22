import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
// import 'fireebaseui/dist/firebaseui.css'

createApp(App).use(router).use(store).mount('#app')
