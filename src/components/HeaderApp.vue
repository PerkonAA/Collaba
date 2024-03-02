<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__start">
        <RouterLink class="header__logo-wrapper" to="/">
          <icon-logo class="header__logo"/>
        </RouterLink>
        <div class="header__online-users">
          <icon-online-users class="header__online-icon"/>
          <brand-paragraph class="size-14 weight-500" text="1304 онлайн"/>
        </div>
      </div>
      <div class="header__middle">
        <nav class="header__navigation">
          <RouterLink
              v-for="(item, index) in links"
              :key="index"
              :to="item.link"
              class="header__link"
          >
            <brand-paragraph class="color-dark-3 size-14 weight-500" :text="item.text"/>
          </RouterLink>
        </nav>
      </div>
      <div class="header__end">
        <div class="header__discord">
          <div class="header__discord-icon-wrapper">
            <icon-discord class="header__discord-icon"/>
          </div>
          <brand-paragraph class="size-14 weight-500" text="Сообщество в Discord"/>
          <a href="https://discord.com/" class="header__discord-link"></a>
        </div>
        <div class="header__profile">
          <div class="header__avatar-wrapper">
            <RouterLink to="/profile">
<!--              <img class="header__avatar" src="src/assets/images/welcome-banner.png" alt="avatar">-->
            </RouterLink>
            <!--          <img class="header__avatar" src="src/assets/images/welcome-banner.png" alt="avatar">-->
          </div>
          <div class="header__profile-dropdown profile-dropdown">
            <div class="profile-dropdown__header">
              <div class="header__avatar-wrapper">
                <RouterLink to="/profile">
<!--                  <img class="header__avatar" src="src/assets/images/welcome-banner.png" alt="avatar">-->
                </RouterLink>
              </div>
              <brand-paragraph class="size-14 weight-500" text="Ancientsad"/>
            </div>
            <div class="separator"></div>
            <div class="profile-dropdown__subscribe">
              <div class="profile-dropdown__subscribe-text-wrapper">
                <brand-title tag="h3" class="size-18 weight-500" text="День рождения"/>

              </div>
              <div class="profile-dropdown__subscribe-controls"></div>
            </div>
            <div class="separator"></div>
            <div class="profile-dropdown__options"></div>
            <div class="separator"></div>
            <div class="profile-dropdown__footer"></div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import BrandParagraph from '@/components/BrandParagraph.vue';
import IconLogo from "@/components/icons/IconLogo.vue";
import IconOnlineUsers from "@/components/icons/IconOnlineUsers.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";

interface Props {
  links?: Array<any>
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;

  &__start {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__end {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-inline: 80px;
  }

  &__navigation {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  &__link {
    padding-block: 32px;
  }

  &__logo-wrapper {
    padding-block: 32px;
    height: calc(24px + 32px * 2);
    display: flex;
  }

  &__logo {
    width: auto;
    height: 100%;
  }

  &__online-users {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__online-icon {
    width: 20px;
    height: 20px;
  }

  &__discord {
    display: flex;
    align-items: center;
    gap: 8px;

    position: relative;
    padding-block: 32px;
  }

  &__discord-icon-wrapper {
    display: flex;
    width: 20px;
    height: 20px;
    padding: 5px 3.53px;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background: $blue-3;
  }

  &__discord-icon {
    max-width: 100%;
    max-height: 100%;
  }

  &__discord-link {
    position: absolute;
    cursor: pointer;
    inset: 0;
    z-index: 1;
  }

  &__avatar-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;

  }

  &__avatar {
    max-width: 100%;
    max-height: 100%;
  }

  &__profile-dropdown {
    position: absolute;
    top: 40px;
    right: 0;
  }
}

.profile-dropdown {
  border-radius: 12px;
  background: $bg-color;

  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.15);

  &__header {
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }

  &__subscribe {
    padding: 12px 16px;
  }

  &__options,
  &__footer {
    padding: 8px;
  }

  .separator {
    margin: 0;
  }
}
</style>
