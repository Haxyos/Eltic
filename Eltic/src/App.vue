<template>
  <NavBar />
  <div>
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card />
  <Footer />
</template>

<script setup>
import NavBar from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'

</script>

<style>
@import "tailwindcss";
</style>