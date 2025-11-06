/* css a faire */

<template>
  <NavBorne />
  <div>
    <h1 class="text-center text-3xl font-bold">
      Devis pour l'installation d'une borne de recharge électrique
    </h1>
  </div>
  <div v-for="(_, option) in option">
    <h1>Devis pour {{ option[option] }}</h1>
    <img src="#" alt="image batiment"></img>
  </div>
  <Footer />
</template>

<script setup>
import NavBorne from './NavBorne.vue';
import Footer from './Footer.vue';

let option = ['une maison individuelle', 'une copropriété']
</script>

<style>
@import 'tailwindcss';
</style>
