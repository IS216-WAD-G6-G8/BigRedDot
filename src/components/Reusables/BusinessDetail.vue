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
            ratings: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'],
            social: [
                { name: 'facebook', url: '/assets/facebookIcon.svg' },
                { name: 'instagram', url: '/assets/instagramIcon.svg' },
                { name: 'phone', url: '/assets/phoneIcon.svg' },
                { name: 'website', url: '/assets/webIcon.svg' },
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
        findPercentage(input) {
            let sum = this.findSum()
            let percent = (Number(input) / sum) * 100
            return 'width: ' + percent + '%'
        },
        findSum() {
            let sum = 0
            for (var i = 1; i < this.businesses[0].ratings.length; i++) {
                sum += this.businesses[0].ratings[i]
            }
            return sum
        },
    },
    components: { NavBar, Swiper, SwiperSlide },
})
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }">
        <NavBar></NavBar>
        <div class="bg-white dark:bg-slate-900 h-screen">
            <div>
                <div class="hidden md:block pt-4 px-10 lg:px-14">
                    <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                        <div>
                            <img
                                class="rounded-xl object-cover w-full max-h-[26rem]"
                                :src="businesses[0].images[4]" />
                        </div>
                        <div class="flex flex-col justify-between">
                            <div
                                v-bind:style="{
                                    backgroundImage:
                                        'url(' + businesses[0].images[3] + ')',
                                }"
                                class="h-full rounded-xl bg-cover bg-center"></div>
                            <div
                                v-bind:style="{
                                    backgroundImage:
                                        'url(' + businesses[0].images[2] + ')',
                                }"
                                class="h-full rounded-xl mt-4 bg-cover bg-center"></div>
                        </div>
                    </div>
                </div>
                <div class="block md:hidden">
                    <swiper
                        :slides-per-view="1"
                        :space-between="30"
                        :pagination="{ clickable: true } as any"
                        class="default-slider">
                        <swiper-slide v-for="index in 3" :key="index">
                            <img
                                class="object-cover w-screen max-h-72"
                                :src="businesses[0].images[4 - index]" />
                            <div class="swiper-pagination"></div></swiper-slide
                    ></swiper>
                </div>
            </div>
            <!-- Name + Desc -->
            <div
                class="flex items-center mt-6 pb-10 md:gap-12 px-10 lg:px-14 bg-white dark:bg-slate-900">
                <div class="w-full md:w-3/4 flex flex-col items-start">
                    <h1
                        class="text-gray-900 dark:text-white font-bold text-2xl lg:text-4xl pb-2">
                        {{ businesses[0].name }}
                    </h1>
                    <div
                        class="text-gray-900 dark:text-white text-sm border-b pb-4 w-full lg:text-lg text-left">
                        {{ businesses[0].description }}
                    </div>
                    <!-- Extra information -->
                    <div class="w-full">
                        <div class="pt-4 flex items-center">
                            <img
                                :style="[
                                    this.$store.getters.getDarkMode
                                        ? {
                                              filter: 'invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                          }
                                        : { filter: 'none' },
                                ]"
                                class="w-[35px]"
                                src="/assets/categoryIcon.svg" />
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold">
                                {{ businesses[0].mode }}
                            </div>
                        </div>
                        <div class="pt-4 flex items-center">
                            <img
                                :style="[
                                    this.$store.getters.getDarkMode
                                        ? {
                                              filter: 'invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                          }
                                        : { filter: 'none' },
                                ]"
                                class="w-[35px] bg-transparent"
                                src="/assets/productIcon.svg" />
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold">
                                {{ businesses[0].products }}
                            </div>
                        </div>
                        <div class="pt-4 pb-4 border-b flex items-center">
                            <img
                                :style="[
                                    this.$store.getters.getDarkMode
                                        ? {
                                              filter: 'invert(98%) sepia(98%) saturate(6%) hue-rotate(127deg) brightness(102%) contrast(103%)',
                                          }
                                        : { filter: 'none' },
                                ]"
                                class="w-[35px]"
                                src="/assets/priceIcon.svg" />
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold"
                                v-if="businesses[0].pricerange == 3">
                                $100 to $1000
                            </div>
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold"
                                v-if="businesses[0].pricerange == 2">
                                $10 to $100
                            </div>
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold"
                                v-if="businesses[0].pricerange == 1">
                                $0 to $10
                            </div>
                        </div>
                        <!-- Ratings -->
                        <div class="pt-4 pb-4 border-b">
                            <div class="flex flex-col md:flex-row">
                                <div class="flex items-center pb-4 md:pb-0">
                                    <img
                                        class="w-[35px]"
                                        src="/assets/star2.svg" />
                                    <h1
                                        class="pl-4 md:pl-4 text-gray-900 dark:text-white text-2xl font-semibold flex">
                                        Overall Ratings
                                    </h1>
                                </div>
                                <div class="md:pl-12 lg:pl-24 w-full">
                                    <div
                                        v-for="index in 5"
                                        class="relative pt-1">
                                        <div
                                            class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                                                    {{ 6 - index }} stars
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-semibold inline-block text-amber-600">
                                                    {{
                                                        businesses[0].ratings[
                                                            6 - index
                                                        ]
                                                    }}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
                                            <div
                                                :style="
                                                    findPercentage(
                                                        businesses[0].ratings[
                                                            6 - index
                                                        ]
                                                    )
                                                "
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex pt-4">
                            <h1
                                class="text-gray-900 dark:text-white font-bold text-2xl lg:text-4xl">
                                Reviews (100)
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block w-1/4 ml-4">
                    <div
                        class="max-w-sm rounded-lg border overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div
                                class="text-gray-900 dark:text-white text-base flex flex-col">
                                <div
                                    class="bg-sky-100 w-full rounded-full p-3 text-sm font-semibold text-gray-700 mb-4">
                                    Contacts
                                </div>
                                <div>
                                    <div
                                        v-for="elem in social"
                                        class="flex flex-col lg:flex-row items-center pb-4">
                                        <img
                                            class="w-[35px] mb-3 lg:mb-0"
                                            :src="elem.url" />
                                        <div
                                            class="text-xs lg:text-sm pl-4 break-all text-center lg:text-left text-gray-900 dark:text-white font-semibold">
                                            {{
                                                businesses[0].socialmedia[
                                                    elem.name
                                                ]
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
