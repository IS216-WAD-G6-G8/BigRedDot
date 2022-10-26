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
        isMobile() {
            if (screen.width <= 760) {
                return true
            } else {
                return false
            }
        },
    },
    components: { NavBar, Swiper, SwiperSlide },
})
</script>

<template>
    <div :class="{ dark: this.$store.getters.getDarkMode }">
        <NavBar></NavBar>
        <div class="bg-white pt-6 dark:bg-slate-900 h-screen px-10 lg:px-14">
            <div>
                <div v-if="!isMobile()">
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
                <div v-else>
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
            <h1 class="text-gray-900 dark:text-white text-left pt-8">
                {{ businesses[0].name }}
            </h1>
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
