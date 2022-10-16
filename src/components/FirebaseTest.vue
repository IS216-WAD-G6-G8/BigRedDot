<script lang="ts">
import axios from 'axios'

// to be modified
interface Business {
    category: string,
    contact: {
        facebook: string,
        instagram: string,
        whatsapp: string,
    },
    description: string,
    location: string,
    rating: number,
}

export default {
    name: 'FirebaseTest',
    data() {
        return {
            firebaseUrl: "https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/businesses.json" as string,
            businessData: null as Business[] | null
        }
    },

    methods: {
        getBusinessData: async function (url: string): Promise<void> {
            try {
                await axios.get(url)
                    .then(response => this.businessData = response.data)
            } catch (err) {
                console.error(err)
            }
        },
    }
}

</script>

<template>

    <button id="loadData" v-on:click="getBusinessData(firebaseUrl)">Load Data</button>

    <p v-for="business of businessData">{{ business }}</p>

</template>