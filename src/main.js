import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import Login from './components/Reusables/Login.vue';
// import 'fireebaseui/dist/firebaseui.css'
const app = createApp(App);
app.component('Login', Login);
app.use(router).mount('#app');
