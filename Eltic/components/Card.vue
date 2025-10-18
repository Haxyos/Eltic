<template>
    <div class="flex content-center justify-center items-center">
        <div class="flex flex-col content-center justify-center items-center p-5 w-11/12">
            <button @click="changeStatus(true)" class="flex flex-col w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm hover:cursor-pointer hover:scale-120 duration-300"
                v-for="(_, services) in listeService">
                <h1 class="w-full text-center">{{ listeServiceLibelle[services] }}</h1>
                <img v-bind:src=listeImageService[services] alt="Logo"></img>
            </button>
        </div>
    </div>
</template>

export default {}

<script setup>
import {ref} from 'vue'
const listeService = [
    'ElticBorne',
    'ElticVideo'
]

const listeServiceLibelle = [
    "Eltic : Borne de recharge",
    "Eltic : Video protection"
]

const listeImageService = [
    "../eltic+voiture-electrique020.png",
    "#"
]

const listeRefPage = [
    "../src/ElticBorne.vue",
    "../src/ElticVideo.vue"
]

let status = ref(false);

function changeStatus(statuts){
    status.value = statuts
}

</script>