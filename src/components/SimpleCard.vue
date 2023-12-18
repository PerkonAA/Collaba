<template>
  <div class="simple-card">
    <div class="simple-card__wrapper">
      <slot name="left" class="simple-card__start"></slot>
      <div class="simple-card__inner">
        <brand-title tag="h3" class="size-18 weight-500" text="Mind22"/>
        <brand-paragraph class="size-16 color-dark-3 weight-400" text="Другой пользователь увидит никнейм только после взаимного лайка"/>
      </div>
      <slot name="right" class="simple-card__end"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandTitle from '@/components/BrandTitle'
import BrandParagraph from '@/components/BrandParagraph'
</script>

<style scoped lang="scss">
.simple-card {

}
</style>