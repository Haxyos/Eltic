<template>
  
  <div class="flex bg-green-700 content-center justify-center items-center">
    <div class="left-0">
    <button @click="emission"><img class="h-15 w-15 cursor-pointer" src="../public/left-arrow-circle-svgrepo-com.svg" alt="left arrow"></img></button>
  </div>
    <button
      class="cursor-pointer p-5 mx-1"
      v-for="(_, tab) in listeComposant"
      :key="tab"
      @click="ComposantActuel = tab"
    >
      {{ listeLibelle[tab] }}
    </button>
  </div>
  <component :is="listeComposant[ComposantActuel]"></component>
</template>

export default {};

<script setup>
import { ref } from 'vue'
import MainMenu from '@/ElticVideo.vue'

const ComposantActuel = ref('ElticVideo')

const listeComposant = {
  ElticVideo: MainMenu,
}

const listeLibelle = {
  ElticVideo: 'Accueil',
}
const emits = defineEmits(['retour'])
function emission() {
  emits('retour')
}
</script>

<style></style>
