<template>
  <div class="form-item radio-control">
    <slot></slot>
    <brand-radio></brand-radio>
  </div>
</template>

<script setup lang="ts">
import BrandRadio from "@/components/BrandRadio.vue";


</script>

<style scoped lang="scss">
.radio-control {
  width: fit-content;
  gap: 12px;
}
</style>