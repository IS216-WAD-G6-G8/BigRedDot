<script lang="ts">
export default {
    name: 'LogInModal',
    props: {
        valid_email2: Boolean,
        validateEmail2: Function,
        closelogin: Function,
    },
}
</script>

<template>
    <div
        class="fixed inset-0 z-50 justify-center items-center flex bg-slate-500/60">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <div
                class="border-0 rounded-2xl overflow-auto text-left shadow-lg relative flex flex-col md:w-full md:h-full bg-white md:min-w-[500px] max-h-[600px] w-[300px] md:min-h-[380px]">
                <div
                    class="flex items-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <button class="bg-transparent" @click="closelogin()">
                        <img class="w-4" src="/assets/cross.svg" />
                    </button>
                    <h3 class="text-lg pl-1 font-semibold text-gray-700">
                        Log in or Sign up
                    </h3>
                </div>
                <div class="relative p-6 flex-auto">
                    <form class="space-y-4 md:space-y-6">
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Your email</label
                            >
                            <input
                                @blur="validateEmail2()"
                                id="email2"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" />
                            <div v-show="!valid_email2" class="text-gray-900">
                                <div
                                    class="flex mt-2 mb-4 text-sm text-red-700 rounded-lg"
                                    role="alert">
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 inline w-5 h-5 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        Invalid email address. Email format:
                                        john.tan@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                for="password2"
                                class="block mb-2 text-sm font-medium text-gray-900"
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
                            Sign in
                        </button>
                        <section id="firebaseui-auth-container"></section>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
