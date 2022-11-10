<script lang="ts">
import NavBar from './NavBar.vue'
import { defineComponent, PropType } from 'vue'
import { Business } from '../../types/types'
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
            businessData: null as Business | null,
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
        getDataByID: async function (business_id: String): Promise<void> {
            this.businessData = await firebaseService.getDataByID(
                Number(business_id)
            )
            console.log(this.businessData)
        },
        findPercentage(input): string {
            let sum = this.findSum()
            let percent = (Number(input) / sum) * 100
            return 'width: ' + percent + '%'
        },
        findSum(): number {
            let sum = 0
            for (var i = 1; i < this.businessData.ratings.length; i++) {
                sum += this.businessData.ratings[i]
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
                                :src="businessData.images[4]" />
                        </div>
                        <div class="flex flex-col justify-between">
                            <div
                                v-bind:style="{
                                    backgroundImage:
                                        'url(' + businessData.images[3] + ')',
                                }"
                                class="h-full rounded-xl bg-cover bg-center"></div>
                            <div
                                v-bind:style="{
                                    backgroundImage:
                                        'url(' + businessData.images[2] + ')',
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
                        <swiper-slide v-for="index in 5" :key="index">
                            <img
                                class="object-cover w-screen max-h-72"
                                :src="businessData.images[5 - index]" />
                            <div class="swiper-pagination"></div></swiper-slide
                    ></swiper>
                </div>
            </div>
            <!-- Name + Desc -->
            <div
                class="flex mt-6 pb-10 md:gap-12 px-10 lg:px-14 bg-white dark:bg-slate-900">
                <div class="w-full md:w-3/4 flex flex-col items-start">
                    <h1
                        class="text-gray-900 dark:text-white font-bold text-2xl lg:text-4xl pb-2">
                        {{ businessData.name }}
                    </h1>
                    <div
                        class="text-gray-900 dark:text-white text-sm border-b pb-4 w-full lg:text-lg text-left">
                        {{ businessData.description }}
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
                                {{ businessData.mode }}
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
                                {{ businessData.products }}
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
                                v-if="businessData.pricerange == 3">
                                $100 to $1000
                            </div>
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold"
                                v-if="businessData.pricerange == 2">
                                $10 to $100
                            </div>
                            <div
                                class="pl-4 text-gray-900 dark:text-white font-semibold"
                                v-if="businessData.pricerange == 1">
                                $0 to $10
                            </div>
                        </div>
                        <!-- Ratings -->
                        <div class="pt-4 pb-4 border-b">
                            <div class="flex flex-col md:flex-row">
                                <div
                                    class="flex flex-col justify-center items-center pb-4 md:pb-0">
                                    <div class="flex">
                                        <img
                                            class="w-[35px]"
                                            src="/assets/star2.svg" />
                                        <h1
                                            class="pl-4 md:pl-4 text-gray-900 dark:text-white text-2xl font-semibold flex">
                                            Overall Ratings
                                        </h1>
                                    </div>
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
                                                        businessData.ratings[
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
                                                        businessData.ratings[
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
                        <div class="flex text-left flex-col pt-4">
                            <h1
                                class="text-gray-900 dark:text-white text-2xl font-semibold pb-4">
                                No Reviews (yet)
                            </h1>
                            <div
                                class="relative overflow-hidden">
                                <div
                                    class="w-full rounded-2xl border-2 border-gray-100 p-14">
                                    <div class="flex flex-col items-center">
                                        <h3
                                            class="text-gray-900 pb-4 dark:text-white max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                                            Be the first to leave a review!
                                        </h3>
                                        <div
                                            action=""
                                            class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                                                placeholder="Email Address" />
                                            <button
                                                type="submit"
                                                class="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden relative md:block w-1/4 ml-4">
                    <div
                        class="sticky top-12 max-w-sm rounded-lg border overflow-hidden shadow-lg">
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
                                                businessData.socialmedia[
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
