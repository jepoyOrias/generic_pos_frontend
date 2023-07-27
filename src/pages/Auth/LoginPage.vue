<template>
  <div>
        <InputComponent :type="'email'" :id="'login_email'" :placeholder="'enter your email'"   v-model="email" :label="'Email Address'" />
        <InputComponent :type="'password'" :id="'login_password'" :placeholder="'enter your password'" v-model="password" :label="'Password'" />
        <div class="custom-class pa-5">
            <h1>test</h1>
        </div>
        <button class="btn btn-primary" @click="login">Login</button>
    </div>
</template>

<script setup>
import InputComponent from '../../components/GlobalComponents/InputComponent.vue';
import {useAuthStore} from '@/store/auth/AuthStore'
import {storeToRefs} from 'pinia';


const auth = useAuthStore();



const {email, password} = storeToRefs(useAuthStore());

const login = ()=>{
    auth.login(email.value, password.value);
}

</script>

<style>

</style>