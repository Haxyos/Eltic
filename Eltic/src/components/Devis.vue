/* css a faire */

<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90">
      <div class="pt-20 px-6 pb-12">
        <h1 class="text-center text-5xl font-bold text-green-700 mb-12 text-shadow-lg">Devis pour l'installation d'une borne de recharge électrique</h1>
        
        <div class="max-w-5xl mx-auto">
          <!-- Introduction -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4 text-shadow-lg">Obtenir votre devis gratuit</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              En maison individuelle ou en immeuble de copropriété, pour préciser avec vous votre projet et prendre en compte les caractéristiques des lieux, nous nous déplaçons gratuitement (dans un périmètre de 20 km autour de Rennes) afin d'établir un devis pour l'installation de votre borne de recharge électrique.
            </p>
            <p class="text-gray-700 leading-relaxed">
              En copropriété, pour un projet d'infrastructure collective de recharge, une étude technique et financière (avec comparaison de plusieurs scénarios) peut être nécessaire avant l'établissement d'un devis.
            </p>
          </div>

          <!-- Maison Individuelle Section -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg p-8 mb-8 border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white font-bold text-xl">1</div>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-green-700 mb-3">Maison Individuelle</h3>
                <p class="text-gray-700 mb-4 leading-relaxed">
                  Vous souhaitez installer une borne de recharge dans votre maison ? Nous nous déplaçons gratuitement pour établir un devis adapté à votre situation.
                </p>
                <div class="bg-white p-4 rounded-lg border-2 border-green-300">
                  <p class="text-gray-700 mb-3 font-semibold">Nos services incluent :</p>
                  <ul class="space-y-2 ml-6">
                    <li class="text-gray-700 text-sm">• Étude de faisabilité technique</li>
                    <li class="text-gray-700 text-sm">• Évaluation de votre installation électrique</li>
                    <li class="text-gray-700 text-sm">• Devis gratuit et sans engagement</li>
                    <li class="text-gray-700 text-sm">• Conseil sur les aides disponibles</li>
                    <li class="text-gray-700 text-sm">• Installation professionnelle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Copropriété Section -->
          <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-lg p-8 mb-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-xl">2</div>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-orange-700 mb-3">Copropriété</h3>
                <p class="text-gray-700 mb-4 leading-relaxed">
                  Pour un projet d'infrastructure collective de recharge, nous proposons une étude technique et financière approfondie avec comparaison de plusieurs scénarios.
                </p>
                <div class="bg-white p-4 rounded-lg border-2 border-orange-300">
                  <p class="text-gray-700 mb-3 font-semibold">Notre accompagnement comprend :</p>
                  <ul class="space-y-2 ml-6">
                    <li class="text-gray-700 text-sm">• Étude technique complète</li>
                    <li class="text-gray-700 text-sm">• Analyse financière et comparaison de scénarios</li>
                    <li class="text-gray-700 text-sm">• Étude de faisabilité</li>
                    <li class="text-gray-700 text-sm">• Devis détaillé pour l'installation</li>
                    <li class="text-gray-700 text-sm">• Accompagnement administratif</li>
                    <li class="text-gray-700 text-sm">• Aide pour les demandes de subventions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact CTA -->
          <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-bold text-green-700 mb-4 text-shadow-lg">Contactez-nous pour votre devis</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Vous avez un projet d'installation de borne de recharge ? Nos experts vous accompagneront à chaque étape. Contactez-nous dès maintenant pour obtenir votre devis gratuit !
            </p>
            <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <p class="text-gray-700 font-semibold mb-3">Contact commercial et technique :</p>
              <p class="text-lg font-bold text-green-700 mb-2">06 07 28 87 20</p>
              <p class="text-lg font-bold text-green-700">bornes-de-recharge@eltic.fr</p>
              <p class="text-gray-600 text-sm mt-4 italic">
                Déplacement gratuit dans un périmètre de 20 km autour de Rennes
              </p>
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
