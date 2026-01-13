<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90">
      <div class="h-[60vh] content-center px-6 pt-20">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-center text-5xl font-bold text-green-700 mb-8">
            Bienvenue sur le site de Eltic : Borne de Recharge
          </h1>
          
          <div class="bg-white rounded-lg shadow-lg p-8 mb-6 border-l-4 border-green-600">
            <p class="text-center text-xl text-gray-700 mb-6">
              Nous installons des bornes de recharges pour véhicules électriques et hybrides rechargeables.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div class="text-center p-4 bg-green-100 rounded-lg">
                <span class="text-2xl font-bold text-green-700">⚡</span>
                <p class="text-lg font-semibold text-green-600 mt-2">Etude</p>
              </div>
              <div class="text-center p-4 bg-green-100 rounded-lg">
                <span class="text-2xl font-bold text-green-700">🔧</span>
                <p class="text-lg font-semibold text-green-600 mt-2">Installation</p>
              </div>
              <div class="text-center p-4 bg-green-100 rounded-lg">
                <span class="text-2xl font-bold text-green-700">🛡️</span>
                <p class="text-lg font-semibold text-green-600 mt-2">Maintenance</p>
              </div>
            </div>

            <p class="text-center text-lg text-gray-600 mt-8 font-medium">
              En infrastructure collective en copropriété
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import NavBorne from './NavBorne.vue'
import Footer from './Footer.vue'
import fondImg from '@/public/eltic_IRVE_image_fond.png'
</script>

<style>
@import 'tailwindcss';
</style>
