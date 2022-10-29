<script lang="ts">
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from 'firebase/auth'
import { UserService } from '../../services/userService'

const userService = new UserService()

export default {
    name: 'NavBar',
    el: '#app',
    data() {
        return {
            open: false,
            hide: false,
            modal_visible: false,
            login_visible: false,
            profile: false,
        }
    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance()
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth())
        }
        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    const isNewUser = authResult.additionalUserInfo.isNewUser
                    if (isNewUser) {
                        userService.createUser(authResult.user)
                    }
                    return true
                },
            },
            //signInSuccessUrl: '/Home', // edit redirect here
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        }
        ui.start('#firebaseui-auth-container', uiConfig)
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('commitUser')
            }
        })
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        toggle() {
            this.open = !this.open
        },
        handleScroll() {
            this.open = false
        },
        toggleMode() {
            this.$store.dispatch(
                'commitDarkMode',
                !this.$store.getters.getDarkMode
            )
        },
        showModal() {
            this.modal_visible = !this.modal_visible
        },
        toggleProfile() {
            this.profile = !this.profile
        },
        logout() {
            const auth = getAuth()

            signOut(auth)
                .then(() => {
                    alert('You have been logged out')
                    location.reload()
                })
                .catch((error) => {
                    alert(`Sign Out Error: ${error}`)
                })
        },
        openlogin() {
            this.showModal()
            this.login_visible = !this.login_visible
        },
        closelogin(){
            this.login_visible = false
        }
    },
}
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }" id="app">
        <nav class="bg-white w-full py-2 px-5 dark:bg-slate-900">
            <div class="container flex flex-wrap justify-between mx-auto">
                <router-link to="/Home" class="flex">
                    <a class="flex items-center md:px-3">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            class="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo" />
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap text-gray-500 dark:text-white">
                            BigRedDot
                        </span>
                    </a>
                </router-link>
                <div class="flex">
                    <button
                        id="mode_button"
                        class="bg-transparent p-0"
                        @click="toggleMode()">
                        <img
                            :style="[
                                this.$store.getters.getDarkMode
                                    ? {
                                          filter: 'brightness(0) saturate(100%) invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                      }
                                    : { filter: 'none' },
                            ]"
                            class="w-5 h-5 block md:hidden"
                            src="/assets/dark_mode.svg" />
                    </button>
                    <button
                        @click="toggle"
                        data-collapse-toggle="navbar-default"
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default">
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div
                    v-on:scroll.native="handleScroll"
                    :class="open ? 'block' : 'hidden'"
                    @scroll="toggle"
                    class="w-full md:block md:w-auto"
                    id="navbar-default">
                    <ul
                        class="h-screen md:h-full flex items-baseline md:items-center flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li class="w-full md:w-auto mb-1 md:mb-0">
                            <div>
                                <router-link to="/Home">
                                    <a
                                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        aria-current="page">
                                        Listing
                                    </a>
                                </router-link>
                            </div>
                        </li>
                        <li
                            class="w-full md:w-auto border-b md:border-b-0 mb-1 md:mb-0">
                            <router-link to="/About">
                                <a
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#87adff] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    About Us
                                </a>
                            </router-link>
                        </li>
                        <li class="w-full md:w-auto h-0 md:h-auto">
                            <button
                                id="mode_button"
                                class="bg-transparent p-0"
                                @click="toggleMode()">
                                <img
                                    :style="[
                                        this.$store.getters.getDarkMode
                                            ? {
                                                  filter: 'brightness(0) saturate(100%) invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                              }
                                            : { filter: 'none' },
                                    ]"
                                    class="w-5 h-5 hidden md:block"
                                    src="/assets/dark_mode.svg" />
                            </button>
                        </li>
                        <li
                            v-if="!$store.state.user"
                            class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
                            <button
                                @click="showModal()"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
                                Sign Up / Log In
                            </button>
                            <div
                                v-show="modal_visible"
                                class="fixed inset-0 z-50 justify-center items-center flex bg-slate-500/60">
                                <div
                                    class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <div
                                        class="border-0 rounded-2xl overflow-auto text-left md:rounded-lg shadow-lg relative flex flex-col md:w-full md:h-full bg-white md:min-w-[500px] max-h-[600px] w-[300px] md:min-h-[380px]">
                                        <div
                                            class="flex items-center p-5 border-b border-solid border-slate-200 rounded-t">
                                            <button
                                                class="bg-transparent"
                                                @click="closelogin()">
                                                <img
                                                    class="w-4"
                                                    src="/assets/cross.svg" />
                                            </button>
                                            <h3
                                                class="text-lg pl-1 font-semibold text-gray-700">
                                                Log in or Sign up
                                            </h3>
                                        </div>
                                        <div class="relative p-6 flex-auto">
                                            <form
                                                class="space-y-4 md:space-y-6">
                                                <div>
                                                    <label
                                                        for="username"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Display Name</label
                                                    >
                                                    <input
                                                        type="username"
                                                        name="username"
                                                        id="username"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Nicholas Lee" />
                                                </div>
                                                <div>
                                                    <label
                                                        for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Your email</label
                                                    >
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="name@company.com" />
                                                </div>
                                                <div>
                                                    <label
                                                        for="password"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Password</label
                                                    >
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="••••••••"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <div>
                                                    <label
                                                        for="confirm-password"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Confirm password</label
                                                    >
                                                    <input
                                                        type="confirm-password"
                                                        name="confirm-password"
                                                        id="confirm-password"
                                                        placeholder="••••••••"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <button
                                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full">
                                                    Create an account
                                                </button>
                                                <p
                                                    class="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Already have an account?
                                                    <a
                                                        @click="openlogin()"
                                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                        >Login here</a
                                                    >
                                                </p>
                                                <section
                                                    id="firebaseui-auth-container"></section>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-show="login_visible"
                                class="fixed inset-0 z-50 justify-center items-center flex bg-slate-500/60">
                                <div
                                    class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <div
                                        class="border-0 rounded-2xl overflow-auto text-left md:rounded-lg shadow-lg relative flex flex-col md:w-full md:h-full bg-white md:min-w-[500px] max-h-[600px] w-[300px] md:min-h-[380px]">
                                        <div
                                            class="flex items-center p-5 border-b border-solid border-slate-200 rounded-t">
                                            <button
                                                class="bg-transparent"
                                                @click="closelogin()">
                                                <img
                                                    class="w-4"
                                                    src="/assets/cross.svg" />
                                            </button>
                                            <h3
                                                class="text-lg pl-1 font-semibold text-gray-700">
                                                Log in or Sign up
                                            </h3>
                                        </div>
                                        <div class="relative p-6 flex-auto">
                                            <form
                                                class="space-y-4 md:space-y-6">
                                                <div>
                                                    <label
                                                        for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Your email</label
                                                    >
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="name@company.com" />
                                                </div>
                                                <div>
                                                    <label
                                                        for="password"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >Password</label
                                                    >
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="••••••••"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <button
                                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full">
                                                    Create an account
                                                </button>
                                                <section
                                                    id="firebaseui-auth-container"></section>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            v-if="$store.state.user"
                            class="w-full md:hidden md:w-auto mb-1 md:mb-0">
                            <router-link to="/MyList">
                                <a
                                    class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-sky-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    My Favourites
                                </a>
                            </router-link>
                        </li>
                        <li
                            v-if="$store.state.user"
                            class="w-full md:hidden md:w-auto mb-1 md:mb-0">
                            <router-link to="/About">
                                <a
                                    class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-sky-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Profile Settings
                                </a>
                            </router-link>
                        </li>
                        <li
                            v-if="$store.state.user"
                            class="w-full md:hidden md:w-auto mb-1 md:mb-0">
                            <button
                                @click="logout()"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
                                Sign Out
                            </button>
                        </li>
                        <li
                            v-if="$store.state.user"
                            class="w-full hidden md:block md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
                            <div class="relative border rounded-2xl">
                                <button
                                    id="profile_button"
                                    @click="toggleProfile"
                                    data-collapse-toggle="navbar-default"
                                    type="button"
                                    class="mx-auto flex p-2 text-sm text-gray-500 rounded-lg dark:text-gray-400"
                                    aria-controls="navbar-default">
                                    <svg
                                        class="w-6 h-6"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <img
                                        :style="[
                                            this.$store.getters.getDarkMode
                                                ? {
                                                      filter: 'brightness(0) saturate(100%) invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                                  }
                                                : { filter: 'none' },
                                        ]"
                                        class="ml-3"
                                        src="/assets/profile.svg" />
                                </button>
                            </div>
                            <div :class="profile ? 'block' : 'hidden'">
                                <div
                                    class="absolute gap-5 flex flex-col z-50 right-28 mt-2 w-52 p-5 rounded-md bg-white shadow-lg"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button">
                                    <router-link to="/MyList">
                                        <a
                                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 d dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                            My Favourites
                                        </a>
                                    </router-link>
                                    <router-link to="/About">
                                        <a
                                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                            Profile Settings
                                        </a>
                                    </router-link>
                                    <button
                                        @click="logout()"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.router-link-active > a {
    color: #87adff;
}

.router-link-active > a:hover {
    color: #87adff;
}

#mode_button:hover,
#profile_button:hover {
    border-color: transparent;
}

#mode_button:focus,
#mode_button:focus-visible,
#profile_button:focus,
#profile_button:focus-visible {
    outline: none;
}
</style>
