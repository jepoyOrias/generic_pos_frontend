import { defineStore } from "pinia";

export const useAuthStore = defineStore('AuthStore', {
    state: ()=>({
         isAuthenticated: false,
         user: [],
         email: null,
         password: null,
    }),
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
    actions: {
      login(){
            this.isAuthenticated =  true;
        },
      logout(){
            this.isAuthenticated =  false;
      }
    }


});