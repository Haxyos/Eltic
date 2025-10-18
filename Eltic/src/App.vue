<template>
  <NavBar v-if="statuts == true"/>
  
  <div v-else>
  <div>
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card/>
  </div>
  <div></div>
  <Footer />
</template>

<script setup>
import NavBar from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'

let statuts = Card.status;
console.log(statuts)

</script>

<style>
@import "tailwindcss";
</style>