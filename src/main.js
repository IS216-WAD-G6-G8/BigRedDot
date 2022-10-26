import firebase from 'firebase/compat/app';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/compat/app';
import RegisterModal from './components/Reusables/RegisterModal.vue';
const firebaseConfig = {
    apiKey: 'AIzaSyAipvvlbfDtRMXnN_UDeHl67l-XbgWc_CU',
    authDomain: 'is216-bigreddot.firebaseapp.com',
    databaseURL: 'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'is216-bigreddot',
    storageBucket: 'is216-bigreddot.appspot.com',
    messagingSenderId: '627775349080',
    appId: '1:627775349080:web:b4e38d720ec5ded855c52d',
    measurementId: 'G-ZJ0T3NYPCM',
};
firebase.initializeApp(firebaseConfig);
createApp(App).component('Login', RegisterModal).use(router).use(store).mount('#app');
