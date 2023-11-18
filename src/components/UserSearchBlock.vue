<template>
  <div class="user-search-block">
    <div class="user-search-block__state">
      <div class="user-search-block__state-avatar"></div>
      <div class="user-search-block__state-text" v-html="'Ищем подходящего </br> напарника...'"></div>
    </div>
    <div class="user-search-block__separator"></div>
    <div class="user-search-block__filter">
      <div class="user-search-block__filter-title">Избранные игры</div>
      <div class="user-search-block__filter-list">Dota 2, Counter Strike: Global Offensive, Fortnite, PUBG</div>
    </div>
    <div class="user-search-block__separator"></div>
    <div class="user-search-block__filter">
      <div class="user-search-block__filter-title">Платформа</div>
      <div class="user-search-block__filter-list">
        <filter-button type="toggle" text="Без разницы"/>
      </div>
    </div>
    <div class="user-search-block__separator"></div>
    <div class="user-search-block__filter">
      <div class="user-search-block__filter-title">Возраст напарника</div>
      <div class="user-search-block__filter-list">
        <filter-button type="toggle" active text="от 18 до 24"/>
        <filter-button type="toggle" text="от 25 до 30"/>
      </div>
    </div>
    <div class="user-search-block__separator"></div>
    <div class="user-search-block__filter">
      <div class="user-search-block__filter-title">Пол</div>
      <div class="user-search-block__filter-list">
        <filter-button type="toggle" text="Без разницы"/>
      </div>
    </div>
    <div class="user-search-block__separator"></div>
    <brand-button color="secondary" text="Отменить поиск" size="size-l"/>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue/dist/vue";
import BrandButton from '@/components/BrandButton.vue';
import FilterButton from '@/components/FilterButton.vue';

interface Props {
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<style scoped lang="scss">
.user-search-block {
  @include block-content();

  &__separator {
    @include separator();
  }

  &__state {
    display: flex;
    align-items: center;
    gap: 16px;

    &-avatar {
      width: 80px;
      height: 80px;
      background: $brand-color;
      border-radius: 50%;
    }

    &-text {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  &__filter-title {
    margin-bottom: 8px;

    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  &__filter-list {
    display: flex;
    gap: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>