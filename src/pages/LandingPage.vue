<template>
  <div>
    <main>

      <!-- Start Of Hero Section -->
      <HeroComponent></HeroComponent>
      <!-- End Of Hero Section -->



<div class="container">
  <!-- Three columns of text below the carousel -->
  <!-- START THE FEATURE Section -->
    <FeatureComponent></FeatureComponent>
  <!-- /END THE FEATURE Section -->

</div><!-- /.container -->


<!-- FOOTER -->
<footer class="container">
  <p class="float-end"><a href="#">Back to top</a></p>
  <p>© 2017–2023 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
</footer>
</main>
  </div>
</template>

<script setup>
import HeroComponent from '@/components/LandingPage/HeroComponent.vue';
import FeatureComponent from '@/components/LandingPage/FeatureComponent.vue';

</script>

<style>

</style>