import { defineStore } from "pinia";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://go-jep.000webhostapp.com/api/'
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
       async = login(email, password){
            const response = await fetch('https://go-jep.000webhostapp.com/api/login',{
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              email: email,
              password: password,
            })
            
            
        },
      logout(){
            this.isAuthenticated =  false;
      }
    }


});