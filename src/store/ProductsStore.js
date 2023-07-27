import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore', {
    state: ()=>({
            products: [],
            loading: false,
    }),
    getters: {
        priceIsLessThanFifty(){
           return this.products.filter(products => products.price >= 50)
        }
    },
    actions: {
        async getProducts(){
            this.loading = true;
            const res = await fetch('http://localhost:3000/products');
            const data = await  res.json();
            this.products = data;
            this.loading = false;
        },
        async addProduct(product){

            this.products.push(product.data);

            const res = await fetch('http://localhost:3000/products', {
                method: 'POST',
                body: JSON.stringify(product.data),
                headers: { 'Content-Type': 'application/json' },
            });
            
            if(res.error){
                console.log(res.error);
            }
        }
    }


});