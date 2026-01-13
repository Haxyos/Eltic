<template>
  <RouterView />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

const pageTitles = {
  '/': 'Accueil - ELTIC',
  '/ElticBorne': 'Bornes de recharge - ELTIC',
  '/ElticVideo': 'Surveillance vidéo - ELTIC',
  '/Copropriete': 'Copropriété - ELTIC',
  '/Devis': 'Devis gratuit - ELTIC',
  '/Realisation': 'Nos réalisations - ELTIC',
  '/Recharge': 'La recharge électrique - ELTIC',
  '/Qualification': 'Qualification - ELTIC',
  '/AidesPrimes': 'Aides et primes - ELTIC',
  '/MentionsLegales': 'Mentions légales - ELTIC',
}

const updateTitle = () => {
  const title = pageTitles[route.path] || 'ELTIC - Bornes de recharge électriques'
  document.title = title
}

// Mettre à jour le titre au chargement initial
updateTitle()

// Mettre à jour le titre quand la route change
watch(() => route.path, () => {
  updateTitle()
})
</script>

<style>
@import 'tailwindcss';
</style>
