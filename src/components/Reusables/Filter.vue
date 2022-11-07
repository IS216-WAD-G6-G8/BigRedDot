<script lang="ts">
export default {
    name: 'Filter',
    data() {
        return {
            lowerLimit: 0,
            upperLimit: 100,
            min: 0,
            max: 100,
            selectedMode: 'physical',
            stars: ['Any','1 ★','2 ★','3 ★','4 ★','5 ★'],
            deliveryOptions: ['Self pick-up','Same day delivery','One-day delivery','Standard delivery'],
            popularity: ['Trending','Most Recent','Most Views','Best Reviewed']
        }
    },
    methods: {
        // ensures the min is always lower than the max
        setNewRange(){
            if (this.min > this.max){
                let temp = this.max
                this.max = this.min
                this.min = temp
            }
        },
        close(){
            this.$emit('close')
        }
    },
}
</script>

<template>
    <div class="popup">
        <div class="bg-white text-black py-1 px-24 w-3/5 relative">
        
        <!-- cancel icon -->
        <div class="my-10">
            <img class="absolute h-5 w-5 top-5 left-5 cursor-pointer" @click="close" src="assets/cancel.png" id="cancelbtn" alt="">
            <p class="mb-8 font-bold text-xl">Filter</p>
        </div>

        <!-- price range -->
        <div class="my-10">
            <p class="text-left font-bold">Price Range</p>
            <div class="slider">
                <input class="minPoint" id="minInput" type="range" :min="lowerLimit" :max="upperLimit" v-model.number="min" @change="setNewRange()">
                <input class="maxPoint" id="maxInput" type="range" :min="lowerLimit" :max="upperLimit" v-model.number="max" @change="setNewRange()">
            </div>
            <div class="flex justify-between items-center mt-5">
                <div class="w-2/5">
                    <p>Min</p>
                    <input type="number" class="bg-white border rounded w-full" v-model="min">
                </div>
                <div class="w-1/5">
                    -
                </div>
                <div class="w-2/5">
                    <p>Max</p>
                    <input type="number" class="bg-white border rounded w-full" v-model="max">
                </div>
            </div>
        </div>

        <!-- preferred mode -->
        <div class="my-10 text-left">
            <p class="font-bold">Prefered mode</p>
            <label class="pr-5">Physical<input class="ml-2" type="radio" name="mode" :checked="selectedMode == 'physical'"></label>
            <label>Online<input class="ml-2" type="radio" name="mode" :checked="selectedMode == 'online'"></label>
        </div>

        <!-- rating -->
        <div class="my-10 text-left">
            <p class="font-bold">Rating</p>
            <div>
                <button class="ratingBtn box-border bg-white border rounded border-black mr-4 mb-4" v-for="star in stars">{{star}}</button>
            </div>
        </div>

        <!-- delivery option -->
        <div class="my-10">
            <p class="text-left font-bold">Delivery Option</p>
            <div class="grid gap-2 grid-cols-2 grid-rows-2">
                <label v-for="option in deliveryOptions" class="text-left"><input type="checkbox">{{option}}</label>
            </div>
        </div>

        <!-- popularity -->
        <div class="my-10 text-left">
            <p class="font-bold">Popularity</p>
            <select class="bg-white">
                <option v-for="item in popularity">{{item}}</option>
            </select>
        </div>

        <!-- search -->
        <div class="my-10 text-center">
            <button @click="close" id="searchBtn" class="w-full font-bold">Search</button>
        </div>
    </div>
    </div>
</template>

<style scoped>
    /* filter pop up position */
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgb(0,0,0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* price range slider */
    .slider {
        position: relative;
        margin: auto;
        width: 60%;
        height: 30px;
    }
    .slider input[type=range] {
        width: 100% !important;
    }
    .slider input[type=range], .slider svg {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    input[type=range]::-webkit-slider-thumb{
        position: relative;
        z-index: 2;
    }
    /* rating button */
    .ratingBtn:hover {
        background-color: rgb(59 130 246);
        border-color: white;
        transition: 0.3s;
    }
    .ratingBtn:focus {
        background-color: rgb(59 130 246 / 0.5);
        transition: 0.3s;
    }
    /* search button */
    #searchBtn {
        background-color: rgb(59 130 246 / 0.5)
    }
</style>
