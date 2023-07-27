<template>
  <div>
    <p v-for="product in products" :key="product.id" class="ps-5">
            {{ product.title }}
    </p>
    <SidebarComponent></SidebarComponent>
    <h1>dasboard</h1>
  </div>
</template>

<script setup>
import SidebarComponent from "@/components/Dasboard/SidebarComponent.vue";

import { useProductStore } from "@/store/ProductsStore";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const {products} = storeToRefs(useProductStore());

productStore.getProducts();
</script>

<style>

</style>