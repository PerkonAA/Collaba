<template>
  <label class="brand-radio">
    <input type="radio" checked="checked" name="radio">
    <span class="checkmark"></span>
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
/* The container */
.brand-radio {
  display: block;
  position: relative;
  width: 20px;
  cursor: pointer;
  user-select: none;
}

/* Hide the browser's default radio button */
.brand-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: $dark-2;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.brand-radio:hover input ~ .checkmark {
  background-color: #555770;
}

/* When the radio button is checked, add a blue background */
.brand-radio input:checked ~ .checkmark {
  background-color: $brand-color;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.brand-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.brand-radio .checkmark:after {
  top: 5.5px;
  left: 5.5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
}
</style>