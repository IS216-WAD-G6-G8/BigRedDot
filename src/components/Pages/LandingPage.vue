<script lang="ts">
export default {
    name: 'LandingPage',
    data() {
        return {
            categories: [
            {name:"services", url:"/assets/services.jpg"},
            {name:"f&b", url:"/assets/f&b.jpg"},
            {name:"fashion", url:"/assets/fashion.jpg"},
            {name:"crafts", url:"/assets/crafts.jpg"},
            {name:"experiences", url:"/assets/experiences.jpeg"},
          ]
        }
    },
    methods: {},
}
</script>

<template>
    <div class="carousel_container">
        <div v-for="category of categories" class="carousel_box">
            <p class="carousel_text">{{category.name}}</p>
            <img
                class="carousel_img"
                :src="category.url"/>
        </div>
    </div>
</template>

<style scoped>
.carousel_container {
   display: flex;
   height: 100vh;
 }
 .carousel_text {
   font-weight: bold;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   visibility: hidden;
 }
 .carousel_img {
   object-fit: cover;
   height: 100%;
   width: 100%;
 }
 .carousel_box {
   flex: 1;
   transition: 1s;
   position: relative;
 }
 .carousel_box:hover .carousel_text {
   visibility: visible;
 }
 .carousel_box:hover .carousel_img {
   opacity: 20%;
 }
 .carousel_box:hover {
   flex: 4;
 }
</style>
