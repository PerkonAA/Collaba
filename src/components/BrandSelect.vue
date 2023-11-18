<template>
  <select :value="modelValue" @input="updateValue">
    <option
        @click="updateValue"
        :key="i" v-for="(option, i) in options"
        :value="option.value ? option.value : ''"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

interface Props {
  modelValue: string | number
  options: []
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  options: () => []
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
select {
  color: var(--text-text-secondary, #8F90A6);
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: var(--radius-radius-small, 8px);
  background: var(--background-surface-bg-content, #28293D);
  padding: 4px 12px 4px 16px;
  border: none;
  height: 44px;
  width: fit-content;
}
</style>