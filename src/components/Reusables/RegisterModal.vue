<script lang="ts">
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from '../../store'

export default {
    name: 'Login',
    el: '#app',
    data() {
        return {
            store,
            user: store.user,
        }
    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance()
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth())
        }
        var uiConfig = {
            signInSuccessUrl: '/', // edit redirect here
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        }
        ui.start('#firebaseui-auth-container', uiConfig)
    },
    created() {
        console.log(this.user)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user
                console.log(user)
            }
        })
    },
    methods: {
        signOut() {
            firebase.auth().signOut()
            this.user = null
            this.$router.push({
                name: '/',
            })
        },
        close() {
            this.$emit('close')
        },
    },
}
</script>

<template>
    <div
        class="fixed inset-0 z-50 justify-center items-center flex bg-slate-500/60">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <div class="border-0 md:rounded-lg shadow-lg relative flex flex-col h-screen w-screen md:w-full md:h-full bg-white md:min-w-[400px] md:min-h-[380px]">
                <div class="flex items-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <button class="bg-transparent" @click="close()">
                        <img class="w-4" src="/assets/cross.svg"/>
                    </button>
                    <h3 class="text-lg pl-1 font-semibold text-gray-700">Log in or Sign up</h3>
                </div>
                <div class="relative px-6 pb-6 flex-auto">
                    <h2 class="text-xl pt-6 pb-7 font-semibold text-gray-700">Welcome to BigRedDot</h2>
                    <section id="firebaseui-auth-container"></section>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
