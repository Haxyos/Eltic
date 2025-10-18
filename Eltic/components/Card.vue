<template>
    <div class="flex content-center justify-center items-center">
        <div class="flex flex-col content-center justify-center items-center p-5 w-11/12">
            <button
            @click="emission()"
                class="flex flex-col w-11/12 content-center justify-center items-center shadow-xl drop-shadow-sm hover:cursor-pointer hover:scale-120 duration-300">
                <h1 class="w-full text-center">{{ libelle }}</h1>
                <img v-bind:src=image alt="Logo"></img>
            </button>
        </div>
    </div>
</template>

export default {}

<script setup>

const props = defineProps({
    title: String,
    libelle: String,
    image: String
})

const emits = defineEmits([
    'true', 'false'
])
function emission(){
    emits('true', props.title);
}

</script>