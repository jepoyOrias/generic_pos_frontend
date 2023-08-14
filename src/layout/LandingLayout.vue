<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <router-view></router-view>
    <FooterComponent class="pt-5 mt-5"></FooterComponent>
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/LandingPage/NavbarComponent.vue';
import FooterComponent from '@/components/LandingPage/FooterComponent.vue';
</script>

<style>

</style>