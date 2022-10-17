<script lang="ts">
import { Business } from "../types/firebaseTypes"
import { FirebaseService } from "../services/firebaseService"

const firebaseService = new FirebaseService

export default {
    name: 'FirebaseTest',
    data() {
        return {
            businessData: null as Business[] | null
        }
    },

    methods: {
        getAllData: async function () {
            this.businessData = await firebaseService.getAll()
        }
    }
}

</script>

<template>

    <button id="loadData" v-on:click="getAllData()">Load Data</button>

    <p v-for="business of businessData">{{ business }}</p>

</template>