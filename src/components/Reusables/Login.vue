<script lang="ts">
import firebase from 'firebase/compat/app'
import * as  firebaseui from 'firebaseui'
import "firebaseui/dist/firebaseui.css"



export default {
    name: 'Login',
    el: "#app",
    data() {
        return {
            user: null
        }
    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance()
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth())
        }
        var uiConfig = {
            signInSuccessUrl: "/Landing",
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID]
        }
        ui.start("#firebaseui-auth-container", uiConfig)
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user
                console.log(user)
            }
        })
    },
    methods: {
        signOut() {
            firebase.auth().signOut()
        }
    }
}

</script>

<template>
    <section id="firebaseui-auth-container">
    <li v-show="!user" class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
            Log In / Sign Up
        </button>
    </li>
    <li v-show="user" class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
        <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto"
            v-on:click="signOut()">
            Log Out
        </button>
    </li>
    <!-- <li class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
            Sign Up
        </button>
    </li> -->
    </section>
</template>