<template>
  <div class="flex bg-green-700 content-center justify-center items-center">
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
import Test from '../src/Test.vue'
import MainMenu from '../src/ElticBorne.vue'

const ComposantActuel = ref(MainMenu)

const listeLibelle = [
  'Accueil',
  'Copropriété',
  'Nos Réalisation',
  'La recharge',
  'Qualification',
  'Devis',
  'Test',
]

const listeComposant = [
  MainMenu,
  'Copropriété',
  'NosRéalisation',
  'ExplicationRecharge',
  'Qualification',
  'Devis',
  Test,
]
</script>

<style></style>
