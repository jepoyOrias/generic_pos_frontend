<template>
  <div class="form-floating mb-3">
        <input 
            class="form-control" 
            :type="input.type" 
            :id="input.id" 
            :placeholder="input.placeholder"    
            :value="props.modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        <label :for="input.id">{{label}}</label>
  </div>
</template>

<script setup>
import {defineProps,ref} from 'vue';
const props = defineProps({
    type:  {
        type: String,
        default: ""
    },
    id:  {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: String,
    label:{
        type: String,
        default: ""
    }

});

const input  = ref({
    type : props.type,
    id : props.id,
    placeholder: props.placeholder,
    data: props.data,
});


console.log(input, props.type);
</script>

<style>

</style>