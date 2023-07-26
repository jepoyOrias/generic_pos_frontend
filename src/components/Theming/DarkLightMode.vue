<template>
  <div>
    <button type="button" class="pos-circle btn btn-primary" @click="changeTheme">
        <i class="bi-moon-stars fs-6 "></i>
    </button>
  </div>
</template>

<script setup> 
import { ref } from 'vue';

const isDarkmode = ref(false);

const changeTheme = ()=>{
      isDarkmode.value = localStorage.getItem("theme");
      isDarkmode.value = !JSON.parse(isDarkmode.value)
      document.documentElement.setAttribute('data-bs-theme', isDarkmode.value ? 'custom-dark' :  'custom-light');
      localStorage.setItem('theme', isDarkmode.value);
}

</script>
<style scoped>
.pos-circle {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    padding: 2rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
</style>