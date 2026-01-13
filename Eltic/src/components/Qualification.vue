<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90">
      <div class="pt-20 px-6 pb-12">
        <h1 class="text-center text-5xl font-bold text-green-700 mb-12 text-shadow-lg">Nos Labels, Qualifications et Habilitations</h1>
        
        <div class="max-w-5xl mx-auto">
          <!-- Introduction -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-green-600">
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              Afin de garantir la qualité de nos conseils et de nos réalisations, notre personnel est formé, qualifié et habilité.
            </p>
            <p class="text-gray-600 text-sm italic">
              IRVE : Infrastructures de Recharge pour Véhicules Électriques et hybrides rechargeables
            </p>
          </div>

          <!-- Qualifelec Section -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-green-600">
            <h2 class="text-3xl font-bold text-green-700 mb-6 text-shadow-lg">Qualifelec IRVE</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Certifications de qualification IRVE auprès de Qualifelec, l'organisme de certification des entreprises du secteur électrique.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 class="font-bold text-green-700 mb-2">Installateur IRVE</h3>
                <p class="text-sm text-gray-700">Niveau 1</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 class="font-bold text-green-700 mb-2">Installateur IRVE</h3>
                <p class="text-sm text-gray-700">Niveau 2</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 class="font-bold text-green-700 mb-2">Electricien IRVE</h3>
                <p class="text-sm text-gray-700">Maintenance niveau 1</p>
              </div>
            </div>

            <p class="text-gray-600 text-sm mb-2">
              <span class="font-semibold">QR code de vérification du certificat de qualification IRVE :</span> Consultez la base de données Qualifelec pour vérifier nos certifications.
            </p>
          </div>

          <!-- Artisan Section -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-green-600">
            <h2 class="text-3xl font-bold text-green-700 mb-6 text-shadow-lg">Label Artisan</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Artisan électricien inscrit au Répertoire des Métiers - Chambre des Métiers et de l'Artisanat de Bretagne.
            </p>
            
            <p class="text-gray-600 text-sm font-semibold mb-3">Habilitations électriques - Opérations d'ordre électrique domaine BT :</p>
            <ul class="space-y-2 ml-6">
              <li class="text-gray-700 text-sm">• Chargé de travaux B2V Essais</li>
              <li class="text-gray-700 text-sm">• Chargé de consignation BC</li>
              <li class="text-gray-700 text-sm">• Chargé d'intervention BR</li>
              <li class="text-gray-700 text-sm">• Chargé d'opération spécifique BE Essais</li>
            </ul>
          </div>

          <!-- Engagement Section -->
          <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-3xl font-bold text-green-700 mb-6 text-shadow-lg">Notre Engagement Environnemental</h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Et nos déplacements sont faits en véhicule 100% électrique.
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

.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h1, h2, h3 {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}
</style>
