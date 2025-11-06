/* css à faire */

<template>
  <NavBorne />
  <div>
    <h1>Voici quelques unes de nos réalisation :</h1>
  </div>
  <div v-for="(_, real) in listeReal">
    <div>{{ listeReal[real] }}{{ lieu[real] }}</div>
    <div>
      {{ description[real] }}
    </div>
  </div>
  <Footer />
</template>

<script setup>
import NavBorne from './NavBorne.vue'
import Footer from './Footer.vue'

let listeReal = [
  "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour Y.L.",
  "Borne T2S à 7,4 kW Schneider Charge dans le garage d'une maison individuelle (avec pilotage dynamique de la puissance de charge par délesteur)",
  "Borne T2S à 7,4 kW dans le garage d'une maison individuelle (avec pilotage de la puissance de charge par compteur délesteur)",
  "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour B.M. (avec contrôle d'accès à la charge par badge RFID)",
  "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble en copropriété pour Y.G. (avec contrôle d'accès à la charge par badge RFID)",
  "Infrastructure collective de recharge (IRVE collective) desservant les 49 places du parking d'un immeuble en copropriété",
  "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez JP.J. (avec contrôle des horaires et pilotage de la puissance de charge par le compteur Linky)",
  "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez A.M. (avec pilotage de la puissance de charge par le compteur Linky)",
  "Infrastructure collective de recharge (IRVE collective) desservant les 39 places du parking d'un immeuble en copropriété",
  "Borne T2S à 7,4 kW en façade d'une maison individuelle (avec contrôle des horaires et pilotage de la puissance de charge par le compteur Linky)",
  "Infrastructure collective de recharge (IRVE collective) desservant les 38 places du parking d'un immeuble en copropriété",
  "Borne T2S à 7,4 kW sur le parking extérieur d'un immeuble d'habitation en copropriété (droit à la prise) pour G.P.",
  "Prise renforcée Type E à 3,7 kW dans le garage en sous-sol d'une maison individuelle chez JC.D.",
  "Borne T2S à 11 kW dans le garage d'une maison individuelle (avec panneaux photovoltaïques) chez J.M.",
  "Borne T2S à 3,7 kW dans le parking en sous-sol d'un immeuble d'habitation en copropriété (droit à la prise) chez R.D.",
  "Borne T2S à 22 kW et Prise renforcée Type E à 3,7 kW dans le garage d'une maison individuelle (avec panneaux photovoltaïques) chez R.C.",
  "Prise renforcée Type E à 3,7 kW dans le box en sous-sol d'un immeuble d'habitation en copropriété chez D.L.",
  "Prise renforcée Type E à 3,7 kW sur le parking extérieur d'un immeuble d'habitation en copropriété (droit à la prise) chez M.L.",
  "Borne T2S à 7,4 kW et Prise renforcée Type E à 3,7 kW dans le parking en sous-sol d'un immeuble d'habitation en copropriété (compteur Linky dédié) chez J.D.",
  "Borne T2S à 7,4 kW dans le sous-sol d'un immeuble d'habitation en copropriété (droit à la prise) chez A.N.",
  "Borne T2S à 7,4 kW dans le garage d'une maison individuelle chez A.B.",
  "Prise renforcée Type E à 3,7 kW en extérieur dans le bardage d'une maison individuelle chez G.B.",
]
let description = [
  "Borne raccordée au compteur Linky de l'appartement pour la gestion de la charge (via TIC du Linky, gestion dynamique de la puissance de charge et des plages horaires) et au réseau de données de l'appartement (câble de communication ethernet RJ45) pour la gestion de la borne de recharge via application smartphone. ",
  '',
  '',
  "Borne raccordée à l'infrastructure collective de recharge de l'immeuble. Gestion dynamique de la puissance de charge par le pilote énergétique OCPP de l'IRVE collective. ",
  "Borne raccordée à l'infrastructure collective de recharge de l'immeuble. Gestion dynamique de la puissance de charge par le pilote énergétique OCPP de l'IRVE collective. ",
  "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h. ",
  '',
  '',
  "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h. ",
  '',
  "Un seul abonnement d'électricité (EDF Tempo) partagé entre les utilisateurs des bornes de recharge. Electricite facturée selon la consommation réelle de chaque borne. Capacité de recharge totale jusqu'à 5 400 km / 24 h. ",
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
let lieu = [
  ' - Chantepie ',
  ' - Bretagne ',
  ' - Cesson-Sévigné ',
  ' - Cesson-Sévigné ',
  ' - Cesson-Sévigné ',
  ' - Cesson-Sévigné ',
  ' - Bruz ',
  ' - Chantepie ',
  ' - Cesson-Sévigné ',
  ' - Bruz ',
  ' - Cesson-Sévigné ',
  ' - Rennes ',
  ' - Cesson-Sévigné ',
  ' - Acigné ',
  ' - Cesson-Sévigné ',
  ' - Bourgbarré ',
  ' - Chantepie ',
  ' - Cesson-Sévigné ',
  ' - Cesson-Sévigné ',
  ' - Cesson-Sévigné ',
  ' - Pacé ',
  ' - Pacé ',
]
</script>

<style>
@import 'tailwindcss';
</style>
