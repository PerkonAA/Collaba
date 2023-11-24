<template>
  <component :is="tag" class="brand-paragraph" v-html="text"/>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  tag?: string,
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  text: ''
})
</script>

<style scoped lang="scss">
.brand-paragraph {
  color: $light-4;
  font-family: $font-brand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &.size-16 {
    font-size: 16px;
    line-height: 20px;
  }

  &.size-12 {
    font-size: 12px;
    line-height: normal;
  }

  &.weight-500 {
    font-weight: 500;
  }

  &.weight-400 {
     font-weight: 400;
   }
}
</style>