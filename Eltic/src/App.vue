<template>
  <h1>Eltic entreprise</h1>
  <p>Bienvenu :{{ firstName }}</p>
  <p>Compteur : {{ count }}</p>
  <button v-on:click="increment()">Compteur</button>
  <button v-on:click="reset()">Reset</button>
</template>

<script setup>
import { ref } from 'vue'

const firstName = 'Willelm'
const count = ref(0)
const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}
</script>
