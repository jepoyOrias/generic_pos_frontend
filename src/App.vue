<template>
<div class="position-relative">
  <router-view></router-view>
  <DarkLightModeVue :theme="isDarkmode" class="fixed-bottom mb-5 ms-5 text-start"></DarkLightModeVue>
</div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import DarkLightModeVue from './components/Theming/DarkLightMode.vue';

import { ref } from 'vue';

const isDarkmode = ref(false);

onBeforeMount(()=>{
  isDarkmode.value  =  localStorage.getItem('theme');
});



onMounted(()=>{
 localStorage.setItem('theme', JSON.parse(isDarkmode.value));
 document.documentElement.setAttribute('data-bs-theme', JSON.parse(isDarkmode.value)? 'custom-dark' : 'custom-light');
});



</script>

<style>

</style>
