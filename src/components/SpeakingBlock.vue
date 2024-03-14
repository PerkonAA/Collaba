<template>
  <div class="speaking-block">
    <div class="speaking-block__header">
      <div class="speaking-block__avatar"></div>
      <div class="speaking-block__info">
        <div class="speaking-block__info-title">
          <span class="speaking-block__user-name">Cобеседник, </span>
          <span class="speaking-block__user-year">19 лет</span>
        </div>
        <div class="speaking-block__time">02:01</div>
      </div>
      <div class="speaking-block__icon">
        <icon-report/>
      </div>
    </div>
    <div class="speaking-block__separator"></div>
    <div class="speaking-block__content">
      <div class="speaking-block__content-title">Общие игры</div>
      <div class="speaking-block__content-text">Dota 2, Counter Strike: Global Offensive</div>
    </div>
    <div class="speaking-block__separator"></div>
    <div class="speaking-block__controls">
      <brand-button color="warning" round size="size-m">
        <icon-x/>
      </brand-button>
      <brand-button color="secondary" text="Выключить микрофон" size="size-l">
        <template #left>
          <icon-micro/>
        </template>
      </brand-button>
      <brand-button color="primary" round size="size-m">
        <icon-like/>
      </brand-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import BrandButton from '@/components/BrandButton.vue';
import IconX from '@/components/icons/IconX.vue';
import IconLike from '@/components/icons/IconLike.vue';
import IconMicro from "@/components/icons/IconMicro.vue";
import IconReport from "@/components/icons/IconReport.vue";

interface Props {
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<style scoped lang="scss">
.speaking-block {
  @include block-content();
  width: 100%;

  &__separator {
    @include separator();
  }

  &__avatar {
    width: 80px;
    height: 80px;
    background: orange;
    border-radius: 50%;
  }

  &__info-title {
    margin-bottom: 4px;

    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  &__user-name {
    color: $text-color;
  }

  &__time {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }

  &__time,
  &__user-year {
    color: $dark-3;
  }

  &__header {
    display: flex;
    gap: 16px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-left: auto;
  }

  &__icon {
    color: $dark-3;
    cursor: pointer;

    &:hover {
      color: $light-4;
    }
  }

  &__content-title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;

    margin-bottom: 4px;
  }

  &__content-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  &__controls {
    display: flex;
    gap: 12px;
  }
}
</style>
