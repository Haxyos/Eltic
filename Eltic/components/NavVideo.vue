<template>
  <div class="absolute left-0">
    <RouterLink to="/"><img class="h-15 w-15 cursor-pointer" src="../public/left-arrow-circle-svgrepo-com.svg"
        alt="left arrow"></img></RouterLink>
  </div>
  <div class="flex bg-green-600 content-center justify-center items-center p-2">

    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/ElticVideo">
      Accueil
    </RouterLink>
    </div>
  
</template>

export default {};

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style>
@import 'tailwindcss';
</style>
