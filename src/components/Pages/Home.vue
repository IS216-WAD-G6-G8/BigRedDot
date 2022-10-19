<script lang="ts">
import NavBar from '../Reusables/NavBar.vue'

export default {
    name: 'Home',
    data() {
        return {
            categories: [
                { name: 'services', url: '/assets/services.svg' },
                { name: 'f&b', url: '/assets/f&b.svg' },
                { name: 'fashion', url: '/assets/fashion.svg' },
                { name: 'crafts', url: '/assets/crafts.svg' },
                { name: 'experiences', url: '/assets/experiences.svg' },
            ],
        }
    },
    methods: {},
    components: { NavBar },
}
</script>

<template>
    <NavBar></NavBar>
    <!-- Build filter section -->
    <div class="bg-[#A4CAFE2E] px-5 w-full flex justify-between">
        <div class="container overflow-scroll flex justify-between mx-auto">
            <div id="cat" v-for="category in categories">
                <div class="px-3 py-3 mr-7 md:mr-0 flex flex-col items-center">
                    <img id="icon" :src="category.url" class="w-6 h-6 mb-2" />
                    <span class="text-xs md:text-sm">{{
                        category.name
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#cat {
    display: inline-block;
    position: relative;
}

#cat:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

#cat:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>
