/* css a faire */

<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90 backdrop-blur-sm">
      <div class="pt-24 px-6 pb-20">
        <div class="max-w-6xl mx-auto">
          <!-- Titre principal -->
          <h1 class="text-center text-5xl font-bold text-green-700 mb-12 text-shadow-lg">
            Bornes de recharge en copropriété
          </h1>

          <!-- Image descriptive -->
          <div class="mb-16 flex justify-center">
            <img src="@/public/eltic_IRVE_parking-a.gif" alt="parking copropriété avec bornes de recharge" class="rounded-lg shadow-lg max-w-2xl w-full">
          </div>

          <!-- Section Introduction -->
          <div class="mb-16">
            <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
              <h2 class="text-3xl font-bold text-orange-600 mb-4">Infrastructure collective et bornes individuelles</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                L'installation par ELTIC d'une borne de recharge ou d'une prise renforcée sur une place individuelle (emplacement privatif) ou sur une place partagée dans votre immeuble peut être raccordée à l'infrastructure collective.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Cette approche permet une gestion optimale de la consommation énergétique et facilite la facturation de l'électricité consommée par chaque utilisateur.
              </p>
            </div>
          </div>

          <!-- Section Solutions d'installation -->
          <div class="mb-16">
            <div class="mb-8 flex items-center gap-4">
              <h2 class="text-3xl font-bold text-orange-600">🔧 Nos solutions en copropriété</h2>
              <div class="flex-grow h-1 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Solution 1 -->
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                  <h3 class="text-xl font-bold text-orange-700">Infrastructure Collective</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Infrastructure complète dans le parking et bornes individuelles sur les emplacements. Gestion centralisée de l'énergie avec pilotage dynamique de la puissance de charge.
                </p>
              </div>

              <!-- Solution 2 -->
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">2</div>
                  <h3 class="text-xl font-bold text-orange-700">Bornes Individuelles</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Installation de bornes ou prises renforcées sur emplacements privatifs ou partagés. Chaque borne peut être équipée d'un système de comptage et de contrôle d'accès.
                </p>
              </div>

              <!-- Solution 3 -->
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                  <h3 class="text-xl font-bold text-orange-700">Gestion Énergétique</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Pilotage dynamique de la puissance de charge basé sur la capacité disponible du bâtiment. Délestage automatique pour éviter les surcharges.
                </p>
              </div>

              <!-- Solution 4 -->
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">4</div>
                  <h3 class="text-xl font-bold text-orange-700">Contrôle d'Accès</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Systèmes de contrôle par badge RFID ou interphone pour sécuriser l'accès aux bornes. Facturation automatique de la consommation énergétique.
                </p>
              </div>
            </div>
          </div>

          <!-- Section Aides et Primes -->
          <div class="mb-16">
            <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
              <h2 class="text-3xl font-bold text-orange-700 mb-6">💰 Aides et primes disponibles</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-6 border-t-2 border-orange-500">
                  <h3 class="text-lg font-bold text-orange-600 mb-2">Infrastructure Collective</h3>
                  <p class="text-gray-700 mb-3">
                    L'installation de l'infrastructure collective préconisée par ELTIC est éligible à la prime Advenir :
                  </p>
                  <ul class="text-gray-700 space-y-2">
                    <li>✓ Jusqu'à 8 000 € de subvention</li>
                    <li>✓ 3 000 € supplémentaires selon les conditions</li>
                  </ul>
                </div>
                <div class="bg-white rounded-lg p-6 border-t-2 border-orange-500">
                  <h3 class="text-lg font-bold text-orange-600 mb-2">Bornes Individuelles</h3>
                  <p class="text-gray-700 mb-3">
                    L'installation par ELTIC de chaque borne est éligible à la prime Advenir :
                  </p>
                  <ul class="text-gray-700 space-y-2">
                    <li>✓ 600 € par borne standard</li>
                    <li>✓ 1 660 € par borne en zone prioritaire</li>
                  </ul>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-6 italic">
                * L'obtention de la prime Programme Advenir est soumise à conditions. Consulter advenir.mobi pour plus d'informations.
              </p>
            </div>
          </div>

          <!-- Section Avantages -->
          <div class="mb-16">
            <div class="mb-8 flex items-center gap-4">
              <h2 class="text-3xl font-bold text-green-600">✨ Avantages de nos solutions</h2>
              <div class="flex-grow h-1 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 class="text-lg font-bold text-green-700 mb-2">Gestion Optimisée</h3>
                <p class="text-gray-700">Contrôle centralisé de la consommation énergétique avec historique de charge détaillé.</p>
              </div>
              <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 class="text-lg font-bold text-green-700 mb-2">Facturation Précise</h3>
                <p class="text-gray-700">Comptage individuel permettant une facturation juste de l'électricité consommée.</p>
              </div>
              <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 class="text-lg font-bold text-green-700 mb-2">Sécurité Renforcée</h3>
                <p class="text-gray-700">Systèmes de contrôle d'accès et de protection pour les installations collectives.</p>
              </div>
              <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 class="text-lg font-bold text-green-700 mb-2">Conformité Légale</h3>
                <p class="text-gray-700">Installations conformes aux normes de sécurité électrique et de droit à la prise.</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-xl p-10 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">Votre projet de recharge en copropriété</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une étude technique et financière gratuite de votre projet d'installation de bornes de recharge.
            </p>
            <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div class="text-center">
                <p class="text-sm opacity-90 mb-2">Téléphone</p>
                <p class="text-2xl font-bold">+33 (0)2 99 83 80 50</p>
              </div>
              <div class="hidden sm:block w-px h-16 bg-white bg-opacity-30"></div>
              <div class="text-center">
                <p class="text-sm opacity-90 mb-2">Email</p>
                <p class="text-2xl font-bold break-all">contact@eltic.fr</p>
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
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

h1, h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
