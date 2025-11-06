<template>
    <NavBorne />
    <div class="flex content-center justify-center items-center m-5">
        <h1 class="w-[90%] font-bold text-3xl text-center p-2 m-2">Tout pour bien comprendre la recharge</h1>
    </div>
    <div class="flex gap-10 my-2 mx-20 shadow-2xl p-5">
        <img src="../public/eltic_IRVE_la-recharge-01a.gif" alt="image d'explication de la recharge"></img>
        <div>
            <div>
                <h1 class="text-xl text-shadow-lg font-bold my-5">La recharge électrique : 5 éléments à prendre en
                    compte</h1>
            </div>
            <div>
                <h3>Pour bien choisir sa borne de recharge, il faut prendre en compte plusieurs éléments qui
                    interviennent
                    dans le processus de recharge du véhicule.</h3>
            </div>
            <div>
                <p class="text-justify">
                    <span class="font-bold text-lg text-shadow-lg">L'abonnement électrique : </span>
                    <br />
                    sa puissance (en "kilo Volt Ampère" : 9 kVA, 12 kVA...)
                    monophasé ou triphasé
                    les éventuelles options tarifaires (heures pleines / heures creuses)
                    <br />
                    <span class="font-bold text-lg text-shadow-lg">La borne de recharge (ou la prise) : </span>
                    <br />
                    les types de prises (Type E ou EF, Type 2S...)
                    monophasé ou triphasé
                    la puissance maximum délivrée (en "kilo watt" : 1,8 kW, 7,4 kW, 22 kW...)
                    <br />
                    <span class="font-bold text-lg text-shadow-lg">Le câble de recharge : </span>
                    <br />
                    les types de connecteurs (Type E ou EF, Type 2...)
                    monophasé (3 conducteurs d'énergie) ou triphasé (5 conducteurs d'énergie)
                    la courant maximum supporté (en Ampères : 8 A, 16 A, 32 A...)
                    <br />
                    <span class="font-bold text-lg text-shadow-lg">Le chargeur embarqué dans le véhicule (de série ou en
                        option) : </span>
                    <br />
                    monophasé ou triphasé
                    la puissance maximum acceptée (en "kilo Watt" : 1,8 kW, 7,4 kW, 22 kW...)
                    <br />
                    <span class="font-bold text-lg text-shadow-lg">La batterie du véhicule : </span>
                    <br />
                    sa capacité (en "kilo Watt heure" : 6,1 kWh, 50 kWh, 82 kWh...)
                    les puissances de charge maximum acceptées (en kW) en courant alternatif (AC) et en courant continu
                    (DC)
                </p>
            </div>
        </div>
    </div>
    <Footer />

</template>

<script setup>
import NavBorne from './NavBorne.vue';
import Footer from './Footer.vue';
</script>

<style>
@import 'tailwindcss';
</style>
