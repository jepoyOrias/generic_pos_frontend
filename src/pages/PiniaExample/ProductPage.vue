<template>
  <div class="d-flex"> 
    <div>
        <div class="loading" v-if="productStore.loading">Loading....</div>
            <p v-for="products in productStore.products" :key="products.id">
            {{ products.title }}
            </p>
        </div>
    <form>
                <div class="mb-3">
                    <label for="productInput" class="form-label" >Product Title</label>
                    <input type="text" class="form-control" id="productInput" aria-describedby="emailHelp" v-model="form.data.title">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
        </form>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useProductStore} from '@/store/ProductsStore.js';


const initializedProduct = {
    id : null,
    title: null,
    price: 50,
}

const form = reactive({
    data: initializedProduct
});

const productStore  = useProductStore();

productStore.getProducts();


const addProduct = ()=>{
    form.data.id = productStore.products.length + 1;
    productStore.addProduct(form);
    resetForm();
}


const resetForm = ()=>{
    form.data = {initializedProduct};
}





</script>

<style>

</style>