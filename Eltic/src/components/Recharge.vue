<template>
    <NavBorne />
    <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
      <div class="min-h-screen bg-white/90">
        <div class="pt-20 px-6">
            <h1 class="text-5xl font-bold text-center text-green-700 mb-12 text-shadow-lg">Tout pour bien comprendre la recharge</h1>
        </div>
        
        <div class="max-w-6xl mx-auto px-6 pb-12">
          <div class="bg-white rounded-lg shadow-xl p-8 border-l-4 border-green-600">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <!-- Image Section -->
              <div class="flex justify-center">
                <img class="w-full max-w-sm rounded-lg shadow-lg" src="@/public/eltic_IRVE_la-recharge-01a.gif" alt="image d'explication de la recharge"></img>
              </div>
              
              <!-- Content Section -->
              <div>
                <h2 class="text-3xl font-bold text-green-700 mb-4 text-shadow-lg">La recharge électrique : 5 éléments à prendre en compte</h2>
                
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Pour bien choisir sa borne de recharge, il faut prendre en compte plusieurs éléments qui interviennent dans le processus de recharge du véhicule.
                </p>

                <div class="space-y-4">
                  <div class="border-l-4 border-green-600 pl-4">
                    <h3 class="font-bold text-lg text-green-700 mb-2">L'abonnement électrique :</h3>
                    <ul class="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Sa puissance (en "kilo Volt Ampère" : 9 kVA, 12 kVA...)</li>
                      <li>• Monophasé ou triphasé</li>
                      <li>• Les éventuelles options tarifaires (heures pleines / heures creuses)</li>
                    </ul>
                  </div>

                  <div class="border-l-4 border-green-600 pl-4">
                    <h3 class="font-bold text-lg text-green-700 mb-2">La borne de recharge (ou la prise) :</h3>
                    <ul class="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Les types de prises (Type E ou EF, Type 2S...)</li>
                      <li>• Monophasé ou triphasé</li>
                      <li>• La puissance maximum délivrée (en "kilo watt" : 1,8 kW, 7,4 kW, 22 kW...)</li>
                    </ul>
                  </div>

                  <div class="border-l-4 border-green-600 pl-4">
                    <h3 class="font-bold text-lg text-green-700 mb-2">Le câble de recharge :</h3>
                    <ul class="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Les types de connecteurs (Type E ou EF, Type 2...)</li>
                      <li>• Monophasé (3 conducteurs d'énergie) ou triphasé (5 conducteurs d'énergie)</li>
                      <li>• La courant maximum supporté (en Ampères : 8 A, 16 A, 32 A...)</li>
                    </ul>
                  </div>

                  <div class="border-l-4 border-green-600 pl-4">
                    <h3 class="font-bold text-lg text-green-700 mb-2">Le chargeur embarqué dans le véhicule :</h3>
                    <ul class="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Monophasé ou triphasé</li>
                      <li>• La puissance maximum acceptée (en "kilo Watt" : 1,8 kW, 7,4 kW, 22 kW...)</li>
                    </ul>
                  </div>

                  <div class="border-l-4 border-green-600 pl-4">
                    <h3 class="font-bold text-lg text-green-700 mb-2">La batterie du véhicule :</h3>
                    <ul class="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Sa capacité (en "kilo Watt heure" : 6,1 kWh, 50 kWh, 82 kWh...)</li>
                      <li>• Les puissances de charge maximum acceptées (en kW) en courant alternatif (AC) et en courant continu (DC)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

</template>

<script setup>
import NavBorne from './NavBorne.vue';
import Footer from './Footer.vue';
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
