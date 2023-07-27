<template>
  <div class="d-flex"> 
    <div>
        <button @click="all">
            all
        </button>
        <button @click="lessthan50">
             less than 50
        </button>
    </div>
    <div>
        <div class="loading" v-if="loading">Loading....</div>
            <p v-for="product in products" :key="product.id" class="ps-5">
            {{ product.title }}
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
import { storeToRefs } from 'pinia';

const initializedProduct = {
    id : null,
    title: null,
    price: 50,
}

const form = reactive({
    data: initializedProduct
});


const productStore  = useProductStore();

const {products, loading} = storeToRefs(useProductStore());

productStore.getProducts();

const addProduct = ()=>{
    form.data.id = productStore.products.length + 1;
    productStore.addProduct(form);
    resetForm();
}


const resetForm = ()=>{
    form.data = {initializedProduct};
}


const lessthan50 = ()=>{

}



</script>

<style>

</style>