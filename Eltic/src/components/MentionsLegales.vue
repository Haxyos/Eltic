<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90 backdrop-blur-sm">
      <div class="pt-24 px-6 pb-20">
        <div class="max-w-4xl mx-auto">
          <!-- Titre -->
          <h1 class="text-center text-5xl font-bold text-green-700 mb-16 text-shadow-lg">Mentions légales</h1>

          <!-- Section Identification -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Identification de l'entreprise</h2>
            <ul class="space-y-2 text-gray-700">
              <li><strong>Raison sociale :</strong> ELTIC SARL au capital de 8 000 euros</li>
              <li><strong>SIRET :</strong> 483 364 261 00022</li>
              <li><strong>RCS :</strong> 483 364 261 Rennes</li>
              <li><strong>Siège social :</strong> 10 rue de la rivière - 35510 CESSON-SÉVIGNÉ - FRANCE</li>
            </ul>
          </div>

          <!-- Section Responsable -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Responsable de la publication</h2>
            <p class="text-gray-700">Le représentant légal de l'entreprise ELTIC SARL</p>
          </div>

          <!-- Section Hébergeur -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Hébergeur</h2>
            <ul class="space-y-2 text-gray-700">
              <li><strong>OVH</strong></li>
              <li>2 rue Kellermann - BP 80157</li>
              <li>59053 ROUBAIX CEDEX 1 - FRANCE</li>
            </ul>
          </div>

          <!-- Section Cookies -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Cookies</h2>
            <p class="text-gray-700">Ce site web n'utilise pas de cookies.</p>
          </div>

          <!-- Section Données personnelles -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Données personnelles et confidentialité</h2>
            <ul class="space-y-3 text-gray-700">
              <li>Ce site ne recueille pas de données personnelles.</li>
              <li>La plus grande confidentialité est garantie pour toutes les données personnelles qui ne sont pas recueillies.</li>
            </ul>
          </div>

          <!-- Section Propriété intellectuelle -->
          <div class="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Propriété intellectuelle</h2>
            <div class="space-y-4 text-gray-700">
              <p><strong>Droits d'auteur :</strong> Les visuels et les animations sont la propriété de l'entreprise ELTIC, sauf autre mention.</p>
              
              <div class="mt-4 pt-4 border-t border-gray-300">
                <p class="font-semibold mb-2">Autorisations d'utilisation :</p>
                <ul class="space-y-3 ml-4">
                  <li><strong>go-e :</strong> Les visuels des bornes go-e (go-e chargers) et des autres produits de la marque go-e sont utilisés avec l'autorisation de go-e. ELTIC est "Authorized Dealer" pour les produits go-e.</li>
                  <li><strong>Legrand :</strong> Les visuels des bornes Legrand et des autres produits de la marque Legrand sont utilisés avec l'autorisation de Groupe LEGRAND.</li>
                  <li><strong>Schneider Electric :</strong> Les visuels des bornes Schneider Electric et des autres produits de la marque Schneider Electric sont utilisés avec l'autorisation de Schneider Electric.</li>
                  <li><strong>QUALIFELEC :</strong> Les noms et les visuels de la marque QUALIFELEC sont utilisés avec l'autorisation de l'association QUALIFELEC (www.qualifelec.fr).</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section Information légale -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Information importante</h2>
            <p class="text-gray-700 leading-relaxed">
              ELTIC est une entreprise spécialisée dans l'installation de bornes de recharge pour véhicules électriques. 
              Toutes les informations, visuels et contenus présents sur ce site sont fournis à titre informatif. 
              ELTIC se réserve le droit de modifier, suspendre ou supprimer ce site ou une partie de son contenu sans préavis.
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
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

h1, h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
