<template>
  <footer class="w-full text-white mt-12" style="background-color: #42C6C6;">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo Section -->
        <div class="flex flex-col items-center justify-start">
          <img class="w-64 h-24 mb-4 bg-white rounded-lg p-4 object-contain" src="@/public/eltic_logo063.gif" alt="Eltic Logo"></img>
          <p class="text-sm text-opacity-90 text-center">Votre expert en installation de bornes de recharge</p>
        </div>

        <!-- Contact Section -->
        <div class="flex flex-col items-center justify-start">
          <h3 class="text-xl font-bold mb-4 text-white">Nous Contacter</h3>
          <img class="w-20 h-20 mb-3" src="@/public/eltic_IRVE_contact1a.gif" alt="Contact"></img>
          <p class="text-lg font-semibold">06 07 28 87 20</p>
          <p class="text-opacity-90 break-all text-center">bornes-de-recharge@eltic.fr</p>
        </div>

        <!-- Infos Section -->
        <div class="flex flex-col items-center justify-start">
          <h3 class="text-xl font-bold mb-4 text-white">Informations</h3>
          <p class="text-sm text-opacity-90 text-center leading-relaxed">
            SARL au capital de 8 000 euros<br>
            RCS Rennes<br>
            35510 Cesson-Sévigné<br>
            France
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t mt-8 pt-6 text-center text-opacity-90 text-sm" style="border-color: rgba(255, 255, 255, 0.3);">
        <RouterLink to="/MentionsLegales" class="hover:text-white transition-colors duration-300">Mentions légales</RouterLink> | © Eltic 2025 - Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
@import 'tailwindcss';
</style>
