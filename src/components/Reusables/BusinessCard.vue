<script lang="ts">
import { PropType } from 'vue'
import { Business } from '../../types/firebaseTypes'

export default {
    name: 'BusinessCard',
    props: {
        data: Object as PropType<Business>,
    },
}
</script>

<template>
    <div
        class="md:max-w-xs mx-auto bg-white rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <div>
                <img
                    src="https://twinfinite.net/wp-content/uploads/2020/01/The-Idolmaster-Starlit-Season-2-1.jpg"
                    class="card-img-top rounded-2xl object-fill w-80 h-80"
                    alt="..." />
            </div>
            <div class="flex flex-col">
                <div class="py-5">
                    <div class="mb-4 flex justify-between text-l text-left font-bold tracking-tight text-gray-900 dark:text-white">
                        <span>{{ this.data.name }}</span>
                        <span class="text-right">Placeholder</span>
                    </div>
                    <div class="mb-4 text-left">
                        <span class="py-1 mr-2 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700">{{ this.data.category}}</span>
                        <span class="py-1 px-3 text-xs border-solid border-2 border-blue-400 rounded-2xl text-gray-700"> {{this.data.mode}}</span>
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
