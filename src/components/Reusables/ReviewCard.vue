<script lang="ts">
import { PropType } from 'vue';
import { RatingData } from '../../types/types'

export default {
    name: 'ReviewCard',
    props: {
        rating: Object as PropType<RatingData>,
    },
    methods: {
        dateString(datetime) {
            const value = new Date(datetime).toLocaleString()
            console.log(value)
            return value
        }
    }
}
</script>

<template>
    <div v-for="elem, key of rating" :key="key" class="w-full p-5 mb-5 border rounded-2xl">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <img class="w-10 h-10 pr-3" src="/assets/profileIcon.svg"/>
                <div class="text-gray-700 dark:text-white font-semibold">{{elem["name"]}}</div>
            </div>
            <div class="flex items-center">
                <div v-for="index in elem['ratingscore']">
                <img class="w-5 h-5" src="/assets/star2.svg"/>
            </div>
            <div v-for="index in (5 - elem['ratingscore'])">
                <img class="w-5 h-5" src="/assets/star_empty.svg"/>
            </div>
            </div>
            
        </div>
        <div class="flex item-center">
            <div class="text-gray-700 text-sm dark:text-white font-semibold">{{this.dateString(elem['datetime'])}}</div>
        </div>
        <div class="mt-5">
            <p class="text-gray-700 dark:text-white">
                {{elem["reviewtext"]}}
            </p>
        </div>
    </div>
</template>
