<script lang="ts">
import NavBar from '../Reusables/NavBar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

export default {
    name: 'Home',
    data() {
        return {
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ],
        }
    },
    methods: {},
    components: { NavBar, Swiper, SwiperSlide },
}
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }">
        <NavBar></NavBar>
        <swiper
            :slides-per-view="1"
            :space-between="30"
            :autoplay="{'autoplay':true} as any"
            :pagination="{ clickable: true } as any"
            class="default-slider w-full md:h-screen relative">
            <swiper-slide v-for="card in cards" :key="card">
                <img class="object-cover w-full h-full" :src="card" />
                <div class="swiper-pagination"></div></swiper-slide
        ></swiper>
        <div class="absolute bottom-28 left-20 z-10">
            <div class="max-w-sm w-full">
                <div
                    class="rounded-2xl bg-white p-6 flex flex-col justify-between leading-normal dark:bg-slate-900">
                    <div class="mb-4">
                        <div class="text-gray-900 dark:text-white font-bold text-xl mb-2">
                            Support Singapore's local businesses
                        </div>
                        <p class="text-gray-700  dark:text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="flex items-center justify-evenly">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Search for business
                        </button>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 700px) {
    .default-slider .swiper-slide {
        height: 100vh !important;
    }
}
</style>
