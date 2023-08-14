<template>
  <div>
        <InputComponent :type="'email'" :id="'login_email'" :placeholder="'enter your email'"   v-model="email" :label="'Email Address'" />
        <InputComponent :type="'password'" :id="'login_password'" :placeholder="'enter your password'" v-model="password" :label="'Password'" />
        <div class="custom-class pa-5">
            <h1>test</h1>
        </div>
        <button type="button" :class="isCircle ? 'circle': '' " class="btn btn-primary d-flex align-items-center justify-content-center px-4" :id="notShirnk" @mouseover="changeLoginAnimation" @mouseleave="removeAnimation">
            {{ !isCircle ? 'Login' : ''  }}  
            <span>
            <Vue3Lottie :animationData="isDarkMode ? loginIconWhite : loginIconDark" :height="24" :width="24"  @click="login" v-if="isCircle"/>
        </span></button>
    </div>
</template>

<script setup>
import InputComponent from '../../components/GlobalComponents/InputComponent.vue';
import {useAuthStore} from '@/store/auth/AuthStore'
import {storeToRefs} from 'pinia';
import loginIconDark from '@/assets/lottie/login-icon-dark.json';
import loginIconWhite from '@/assets/lottie/login-icon-white.json';
import {ref} from 'vue';


const auth = useAuthStore();

const isCircle = ref(false);
const {email, password} = storeToRefs(useAuthStore());

const isDarkMode = ref(false)

const login = ()=>{
    auth.login(email.value, password.value);
}

isDarkMode.value  =  JSON.parse(localStorage.getItem('theme'));

const changeLoginAnimation = ()=>{
    isCircle.value = true;
    isDarkMode.value  =  JSON.parse(localStorage.getItem('theme'))
};
const removeAnimation = ()=>{
    isCircle.value = false
}; 
</script>

<style>
.circle{
    width: 50px;
    height: 50px;
    border-radius:50px;
    transition:  border-radius 0.5 ease-in;
}

</style>