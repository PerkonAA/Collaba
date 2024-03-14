<template>
  <div class="speaking inner-container mt-40 mb-40">
    <div class="speaking light">
      <div class="speaking__title page-title">
        <brand-title text="Напарник найден"/>
      </div>
      <div class="speaking__content">
        <div class="speaking__inner-wrapper inner-wrapper">
          <speaking-block/>
          <brand-notification title="Вас лайкнули" text="Осталось только ответить взаимностью">
            <icon-like-fill/>
          </brand-notification>
          <brand-notification
              title="Ты нашел напарника!"
              text="Нажми на лайк, если хочешь обменяться дискордом или на красный крестик
              , чтобы перейти к другому собеседнику">
            <icon-info/>
          </brand-notification>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandTitle from "@/components/BrandTitle.vue";
import SpeakingBlock from "@/components/SpeakingBlock.vue";
import BrandNotification from "../components/BrandNotification.vue";
import IconLikeFill from "../components/icons/IconLikeFill.vue";
import IconInfo from "../components/icons/IconInfo.vue";

</script>

<style scoped lang="scss">
.speaking {
  &__inner-wrapper {
    max-width: 410px;
    margin: auto;
  }
}
</style>
