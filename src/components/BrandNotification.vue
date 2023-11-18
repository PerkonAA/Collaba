<template>
  <div class="brand-notification">
    <div class="brand-notification__wrapper">
      <div class="brand-notification__icon">
        <slot></slot>
      </div>
      <div class="brand-notification__content">
        <div v-if="title" class="brand-notification__title">{{title}}</div>
        <div v-if="text" class="brand-notification__text">{{text}}</div>
      </div>
      <div class="brand-notification__close">
        <icon-x/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import IconX from "../components/icons/IconX.vue";

interface Props {
  title?: string
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  text: ''
})
</script>

<style lang="scss">
.brand-notification {
  padding: 16px;
  border-radius: $radius-large;
  border: 1px solid #3E4153;
  background: $dark-0;
  width: 100%;

  color: $dark-3;

  font-family: $font-brand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @include to-sm {
    padding: 14px;
    font-size: 14px;
    line-height: 20px;
  }

  &__wrapper {
    display: flex;
    text-align: left;
  }

  &__content {
    width: 100%;
  }

  &__icon {
    margin-right: 12px;
    width: 24px;
    min-width: 24px;
    height: 24px;

    @include to-sm {
      margin-right: 8px;
      width: 20px;
      min-width: 20px;
      height: 20px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    color: $text-color;
    margin-bottom: 4px;

    @include to-sm {
      margin-bottom: 6px;
      line-height: 16px;
    }
  }

  &__close {
    display: flex;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
      color: $text-color;
    }
  }
}
</style>