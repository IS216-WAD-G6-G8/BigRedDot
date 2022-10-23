<script lang="ts">
import { PropType } from 'vue'
import { Business } from '../../types/firebaseTypes'
import { InstagramService } from '../../services/instagramScraper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const instagramService = new InstagramService()

SwiperCore.use([Navigation, Pagination, A11y])

export default {
    name: 'BusinessCard',
    props: {
        data: Object as PropType<Business>,
    },
    data() {
        let instagramLink = this.data.socialmedia.instagram
        let instagramUsername = instagramLink.split('/')[3]
        
        const imagesArray = instagramService.getPostsByUsername(instagramUsername)
        console.log(imagesArray)

        return {
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            images: []
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        },
    },
}
</script>

<template>
    <div
        class="md:max-w-xs h-full flex justify-center mx-auto bg-white rounded-2xl border-gray-20 dark:bg-slate-900">
        <a href="#" class="flex flex-col items-center ">
            <div class="w-72 h-72">
                <!-- <img
                    src="https://twinfinite.net/wp-content/uploads/2020/01/The-Idolmaster-Starlit-Season-2-1.jpg"
                    class="card-img-top rounded-2xl object-none w-80 h-80"
                    alt="..." /> -->
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    :pagination="{ clickable: true } as any"
                    class="default-slider rounded-2xl">
                    <swiper-slide v-for="card in cards" :key="card">
                        <img
                            class="rounded-2xl object-fill w-[17rem] h-[17rem]"
                            :src="card" />
                        <div class="swiper-pagination"></div></swiper-slide
                ></swiper>
            </div>
            <div class="flex flex-col">
                <div class="py-5 px-5 flex flex-col">
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
                            class="inline py-1 mr-2 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700 dark:text-white">
                            {{ this.data.category }}
                        </div>
                        <div
                            class="inline py-1 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700 dark:text-white">
                            {{ this.data.mode }}
                        </div>
                    </div>
                    <div
                        class="text-left w-64 text-sm line-clamp-2 font-normal text-gray-700 dark:text-gray-200">
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
