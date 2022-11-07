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
            stars: ['Any', '1 ★', '2 ★', '3 ★', '4 ★', '5 ★'],
            deliveryOptions: [
                'Self pick-up',
                'Same day delivery',
                'One-day delivery',
                'Standard delivery',
            ],
            popularity: [
                'Trending',
                'Most Recent',
                'Most Views',
                'Best Reviewed',
            ],
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        setNewRange(){
            if (this.max < this.min) {
                let temp = this.max
                this.max = this.min
                this.min = temp
            }
        }
    },
    computed: {
        progress_left(){
            return this.min / this.upperLimit * 100 + '%'
        },
        progress_right(){
            return 100 - (this.max / this.upperLimit * 100) + '%'
        }
    }
}
</script>

<template>
    <div
        class="fixed inset-0 z-50 px-6 justify-center items-center flex bg-slate-500/60">
        <div
            class="bg-white text-black relative max-h-[40rem] rounded-2xl overflow-auto">
            <!-- cancel icon -->
            <img
                class="absolute h-5 w-5 top-5 left-5 cursor-pointer"
                @click="close"
                src="/assets/cross.svg"
                id="cancelbtn"
                alt="" />
            <div class="pt-3 pb-3 px-12 w-full border-b">
                <p class="flex justify-center font-bold text-xl">Filter</p>
            </div>
            <!-- price range -->
            <div class="my-10 px-12">
                <p class="text-left font-bold">Price Range</p>
                <div class="slider my-6">
                    <div class="progress" :style="{left:progress_left, right:progress_right}"></div>
                    <div class="range-input">
                        <input type="range" @change="setNewRange()" :min="lowerLimit" :max="upperLimit" v-model="min">
                        <input type="range" @change="setNewRange()" :min="lowerLimit" :max="upperLimit" v-model="max">
                    </div>
                </div>
                <div class="flex justify-between items-center mt-5">
                    <div class="w-2/5">
                        <p class="font-bold">Min</p>
                        <input
                            type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="min"/>
                    </div>
                    <div class="w-1/5">---</div>
                    <div class="w-2/5">
                        <p class="font-bold">Max</p>
                        <input
                            type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="max"/>
                    </div>
                </div>
            </div>

            <!-- preferred mode -->
            <div class="text-left px-12">
                <p class="text-left font-bold pb-3">Mode</p>
                <div class="flex items-center">
                    <input
                        type="radio"
                        name="physical"
                        value="mode"
                        class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                    <label
                        class="text-sm font-medium text-gray-900 ml-2 mr-5 block">
                        Physical
                    </label>
                    <input
                        type="radio"
                        name="physical"
                        value="mode"
                        class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                    <label
                        class="text-sm font-medium text-gray-900 ml-2 block">
                        Online
                    </label>
                </div>
            </div>

            <!-- rating -->
            <div class="my-10 text-left px-12">
                <p class="font-bold pb-3">Rating</p>
                <div>
                    <span v-for="star in stars" class="mr-4">
                        <input
                            class="ratingBtn box-border bg-white border rounded border-black"
                            type="radio" :id="star" name="chosenRating">
                        <label class="rating" :for="star">                        
                            {{ star }}
                        </label>
                    </span>
                </div>                                                              
            </div>

            <!-- search -->
            <div class="my-10 text-center px-12">
                <button @click="close" id="searchBtn" class="w-full font-bold">
                    Search
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* price range slider */
.slider {
    height: 5px;
    background-color: grey;
    border-radius: 5px;
    position: relative;
}
.slider .progress {
    height: 5px;
    background-color: #007aff;
    border-radius: 5px;
    position: absolute;
}
.range-input {
    position: relative;
}
.range-input input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 5px;
    width: 100%;
    -webkit-appearance: none;
    background: none;
}
input[type="range"]::-webkit-slider-thumb{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    -webkit-appearance: none;
    background: #007aff;
    pointer-events: auto;
    position: relative;
    z-index: 1;
}
input[type="range"]::-moz-range-thumb{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    -moz-appearance: none;
    background: #007aff;
    pointer-events: auto;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* rating button */
.ratingBtn {
    display: none;
}
.rating {
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: transparent;
    cursor: pointer;
}
.ratingBtn:hover + label {
    background-color: rgb(59 130 246 / 0.25);
    transition: 0.3s;
}
.ratingBtn:checked + label {
    background-color: rgb(59 130 246 / 0.5);
    transition: 0.3s;
}

/* search button */
#searchBtn {
    background-color: rgb(59 130 246 / 0.5);
}
</style>
