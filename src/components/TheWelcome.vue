<template>
  <div class="welcome">
    <div class="welcome__wrapper">
      <div class="welcome__banner">
        <div class="welcome__logo">
          <icon-logo/>
        </div>
      </div>
      <div class="welcome__settings">
        <vue-tabs :tabs="[
            {
              text: 'Вход',
              link: '/welcome-login'
            },
            {
              text: 'Настройка профиля',
              link: '/welcome-settings'
            }
        ]"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import VueTabs from "@/components/VueTabs.vue";

interface Props {
  text?: string
  type?: string
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'add' || 'close' || 'toggle',
  active: false
})
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  min-height: 100vh;
  padding: 24px 80px 24px 24px;

  &__wrapper {
    display: flex;
    flex: 1;
    gap: 72px;
  }

  &__logo {
    position: relative;
    left: 32px;
    top: 32px;

    aspect-ratio: 6 / 1 auto;
    width: 210px;

    svg {
      display: flex;
    }
  }

  &__banner {
    flex: 19;
    background: url("../assets/images/welcome-banner.png");
    background-size: cover;
    border-radius: 20px;
  }

  &__settings {
    display: flex;
    flex: 11;
  }
}
</style>