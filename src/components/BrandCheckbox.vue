<template>
  <label class="brand-checkbox">
    <input type='checkbox'>
    <span class='slider'></span>
  </label>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<style scoped lang="scss">
label {
  display: block;
  width: 44px;
  height: 24px;
  position: relative;
  background: #555770;

  border-radius: 50px;
  cursor: pointer;
}

input {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
}

input:checked ~ .slider {
  background-color: $brand-color;
}

.slider::before {
  width: 18px;
  height: 18px;
  content: "";
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: 50%;
  box-shadow: inset 28px -4px 0px 0px #8F90A6;
  transition: 0.3s;
}

input:checked ~ .slider::before {
  transform: translateX(18px);
  background-color: white;
  box-shadow: none;
}
</style>