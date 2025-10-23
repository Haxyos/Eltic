<template>
    <div class="flex group content-center justify-center items-center">
        <div class="flex flex-col content-center justify-center items-center p-5 w-11/12">
            <button
            @click="emission()"
                class="flex flex-col w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm rounded-2xl overflow-hidden hover:cursor-pointer hover:scale-105 duration-300">
                <h1 class="w-full text-center text-3xl font-bold z-50">{{ libelle }}</h1>
                <img :class="{'absolute left-0 transform transition-none z-0 opacity-45 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in group-hover:translate-x-[1500px]': title === 'ElticBorne'}" class="" v-bind:src=image alt="Logo"></img>
                <div v-html="description" class="text-lg p-5 z-50 w-5/6"></div>
            </button>
        </div>
    </div>
</template>

export default {}

<script setup>

const props = defineProps({
    title: String,
    libelle: String,
    image: String,
    description: String
})

const emits = defineEmits([
    'click'
])
function emission(){
    emits('click', props.title);
}

</script>

<style>
@import 'tailwindcss';
</style>