<template>
  <div class="absolute left-0">
    <RouterLink to="/"><img class="h-15 w-15 cursor-pointer" src="../public/left-arrow-circle-svgrepo-com.svg"
        alt="left arrow"></img></RouterLink>
  </div>
  <div class="flex bg-green-600 content-center justify-center items-center p-2">

    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/ElticBorne">
      Accueil
    </RouterLink>
    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/Copropriete">
      Copropriété
    </RouterLink>
    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/Recharge">
      La Recharge
    </RouterLink>
    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/Devis">
      Devis
    </RouterLink>
    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/Realisation">
      Nos Réalisations
    </RouterLink>
    <RouterLink class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" 
      to="/Qualification">
      Qualification
    </RouterLink>
  </div>
  
</template>

export default {};

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
const router = useRouter()

const ComposantActuel = ref('ElticBorne')

</script>

<style>
@import 'tailwindcss';
</style>
