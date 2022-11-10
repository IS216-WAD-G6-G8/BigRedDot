<script lang="ts">
import { PropType } from 'vue'
import { Business } from '../../types/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { UserService } from '../../services/userService'

SwiperCore.use([Navigation, Pagination, A11y])
const userService = new UserService

export default {
    name: 'BusinessCard',
    data() {
        return {
            cards: [
                '/assets/fashion.jpg',
                '/assets/services.jpg',
                '/assets/crafts.jpg',
            ] as string[],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        }
    },
    props: {
        data: Object as PropType<Business>,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        imageSource (): string {
            if (this.$store.state.userBookmarks) {
                if (Object.values(this.$store.state.userBookmarks).includes(this.data.id)) {
                    return '/assets/love.svg'
                } else {
                    return '/assets/confirm.svg'
                }
            } else {
                return '/assets/confirm.svg'
            }
        }
    },
    methods: {
        addFav(): void {
            const business_id = this.data.id

            var bookmarksArray: number[] = this.$store.state.userBookmarks
            const uid = this.$store.state.user.multiFactor.user.uid

            if (bookmarksArray.includes(business_id)) {
                // if it has been bookmarked
                bookmarksArray.splice(bookmarksArray.indexOf(business_id), 1)
                userService.updateBookmarks(uid, bookmarksArray)
            } else {
                // if it is not already bookmarked
                bookmarksArray.push(business_id)
                userService.updateBookmarks(uid, bookmarksArray)
            }
            
            // lazy method of updating, will improve if time permits
            this.$store.dispatch("commitUserBookmarks", bookmarksArray)
        },
    },
}
</script>

<template>
    <div
        class="md:max-w-xs h-full flex justify-center mx-auto bg-white rounded-2xl border-gray-20 dark:bg-slate-900">
        <a class="flex flex-col items-center">
            <div class="w-72 h-72 relative">
                <!-- <img
                    src="https://twinfinite.net/wp-content/uploads/2020/01/The-Idolmaster-Starlit-Season-2-1.jpg"
                    class="card-img-top rounded-2xl object-none w-80 h-80"
                    alt="..." /> -->
                <RouterLink
                    :to="{
                        name: 'BusinessDetail',
                        params: { business_id: this.data.id },
                    }">
                    <swiper
                        :slides-per-view="1"
                        :space-between="30"
                        :pagination="{ clickable: true } as any"
                        class="default-slider rounded-2xl">
                        <swiper-slide v-for="index in 3" :key="index">
                            <img v-if="this.data.images !== undefined "
                                class="rounded-2xl object-cover w-[17rem] h-[17rem]" 
                                :src="this.data.images[index-1]" />
                            <div class="swiper-pagination"></div></swiper-slide
                    ></swiper>
                </RouterLink>
                <img
                    @click="addFav()"
                    class="absolute m-4 top-4 right-3 z-10 w-[28px]"
                    :src="imageSource" />
            </div>
            <RouterLink
                :to="{
                    name: 'BusinessDetail',
                    params: { business_id: this.data.id },
                }">
                <div class="flex flex-col">
                    <div class="py-5 px-5 flex flex-col">
                        <div
                            class="mb-4 flex justify-between text-l text-left font-bold tracking-tight text-gray-900 dark:text-white">
                            <span>{{ this.data.name }}</span>
                            <div class="text-right flex">
                                <img class="pr-3" src="/assets/star.svg" />
                                <span>4.0</span>
                                <div></div>
                            </div>
                        </div>
                        <div class="mb-4 text-left">
                            <div
                                class="inline py-1 mr-2 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700 dark:text-white">
                                {{ this.data.category }}
                            </div>
                            <div
                                class="inline py-1 px-3 text-xs border-solid border-2 border-rose-300 rounded-2xl text-gray-700 dark:text-white">
                                {{ this.data.mode }}
                            </div>
                        </div>
                        <div
                            class="text-left w-64 text-sm line-clamp-2 font-normal text-gray-700 dark:text-gray-200">
                            {{ this.data.description }}
                        </div>
                    </div>
                </div>
            </RouterLink>
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
