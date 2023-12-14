<template>
  <header-app class="container" :links="[{link: '/search', text: 'Поиск напарника'}, {link: '/my-teammate', text: 'Мои напарники'}]"/>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp.vue";
</script>

<style scoped>

</style>