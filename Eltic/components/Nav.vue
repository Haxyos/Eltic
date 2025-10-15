<template>
    <div>
        <button v-for="(_, tab) in listeComposant" :key="tab" @click="ComposantActuel = tab">{{ listeLibelle[tab] }}</button>
        <component :is="listeComposant[ComposantActuel]"></component>
    </div>
</template>

export default {};

<script setup>
import { ref } from 'vue';

const ComposantActuel = ref("MainMenu")

const listeLibelle = [
    "Accueil",
    "Copropriété",
    "Nos Réalisation",
    "La recharge",
    "Qualification",
    "Devis"
]

const listeComposant = [
    "MainMenu",
    "Copropriété",
    "NosRéalisation",
    "ExplicationRecharge",
    "Qualification",
    "Devis"

];
</script>