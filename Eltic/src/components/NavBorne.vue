<template>
  <div class="flex bg-gradient-to-r from-green-600 via-green-500 to-green-600 content-center justify-start items-center p-4 gap-3 shadow-lg relative">
    <!-- Bouton retour à gauche -->
    <RouterLink to="/" class="h-16 w-16 cursor-pointer block p-2 rounded-full transition-all duration-300 hover:scale-125 opacity-60 hover:opacity-100 mr-2">
      <img src="@/public/left-arrow-circle-svgrepo-com.svg" alt="left arrow" class="h-full w-full hover:brightness-125"></img>
    </RouterLink>

    <!-- Boutons de navigation -->
    <div class="flex gap-3 justify-center flex-1">

    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/ElticBorne') }" 
      to="/ElticBorne">
      Accueil
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/Copropriete') }"
      to="/Copropriete">
      Copropriété
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/Recharge') }"
      to="/Recharge">
      La Recharge
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/Devis') }"
      to="/Devis">
      Devis
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/Realisation') }"
      to="/Realisation">
      Nos Réalisations
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/Qualification') }"
      to="/Qualification">
      Qualification
    </RouterLink>
    <RouterLink class="nav-button" :class="{ 'nav-button-active': isActive('/AidesPrimes') }"
      to="/AidesPrimes">
      Aides et Primes
    </RouterLink>
    </div>
  </div>
  
  <!-- Lien très discret vers les mentions légales -->
  <div class="absolute bottom-2 right-2">
    <RouterLink to="/MentionsLegales" class="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-xs opacity-40 hover:opacity-60">
      Mentions légales
    </RouterLink>
  </div>
  
</template>

export default {};

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}

// Debug pour vérifier la route actuelle
watch(() => route.path, (newPath) => {
  console.log('Route actuelle:', newPath)
})
</script>

<style>
@import 'tailwindcss';

/* Style de base pour tous les boutons */
.nav-button {
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  cursor: pointer;
}

/* Hover unifié - Tous les boutons deviennent blancs avec ombre */
.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

/* Style pour le bouton actif/selected */
.nav-button-active {
  background-color: rgba(66, 198, 198, 0.9);
  border: 2px solid white;
  box-shadow: 0 0 20px rgba(66, 198, 198, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3);
  font-weight: 700;
}

.nav-button-active:hover {
  background-color: rgba(26, 107, 122, 0.95);
  transform: translateY(-3px);
}

/* Click animation */
.nav-button:active {
  transform: scale(0.95);
}

/* Effet de ripple sur tous les boutons */
.nav-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.nav-button:hover::before {
  width: 300px;
  height: 300px;
}

</style>
