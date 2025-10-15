<template>
  <NavBar />
  <h1>Eltic entreprise</h1>
  <p>Bienvenu :{{ firstName }}</p>
  <p>Compteur : {{ count }}</p>
  <div v-bind:id="`p-${count}`">Div avec id dynamique</div>
  <div v-bind:id="count + 1">Div avec autre id dynamique</div>
  <div v-show="count >= 5">BRAVO !</div>
  <button v-on:click="increment()">Compteur</button>
  <button v-on:click="reset()">Reset</button>
</template>

<script setup>
import NavBar from '../components/Nav.vue'
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