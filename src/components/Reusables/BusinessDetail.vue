<script lang="ts">
import NavBar from './NavBar.vue'
import { defineComponent, PropType } from 'vue'
import { Business } from '../../types/firebaseTypes'
import { FirebaseService } from '../../services/firebaseService'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Navigation, Pagination, A11y])
const firebaseService = new FirebaseService()

export default defineComponent({
    name: 'BusinessDetail',
    props: {
        data: Object as PropType<Business>,
        business_id: String,
    },
    data() {
        return {
            businesses: [] as Business[],
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ],
        }
    },
    beforeMount() {
        this.getDataByID(this.business_id)
    },
    methods: {
        getDataByID: async function (business_id: String) {
            this.businesses = await firebaseService.getDataByID(
                Number(business_id)
            )
        },
    },
    components: { NavBar, Swiper, SwiperSlide },
})
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }">
        <NavBar></NavBar>
        <div class="bg-white pt-5 dark:bg-slate-900 h-screen">
            <div>
                <div class="hidden md:block px-10 lg:px-14">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <img class="rounded-xl" src="/assets/fashion.jpg" />
                        </div>
                        <div class="flex flex-col justify-between">
                            <div
                                class="h-full rounded-xl bg-[url('/assets/fashion.jpg')] bg-cover bg-center"></div>
                            <div
                                class="h-full rounded-xl mt-4 bg-[url('/assets/fashion.jpg')] bg-cover bg-center"></div>
                        </div>
                    </div>
                </div>
                <div class="block md:hidden">
                    <swiper
                        :slides-per-view="1"
                        :space-between="30"
                        :pagination="{ clickable: true } as any"
                        class="default-slider">
                        <swiper-slide v-for="card in cards" :key="card">
                            <img class="object-fill" :src="card" />
                            <div class="swiper-pagination"></div></swiper-slide
                    ></swiper>
                </div>
            </div>
            <div class="flex mt-6 pb-10 gap-12 px-10 lg:px-14">
                <div class="w-3/4 flex flex-col items-start">
                    <h1 class="text-gray-900 dark:text-white font-bold text-2xl lg:text-4xl mb-2">
                        {{ businesses[0].name }}
                    </h1>
                    <div class="text-gray-900 dark:text-white text-sm lg:text-lg text-left">
                        {{ businesses[0].description }}
                    </div>
                </div>
                <div class="hidden md:block w-1/4 ml-4">
                    <div class="max-w-sm rounded-lg border overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <p class="text-gray-900 dark:text-white text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >#photography</span
                            >
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >#travel</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.default-slider .swiper-slide {
    display: flex;
    height: unset !important;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
}
</style>
