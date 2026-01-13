<template>
  <NavBorne />
  <div class="min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${fondImg})` }">
    <div class="min-h-screen bg-white/90 backdrop-blur-sm">
      <div class="pt-24 px-6 pb-20">
        <div class="max-w-7xl mx-auto">
          <!-- Titre principal -->
          <div class="mb-20">
            <h1 class="text-center text-5xl font-bold text-green-700 mb-6 text-shadow-lg">Nos Réalisations</h1>
            <p class="text-center text-lg text-gray-700 max-w-3xl mx-auto">Découvrez les différents projets d installations de bornes de recharge que nous avons réalisés en Bretagne et en Île-de-France.</p>
          </div>

          <!-- Sections séparées par type -->
          <!-- Maisons Individuelles -->
          <div class="mb-16">
            <div class="mb-8 flex items-center gap-4">
              <h2 class="text-3xl font-bold text-green-600">🏠 Maisons Individuelles</h2>
              <div class="flex-grow h-1 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div v-for="(real, idx) in getRealizationsByType('maison')" :key="'maison-' + idx" class="group">
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md hover:shadow-xl p-8 border-l-4 border-green-600 transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                      ✓
                    </div>
                    <h3 class="text-lg font-bold text-green-700 flex-grow">{{ real.titre }}</h3>
                  </div>
                  <p class="text-sm font-semibold text-green-600 mb-3">📍 {{ real.lieu }}</p>
                  <p v-if="real.description" class="text-gray-700 text-sm leading-relaxed border-t border-green-300 pt-3">
                    {{ real.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Copropriétés -->
          <div class="mb-16">
            <div class="mb-8 flex items-center gap-4">
              <h2 class="text-3xl font-bold text-orange-600">🏢 Copropriétés</h2>
              <div class="flex-grow h-1 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div v-for="(real, idx) in getRealizationsByType('copro')" :key="'copro-' + idx" class="group">
                <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md hover:shadow-xl p-8 border-l-4 border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                      ✓
                    </div>
                    <h3 class="text-lg font-bold text-orange-700 flex-grow">{{ real.titre }}</h3>
                  </div>
                  <p class="text-sm font-semibold text-orange-600 mb-3">📍 {{ real.lieu }}</p>
                  <p v-if="real.description" class="text-gray-700 text-sm leading-relaxed border-t border-orange-300 pt-3">
                    {{ real.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Infrastructure Collective -->
          <div>
            <div class="mb-8 flex items-center gap-4">
              <h2 class="text-3xl font-bold" style="color: #42C6C6;">🔌 Infrastructure Collective</h2>
              <div class="flex-grow h-1 rounded-full" style="background: linear-gradient(90deg, #42C6C6 0%, transparent 100%);"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div v-for="(real, idx) in getRealizationsByType('irve')" :key="'irve-' + idx" class="group">
                <div class="bg-gradient-to-br rounded-lg shadow-md hover:shadow-xl p-8 border-l-4 transition-all duration-300 transform hover:-translate-y-1" 
                     style="background: linear-gradient(135deg, rgba(66, 198, 198, 0.1) 0%, rgba(26, 107, 122, 0.1) 100%); border-left-color: #42C6C6;">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg" style="background-color: #42C6C6;">
                      ✓
                    </div>
                    <h3 class="text-lg font-bold flex-grow" style="color: #1a6b7a;">{{ real.titre }}</h3>
                  </div>
                  <p class="text-sm font-semibold mb-3" style="color: #42C6C6;">📍 {{ real.lieu }}</p>
                  <p v-if="real.description" class="text-gray-700 text-sm leading-relaxed border-t pt-3" style="border-top-color: #42C6C6;">
                    {{ real.description }}
                  </p>
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
import NavBorne from './NavBorne.vue'
import Footer from './Footer.vue'
import fondImg from '@/public/eltic_IRVE_image_fond.png'

const realizations = [
  { titre: "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour Y.L.", lieu: "Chantepie", type: "copro", description: "Borne raccordée au compteur Linky de l'appartement pour la gestion de la charge (via TIC du Linky, gestion dynamique de la puissance de charge et des plages horaires) et au réseau de données de l'appartement (câble de communication ethernet RJ45) pour la gestion de la borne de recharge via application smartphone." },
  { titre: "Borne T2S à 7,4 kW Schneider Charge dans le garage d'une maison individuelle", lieu: "Bretagne", type: "maison", description: "(avec pilotage dynamique de la puissance de charge par délesteur)" },
  { titre: "Borne T2S à 7,4 kW dans le garage d'une maison individuelle", lieu: "Cesson-Sévigné", type: "maison", description: "(avec pilotage de la puissance de charge par compteur délesteur)" },
  { titre: "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour B.M.", lieu: "Cesson-Sévigné", type: "copro", description: "(avec contrôle d'accès à la charge par badge RFID)" },
  { titre: "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour Y.G.", lieu: "Cesson-Sévigné", type: "copro", description: "(avec contrôle d'accès à la charge par badge RFID)" },
  { titre: "Infrastructure collective de recharge (IRVE collective) desservant les 49 places du parking", lieu: "Cesson-Sévigné", type: "irve", description: "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h." },
  { titre: "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez JP.J.", lieu: "Bruz", type: "maison", description: "(avec contrôle des horaires et pilotage de la puissance de charge par le compteur Linky)" },
  { titre: "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez A.M.", lieu: "Chantepie", type: "maison", description: "" },
  { titre: "Infrastructure collective de recharge (IRVE collective) desservant les 39 places du parking", lieu: "Cesson-Sévigné", type: "irve", description: "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h." },
  { titre: "Borne T2S à 7,4 kW en façade d'une maison individuelle", lieu: "Bruz", type: "maison", description: "(avec contrôle des horaires et pilotage de la puissance de charge par le compteur Linky)" },
  { titre: "Infrastructure collective de recharge (IRVE collective) desservant les 38 places du parking", lieu: "Cesson-Sévigné", type: "irve", description: "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h." },
  { titre: "Borne T2S à 7,4 kW sur le parking extérieur d'un immeuble d'habitation en copropriété", lieu: "Rennes", type: "copro", description: "(droit à la prise) pour G.P." },
  { titre: "Prise renforcée Type E à 3,7 kW dans le garage en sous-sol d'une maison individuelle chez JC.D.", lieu: "Cesson-Sévigné", type: "maison", description: "" },
  { titre: "Borne T2S à 11 kW dans le garage d'une maison individuelle", lieu: "Acigné", type: "maison", description: "(avec panneaux photovoltaïques) chez J.M." },
  { titre: "Borne T2S à 3,7 kW dans le parking en sous-sol d'un immeuble d'habitation en copropriété", lieu: "Cesson-Sévigné", type: "copro", description: "(droit à la prise) chez R.D." },
  { titre: "Borne T2S à 22 kW et Prise renforcée Type E à 3,7 kW dans le garage d'une maison individuelle", lieu: "Bourgbarré", type: "maison", description: "(avec panneaux photovoltaïques) chez R.C." },
  { titre: "Prise renforcée Type E à 3,7 kW dans le box en sous-sol d'un immeuble d'habitation en copropriété chez D.L.", lieu: "Chantepie", type: "copro", description: "" },
  { titre: "Prise renforcée Type E à 3,7 kW sur le parking extérieur d'un immeuble d'habitation en copropriété", lieu: "Cesson-Sévigné", type: "copro", description: "(droit à la prise) chez M.L." },
  { titre: "Borne T2S à 7,4 kW et Prise renforcée Type E à 3,7 kW dans le parking en sous-sol d'un immeuble d'habitation en copropriété", lieu: "Cesson-Sévigné", type: "copro", description: "(compteur Linky dédié) chez J.D." },
  { titre: "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble d'habitation en copropriété", lieu: "Cesson-Sévigné", type: "copro", description: "(droit à la prise) chez A.N." },
  { titre: "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez A.B.", lieu: "Pacé", type: "maison", description: "" },
  { titre: "Prise renforcée Type E à 3,7 kW en extérieur dans le bardage d'une maison individuelle chez G.B.", lieu: "Pacé", type: "maison", description: "" },
]

const getRealizationsByType = (type) => {
  return realizations.filter(r => r.type === type)
}
</script>

<style>
@import 'tailwindcss';

.text-shadow-lg {
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
}

h1, h2, h3 {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

/* Animation de carte */
.group {
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet de ligne de section */
div:has(> h2) {
  margin-bottom: 2rem;
}
</style>
