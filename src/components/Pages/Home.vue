<script lang="ts">
import NavBar from "../Reusables/NavBar.vue"

export default {
    name: "Home",
    data() {
        return {
          categories: [
            {name:"services", url:"/assets/services.svg"},
            {name:"f&b", url:"/assets/f&b.svg"},
            {name:"fashion", url:"/assets/fashion.svg"},
            {name:"crafts", url:"/assets/crafts.svg"},
            {name:"experiences", url:"/assets/experiences.svg"},
          ]
        };
    },
    methods: {
    },
    components: { NavBar }
}
</script>

<template>
  <NavBar></NavBar>
  <!-- Build filter section -->
  <div class="bg-[#A4CAFE2E] px-5 w-full flex justify-between">
    <div class="container flex flex-wrap justify-between mx-auto">
      <div v-for="category in categories" class="px-3 py-3 flex flex-col items-center">
        <img :src="category.url"  class="w-6 h-6 mb-2">
        <span class="text-xs md:text-sm">{{category.name}}</span>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
