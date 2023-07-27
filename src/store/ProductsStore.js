import { defineStore } from "pinia";
import  {api} from '@/api/products';

console.log(api);


 export const useProductStore = defineStore('ProductsStore', {
    state: ()=>({
            products: [],
            loading: false,
    }),
    getters: {
        priceIsLessThanFifty(){
           return this.products.filter(products => products.price <= 50)
        }
    },
    actions: {
        async getProducts(){
            this.loading = true;
            const res = await fetch(api.getProduct);
            const data = await  res.json();
            this.products = data;
            this.loading = false;
        },
        async addProduct(product){

            this.products.push(product.data);

            const res = await fetch(api.postProduct, {
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

