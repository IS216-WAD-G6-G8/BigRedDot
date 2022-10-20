<script lang="ts">
import { PropType } from 'vue'
import { Business } from '../../types/firebaseTypes'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.min.css'

export default {
    name: 'BusinessCard',
    data() {
        return {
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ],
        }
    },
    props: {
        data: Object as PropType<Business>,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>

<template>
    <div
        class="md:max-w-xs flex justify-center mx-auto bg-white rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <div class="w-80 h-80">
                <!-- <img
                    src="https://twinfinite.net/wp-content/uploads/2020/01/The-Idolmaster-Starlit-Season-2-1.jpg"
                    class="card-img-top rounded-2xl object-none w-80 h-80"
                    alt="..." /> -->
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    class="default-slider rounded-2xl">
                    <swiper-slide v-for="card in cards" :key="card">
                        <img
                            class="object-fill w-80 h-80"
                            :src="card" /> </swiper-slide
                ></swiper>
            </div>
            <div class="flex flex-col">
                <div class="py-5">
                    <div
                        class="mb-4 flex justify-between text-l text-left font-bold tracking-tight text-gray-900 dark:text-white">
                        <span>{{ this.data.name }}</span>
                        <span class="text-right">
                            <img src="/assets/star.svg" />
                            <div></div>
                        </span>
                    </div>
                    <div class="mb-4 text-left">
                        <div
                            class="inline py-1 mr-2 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700">
                            {{ this.data.category }}
                        </div>
                        <div
                            class="inline py-1 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700">
                            {{ this.data.mode }}
                        </div>
                    </div>
                    <div
                        class="text-left w-64 text-sm line-clamp-2 font-normal text-gray-700 dark:text-gray-400">
                        {{ this.data.description }}
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<style>
.default-slider .swiper-slide {
    display: flex;
    height: 300px !important;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
}
</style>
