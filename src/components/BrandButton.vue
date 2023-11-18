<template>
  <button :class="`brand-button ${color} ${size} ${round ? 'round' : ''}`">
    <span v-if="slots.left" class="brand-button__left">
      <slot name="left"></slot>
    </span>
    <span v-if="text" class="brand-button__content">{{ text }}</span>
    <span v-if="slots.right" class="brand-button__right">
      <slot name="right"></slot>
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {defineProps, useSlots} from "vue";

interface Props {
  color?: string,
  text?: string,
  round?: boolean,
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary' || 'secondary' || 'warning',
  size: 'size-l' || 'size-m' || 'size-s',
  text: '',
  round: false
})
const slots = useSlots()
</script>

<style lang="scss">
.brand-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: fit-content;

  border-radius: 12px;
  border: none;
  cursor: pointer;

  color: $text-color;

  font-family: $font-brand;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &__right,
  &__left {
    display: flex;
  }

  &.primary {
    background: $brand-color;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.45) inset, 0 4px 36px 0 rgba(62, 123, 250, 0.40);

    &:hover {
      background: #568BFB;
    }

    &:active {
      background: #3568D4;
    }

    &:disabled {
      box-shadow: none;
      background: $dark-2;
      color: $dark-3;
      cursor: default;
    }
  }

  &.secondary {
    background: $dark-2;

    &:hover {
      background: $dark-5;
    }

    &:active {
      background: $dark-2;
    }

    &:disabled {
      box-shadow: none;
      background: $dark-2;
      color: $dark-3;
      cursor: default;
    }
  }

  &.warning {
    background: #FF3B3B;

    &:hover {
      background: #FF5C5C;
    }

    &:active {
      background: #E53535;
    }

    &:disabled {
      box-shadow: none;
      background: $dark-2;
      color: $dark-3;
      cursor: default;
    }
  }

  &.size-l {
    padding: 14px 20px;
    font-size: 16px;
    line-height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.size-m {
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.size-s {
    padding: 10px 12px;
    font-size: 14px;
    line-height: 16px;

    gap: 4px;
    border-radius: $radius-small;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  &.round {
    border-radius: 50%;

    svg {
      width: 24px;
      height: 24px;
    }

    &.size-l {
      padding: 18px;
    }

    &.size-m,
    &.size-s {
      padding: 12px;
    }
  }

  @include to-sm() {
    font-size: 14px;
    line-height: 16px;
  }
}

.brand-button:disabled {
  box-shadow: none;
  background: $dark-2;
  color: $dark-3;
  cursor: default;
}
</style>