<template>
  <label class="container">
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
.container {
  display: block;
  position: relative;
  width: 20px;
  cursor: pointer;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #555770;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #3E7BFA;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 8px;
  left: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
}
</style>