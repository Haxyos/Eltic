<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90">
      <div class="pt-20 px-6 pb-12">
        <h1 class="text-center text-5xl font-bold text-green-700 mb-4 text-shadow-lg">Les Aides et Primes</h1>
        <p class="text-center text-gray-600 text-lg mb-12">Les principales aides financières pour l'installation d'une borne de recharge</p>
        
        <div class="max-w-5xl mx-auto">
          <!-- Introduction -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 hover:shadow-xl transition-shadow duration-300" style="border-left-color: #42C6C6;">
            <h2 class="text-2xl font-bold mb-4 text-shadow-lg" style="color: #1a6b7a;">Programme Advenir</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Les offres Eltic sont labélisées par le Programme Advenir pour vous faire bénéficier des primes accordées aux propriétaires et aux locataires en immeubles d'habitation (résidentiel collectif).
            </p>
            <p class="text-gray-600 text-sm italic">
              Mise à jour le 03/01/2025
            </p>
          </div>

          <!-- Aides Section -->
          <div class="space-y-6">
            <!-- Aide 1 - Turquoise -->
            <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg shadow-lg p-8 border-t-4 hover:shadow-xl transition-shadow duration-300" style="border-top-color: #42C6C6;">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md text-white font-bold text-xl" style="background-color: #42C6C6;">1</div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold mb-2" style="color: #1a6b7a;">Copropriété - Place Privative</h3>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Point de recharge individuel en résidentiel collectif
                  </p>
                  <div class="bg-white p-4 rounded-lg border-2" style="border-color: #42C6C6;">
                    <p class="text-gray-700 font-semibold mb-1">Prime Advenir</p>
                    <p class="text-gray-700 text-lg"><span class="font-bold" style="color: #42C6C6;">50% du coût HT</span> (puissance ≤ 7,4 kW)</p>
                    <p class="font-bold text-2xl mt-2" style="color: #42C6C6;">Jusqu'à 600 €</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Aide 2 - Orange -->
            <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-xl">2</div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-orange-700 mb-2">Copropriété - Place Partagée</h3>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Point de recharge partagé en résidentiel collectif
                  </p>
                  <div class="bg-white p-4 rounded-lg border-2 border-orange-300">
                    <p class="text-gray-700 font-semibold mb-1">Prime Advenir</p>
                    <p class="text-gray-700 text-lg"><span class="font-bold text-orange-700">50% du coût HT</span></p>
                    <p class="text-orange-700 font-bold text-2xl mt-2">Jusqu'à 1 660 €</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Aide 3 - Turquoise -->
            <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg shadow-lg p-8 border-t-4 hover:shadow-xl transition-shadow duration-300" style="border-top-color: #42C6C6;">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md text-white font-bold text-xl" style="background-color: #42C6C6;">3</div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold mb-2" style="color: #1a6b7a;">Infrastructure Collective en Copropriété</h3>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Installation complète d'une infrastructure collective de recharge
                  </p>
                  <div class="bg-white p-4 rounded-lg border-2" style="border-color: #42C6C6;">
                    <p class="text-gray-700 font-semibold mb-1">Prime Advenir</p>
                    <p class="text-gray-700 text-lg"><span class="font-bold" style="color: #42C6C6;">50% du coût HT</span> de l'infrastructure collective</p>
                    <p class="text-gray-600 text-sm mt-3 italic">
                      Le montant maximum dépend de la nature du projet et du nombre de points de recharge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Aide 4 - Orange -->
            <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-xl">4</div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-orange-700 mb-2">Maison Individuelle</h3>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Installation d'une borne de recharge dans une maison individuelle
                  </p>
                  <div class="bg-white p-4 rounded-lg border-2 border-orange-300">
                    <p class="text-gray-700 mb-3 font-semibold">Aides disponibles :</p>
                    <ul class="space-y-2 ml-6">
                      <li class="text-gray-700 text-sm">• MaPrimeRénov' (si revenus modestes)</li>
                      <li class="text-gray-700 text-sm">• Éco-PTZ (Éco-Prêt à Taux Zéro)</li>
                      <li class="text-gray-700 text-sm">• Crédit d'impôt pour la transition énergétique</li>
                      <li class="text-gray-700 text-sm">• TVA réduite (5,5%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="bg-white rounded-lg shadow-lg p-8 mt-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 class="text-2xl font-bold text-orange-700 mb-4 text-shadow-lg">Vous avez des questions ?</h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nos équipes sont à votre disposition pour vous aider à identifier les aides disponibles pour votre projet et vous accompagner dans les démarches.
            </p>
            <p class="text-gray-600 text-sm">
              <span class="font-semibold">Contactez-nous :</span> 06 07 28 87 20 ou bornes-de-recharge@eltic.fr
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
