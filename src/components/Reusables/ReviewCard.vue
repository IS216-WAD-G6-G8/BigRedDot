<script lang="ts">
export default {
    name: 'ReviewCard',
    props: {
        rating: Object,
    }
}
</script>

<template>
    <div v-for="elem of rating" :key="elem" class="w-full p-5 mb-5 border rounded-2xl">
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
        <div class="mt-5">
            <p class="text-gray-700 dark:text-white">
                {{elem["reviewtext"]}}
            </p>
        </div>
    </div>
</template>
