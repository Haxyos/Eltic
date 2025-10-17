<template>
    <div class="flex content-center justify-center items-center">
        <div class="flex flex-col content-center justify-center items-center p-5 w-11/12">
            <div class="flex flex-col w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm"
                v-for="(_, services) in listeService">
                <h1 class="w-full text-center">{{ listeServiceLibelle[services] }}</h1>
                <img v-bind:src=listeImageService[services] alt="Logo"></img>
            </div>
        </div>
    </div>
</template>

<script setup>
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

</script>