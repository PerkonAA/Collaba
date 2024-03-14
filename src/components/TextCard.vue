<template>
  <div class="text-card">
    <div class="text-card__wrapper">
      <div class="text-card__image-wrapper">
        <img v-if="img" :src="img" alt="avatar" class="text-card__image">
      </div>
      <div class="text-card__text-wrapper">
        <brand-title v-if="title" tag="h3" :class="`text-card__title ${theme === 'small' ? 'size-16':'size-18'} weight-500`" :text="title"/>
        <brand-paragraph v-if="description" :class="`text-card__description ${theme === 'small' ? 'size-14':'size-16'} color-dark-3 weight-400`" :text="description"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import BrandTitle from "@/components/BrandTitle.vue"
import BrandParagraph from "@/components/BrandParagraph.vue"

interface Props {
  img?: string,
  title?: string,
  description?: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.text-card {
  $self: &;

  border-radius: 16px;
  background: $dark-1;
  padding: 16px;

  &__wrapper {
    display: flex;
    gap: 16px;
  }

  &__image-wrapper {
    border-radius: 50%;
    background-color: $dark-3;
    overflow: hidden;
    min-width: 80px;
    width: 80px;
    height: 80px;
  }

  &.light {
    background-color: $dark-6;
  }

  &.small {
    #{$self}__wrapper {
      align-items: center;
    }
    #{$self}__image-wrapper {
      min-width: 40px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
