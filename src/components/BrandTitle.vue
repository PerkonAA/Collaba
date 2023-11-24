<template>
  <component :is="tag" class="brand-title" v-html="text"/>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  tag?: string,
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1',
  text: ''
})
</script>

<style scoped lang="scss">
.brand-title {
  color: $light-4;
  font-family: $font-brand;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &.size-18 {
    font-size: 18px;
    line-height: 24px;
  }

  &.weight-700 {
    font-weight: 700;
  }

  &.weight-500 {
    font-weight: 500;
  }

  &.weight-400 {
     font-weight: 400;
   }
}
</style>