<template>
    <div>
        <div v-for="(_,num) in listeService"
            class="flex w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm">
            <component class="text-xl" >Content</component>
        </div>
    </div>
</template>

<script>
import ElticBorne from '../src/ElticBorne.vue'
import ElticVideo from '../src/ElticVideo.vue'

const listeService = [
    "ElticBorne",
    "ElticVideo"
]

const listeServiceLibelle = [
    "Eltic : Borne de recharge",
    "Eltic : Video protection"
]


</script>