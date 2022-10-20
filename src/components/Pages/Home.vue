<script lang="ts">
import NavBar from '../Reusables/NavBar.vue'
import { Business, CategoryEnum } from '../../types/firebaseTypes'
import { FirebaseService } from '../../services/firebaseService'
import BusinessCard from '../Reusables/BusinessCard.vue'

const firebaseService = new FirebaseService()

export default {
    name: 'Home',
    data() {
        return {
            categories: [
                { name: 'services', url: '/assets/services.svg' },
                { name: 'fnb', url: '/assets/f&b.svg' },
                { name: 'fashion', url: '/assets/fashion.svg' },
                { name: 'crafts', url: '/assets/crafts.svg' },
                { name: 'experiences', url: '/assets/experiences.svg' },
            ],
            CategoryEnum,
            businessData: null as Business[] | null,
        }
    },
    methods: {
        getAllData: async function () {
            this.businessData = await firebaseService.getAll()
        },
        getByCategory: async function (categories: CategoryEnum[]) {
            this.businessData = await firebaseService.getDataByCategory(
                categories
            )
        },
    },
    components: { NavBar, BusinessCard },
}
</script>

<template>
    <NavBar></NavBar>
    <!-- Build filter section -->
    <div class="bg-[#A4CAFE2E] px-5 w-full flex justify-between">
        <div class="container overflow-scroll flex justify-between mx-auto">
            <div id="cat" v-for="category in categories">
                <button id="cat_button" v-on:click="getByCategory([CategoryEnum[category.name]])" class="bg-[#a4cafe00] px-3 py-3 mr-7 md:mr-0 flex flex-col items-center">
                    <img id="icon" :src="category.url" class="w-6 h-6 mb-2" />
                    <span class="text-xs md:text-sm">{{ category.name }}</span>
                </button>
            </div>
        </div>
    </div>
    <!-- Build card component -->
    <div v-for="business of businessData">
        <BusinessCard :data="business"></BusinessCard>
    </div>
</template>

<style scoped>

#cat_button {
    position: relative;
    border-radius: unset;
}

#cat_button:hover {
  border-color: transparent;
}

#cat_button:focus {
  outline: none;
}

#cat_button:focus:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#cat_button:after {
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

#cat_button:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>
