<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WebRTC from "@/components/WebRTC.vue";
</script>

<template>
<!--  <header>-->
<!--&lt;!&ndash;    <img alt="Vue logo" class="logo" src="@/assets/icons/logo.svg" width="125" height="125" />&ndash;&gt;-->

<!--    <div class="wrapper">-->
<!--&lt;!&ndash;      <HelloWorld msg="You did it!" />&ndash;&gt;-->
<!--&lt;!&ndash;      <SvgSprite symbol="logo"/>&ndash;&gt;-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--        <RouterLink to="/components">Components</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <WebRTC/>-->
  <div class="container">
    <RouterView />
  </div>

</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  line-height: 24px;
  font-weight: 400;
  font-family: $font-brand;
  font-style: normal;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  background-color: $dark-0;
  color: $text-color;
}

#app, main {
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.inner-container {
  max-width: 1044px;
  margin-inline: auto;
}

.mt-40 {
  margin-top: 160px;
}

.mb-40 {
  margin-bottom: 160px;
}

a {
  color: $brand-color;
  text-decoration: none;
}


//header {
//  line-height: 1.5;
//  max-height: 100vh;
//}
//
//.logo {
//  display: block;
//  margin: 0 auto 2rem;
//}
//
//nav {
//  width: 100%;
//  font-size: 12px;
//  text-align: center;
//  margin-top: 2rem;
//}
//
//nav a.router-link-exact-active {
//  color: var(--color-text);
//}
//
//nav a.router-link-exact-active:hover {
//  background-color: transparent;
//}
//
//nav a {
//  display: inline-block;
//  padding: 0 1rem;
//  border-left: 1px solid var(--color-border);
//}
//
//nav a:first-of-type {
//  border: 0;
//}
//
//@media (min-width: 1024px) {
//  header {
//    display: flex;
//    place-items: center;
//    padding-right: calc(var(--section-gap) / 2);
//  }
//
//  .logo {
//    margin: 0 2rem 0 0;
//  }
//
//  header .wrapper {
//    display: flex;
//    place-items: flex-start;
//    flex-wrap: wrap;
//  }
//
//  nav {
//    text-align: left;
//    margin-left: -1rem;
//    font-size: 1rem;
//
//    padding: 1rem 0;
//    margin-top: 1rem;
//  }
//}
</style>
