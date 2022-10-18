<script lang="ts">
import { Business, CategoryEnum } from "../../types/firebaseTypes"
import { FirebaseService } from "../../services/firebaseService"
import BusinessCard from "../Reusables/BusinessCard.vue"

const firebaseService = new FirebaseService

export default {
    name: "FirebaseTest",
    data() {
        return {
            CategoryEnum,
            businessData: null as Business[] | null
        };
    },
    methods: {
        getAllData: async function () {
            this.businessData = await firebaseService.getAll();
        },
        getByCategory: async function (categories: CategoryEnum[]) {
            this.businessData = await firebaseService.getDataByCategory(categories);
        }
    },
    components: { BusinessCard }
}

</script>

<template>

    <button id="loadData" v-on:click="getAllData()">Load Data</button>

    <!-- for testing filter purposes -->
    <button id="loadServices" v-on:click="getByCategory([CategoryEnum.services])">Load Services Data</button>

    <div v-for="business of businessData">
        <BusinessCard :data="business"></BusinessCard>
    </div>

</template>