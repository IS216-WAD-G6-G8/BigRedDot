<script lang="ts">
export default {
    name: 'NavBar',
    el: '#app',
    data() {
        return {
            open: false,
            hide: false,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
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
    },
}
</script>

<template>
    <div id="app">
        <nav
            class="bg-white border-gray-200 w-full py-2 rounded px-5 dark:bg-gray-900">
            <div class="container flex flex-wrap justify-between mx-auto">
                <router-link to="/" class="flex">
                    <a class="flex items-center px-3">
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
                <div
                    v-on:scroll.native="handleScroll"
                    :class="open ? 'block' : 'hidden'"
                    @scroll="toggle"
                    class="w-full md:block md:w-auto"
                    id="navbar-default">
                    <ul
                        class="h-screen md:h-full flex items-baseline md:items-center flex-col p-4 mt-4rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li class="w-full md:w-auto mb-1 md:mb-0">
                            <div>
                                <router-link to="/">
                                    <a
                                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        aria-current="page">
                                        Listing
                                    </a>
                                </router-link>
                            </div>
                        </li>
                        <li class="w-full md:w-auto mb-1 md:mb-0">
                            <div>
                                <router-link to="/Test">
                                    <a
                                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Category
                                    </a>
                                </router-link>
                            </div>
                        </li>
                        <li
                            class="w-full md:w-auto border-b md:border-b-0 mb-1 md:mb-0">
                            <router-link to="/About">
                                <a
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    About Us
                                </a>
                            </router-link>
                        </li>
                        <li class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
                                Log In
                            </button>
                        </li>
                        <li class="w-full md:w-auto mb-1 mt-3 md:mt-0 md:mb-0">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-full md:w-auto">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
 .router-link-active > a {
    color:#5c90ff
 }
</style>
