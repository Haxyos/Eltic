<template>
    <div>
        <div class="flex w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm"
            v-for="service in listeService">
            {{ service}}
        </div>
    </div>
</template>

<script setup>
import ElticBorne from '../src/ElticBorne.vue'
import ElticVideo from '../src/ElticVideo.vue'

const listeService = [
    ElticBorne,
    ElticVideo
]

const listeServiceLibelle = [
    "Eltic : Borne de recharge",
    "Eltic : Video protection"
]


</script>