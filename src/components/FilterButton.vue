<template>
  <button :class="`filter-button ${type}`">
    <span v-if="text" class="filter-button__content">{{ text }}</span>
    <icon-add v-if="type === 'add'"/>
    <icon-x v-if="type === 'close'"/>
  </button>
</template>

<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import IconX from '@/components/icons/IconX.vue'
import {defineProps} from "vue";

interface Props {
  text?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'add' || 'close' || 'toggle'
})
</script>

<style scoped lang="scss">
.filter-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10px 12px;
  gap: 8px;

  border-radius: $radius-small;
  border: none;
  cursor: pointer;

  color: $text-color;
  background-color: $dark-2;

  font-family: $font-brand;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 500;

  &:hover {
    background-color: $dark-5;
  }

  &:active {
    background-color: $dark-2;
  }

  &:disabled {
    background: $dark-2;
    color: $dark-3;
    cursor: default;
  }

  &.add {
    svg {
      color: inherit;
    }
  }

  &.close {
    svg {
      color: $dark-3;
    }
  }

  &.toggle {
    padding: 10px 16px;

    @include to-sm() {
      padding: 8px;
    }

    &[checked] {
      background-color: $dark-2;
      outline: 2px solid $brand-color;

      &:hover:not(:disabled) {
        background: $dark-5;
      }

      &:active:not(:disabled) {
        background-color: $dark-2;
      }
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @include to-sm() {
    padding: 6px 8px;
    gap: 4px;

    font-size: 14px;
    line-height: 16px;
  }
}
</style>