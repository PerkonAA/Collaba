<template>
  <div class="login">
    <div class="login__content">
      <div class="login__title">
        Хэй, геймер! <br/>
        Добро пожаловать <br/>
        в Коллабу!
      </div>
      <div class="login__subtitle">
        Чтобы приступить к поиску напарника, просто войди через свой Discord и настрой профиль
      </div>
      <div class="login__button">
        <brand-button text="Войти с помощью Discord" color="primary">
          <template #left>
            <icon-discord/>
          </template>
        </brand-button>
      </div>
      <div class="login__content-footer">
        Авторизовываясь, вы соглашаетесь с нашими
        <a href="">условиями предоставления услуг</a> и
        <a href="">политикой конфиденциальности</a>
      </div>
    </div>
    <div class="login__footer">
      У тебя нет учетной записи Discord?
      <a href="">Зарегистрируйся сейчас</a>
      и начни общаться с другими игроками!
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import BrandButton from '@/components/BrandButton.vue'

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

.login {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__title {
    font-size: 44px;
    font-weight: 900;
    line-height: 48px;

    margin-bottom: 12px;
  }

  &__subtitle {
    margin-bottom: 24px;
  }

  &__button {
    margin-bottom: 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  &__content-footer {
    color: $text-color-secondary;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  &__footer {
    color: $text-color-secondary;
  }
}
</style>