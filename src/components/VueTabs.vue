<template>
  <div class="tabs">
    <nav class="tabs__navigation">
      <RouterLink class="tabs__tab" to="/welcome-login">Вход</RouterLink>
      <RouterLink class="tabs__tab" to="/welcome-settings">Настройка профиля</RouterLink>
    </nav>
    <RouterView name="tabs"/>
    <div class="tabs__content">

    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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

<style scoped lang="scss">
.tabs {
  display: flex;
  flex-direction: column;
}
</style>