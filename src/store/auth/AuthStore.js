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
        login(email, password){
            fetch('https://go-jep.000webhostapp.com/api/login',{
              method: 'POST',
              crossorigin: true,    
              mode: 'no-cors',      
              body: JSON.stringify({
                email: email,
                password: password,
              }).then(repsonse => console.log(repsonse))
              
            });
        },
      logout(){
            this.isAuthenticated =  false;
      }
    }


});