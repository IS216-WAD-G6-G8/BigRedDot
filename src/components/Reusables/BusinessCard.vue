<script lang="ts">
import { PropType } from "vue"
import bootstrap from "bootstrap"
import { Business } from "../../types/firebaseTypes"

export default {
    name: 'BusinessCard',
    props: {
        data: Object as PropType<Business>,
    },
}

</script>

<template>
    <div class="card" style="width: 18rem; background-color: plum; margin-bottom: 20px">
        <img src="https://twinfinite.net/wp-content/uploads/2020/01/The-Idolmaster-Starlit-Season-2-1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">{{this.data.name}}</h2>
            <p class="card-text">{{this.data.description}}</p>
        </div>
    </div>

</template>