<script lang="ts">
import NavBar from '../Reusables/NavBar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

export default {
    name: 'Home',
    setup() {
        onMounted(() => {
            gsap.to('.purpose', {
                scrollTrigger: '.purpose',
                y: 50,
                duration: 2,
            })
        })
    },
    data() {
        return {
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ],
            purposes: [
                { url: '/assets/crafts.jpg', title: 'Promote', desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
                { url: '/assets/crafts.jpg', title: 'Improve', desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
                { url: '/assets/crafts.jpg', title: 'Encourage', desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
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
        <!-- Card component on carousel -->
        <div class="absolute bottom-28 left-20 z-10">
            <div class="max-w-sm w-full">
                <div
                    class="rounded-2xl bg-white p-6 flex flex-col justify-between leading-normal dark:bg-slate-900">
                    <div class="mb-4">
                        <div
                            class="text-gray-900 dark:text-white font-bold text-xl mb-2">
                            Support Singapore's local businesses
                        </div>
                        <p class="text-gray-700 dark:text-white text-base">
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
        <!-- Content - Purpose -->
        <div class="bg-white dark:bg-slate-900 h-screen px-10 pt-2 lg:px-14">
            <div class="purpose">
                <h1
                    class="text-gray-900 dark:text-white font-bold text-2xl lg:text-4xl pb-2">
                    Purpose
                </h1>
                <div
                    class="text-gray-900 dark:text-white text-sm pb-6 w-full lg:text-lg">
                    We use an agile approach to test assumptions and connect
                    with the needs of your audience early and often.
                </div>
                <div class="flex flex-wrap justify-evenly gap-10">
                    <div v-for="purpose in purposes"
                        class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                :src="purpose.url"/>
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5
                                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {{purpose.title}}
                                </h5>
                            </a>
                            <p
                                class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {{purpose.desc}}
                            </p>
                        </div>
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

.box {
    width: 50px;
    height: 50px;
    background: tomato;
}
</style>
