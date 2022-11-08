<script lang="ts">
import NavBar from '../Reusables/NavBar.vue'

export default {
    name: 'MyList',
    data() {
        return {
            categories: [
                { name: 'services', url: '/assets/services.svg' },
                { name: 'fnb', url: '/assets/f&b.svg' },
                { name: 'fashion', url: '/assets/fashion.svg' },
                { name: 'crafts', url: '/assets/crafts.svg' },
                { name: 'experiences', url: '/assets/experiences.svg' },
            ],
        }
    },
    components: { NavBar },
}
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }">
        <NavBar></NavBar>
        <div class="bg-[#d4e6ff] p-5 w-full flex justify-between">
            <div class="container overflow-auto flex mx-auto">
                <div class="flex items-center px-3 mr-5">
                    <RouterLink to="/Home">
                        <img class="w-6 h-6 mr-4" src="/assets/back.svg" />
                    </RouterLink>
                    <div class="font-bold ml-5 text-sm md:text-xl text-gray-900">
                        My Favourite
                    </div>
                </div>
                <div class="flex items-center px-3 flex-1">
                    <button
                        id="cat_button"
                        class="bg-white mr-5 flex flex-col items-center border-solid border-2 hover:border-blue-700 focus:border-blue-700 border-blue-400 rounded-2xl">
                        <span class="text-xs text-gray-700 md:text-sm">
                            all
                        </span>
                    </button>
                    <div v-for="category in categories">
                        <button
                            id="cat_button"
                            class="bg-white mr-5 flex flex-col items-center border-solid border-2 hover:border-blue-700 focus:border-blue-700 border-blue-400 rounded-2xl">
                            <span class="text-xs text-gray-700 md:text-sm">{{
                                category.name
                            }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="bg-white h-screen dark:bg-slate-900 px-8 lg:px-16 py-8 w-full">
            <div
                class="w-full flex flex-col md:flex-row justify-center border-b border-gray-300">
                <img
                    class="m-3 max-w-96 max-h-60 md:max-h-40 lg:max-h-48 md:w-96 object-cover rounded-2xl"
                    src="/assets/f&b.jpg" />
                <div
                    class="p-4 text-left flex flex-col self-center justify-between leading-normal">
                    <div class="mb-4 flex text-left justify-between">
                        <div>
                            <div
                                class="inline py-1 mr-2 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700 dark:text-white">
                                Placeholder
                            </div>
                            <div
                                class="inline py-1 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700 dark:text-white">
                                Placeholder
                            </div>
                        </div>
                        <div>
                            <img
                                class="w-[25px]"
                                src="/assets/love.svg" />
                        </div>
                    </div>
                    <div class="mb-8">
                        <p class="text-sm text-gray-600 flex items-center"></p>
                        <div class="text-gray-900 font-bold text-xl mb-2">
                            Can coffee make you a better developer?
                        </div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#icon {
    min-width: 1.5rem !important;
    min-height: 1.5rem !important;
}

#cat_button {
    position: relative;
}

#cat_button:focus {
    outline: none;
}

#filterBtn:focus {
    border-color: transparent;
    outline: none;
}
</style>
