<template>
  <div class="tabs">
    <nav class="tabs__navigation">
      <RouterLink
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{
            'tabs__tab': true,
            'tabs__tab_done': index+1 < currentTabIndex,
            'tabs__tab_active': index+1 === currentTabIndex
          }"
          :to="tab.link"
          @click="currentTabIndex = index+1"
      >
        <div class="tabs__tab-number">
          <brand-paragraph class="color-white size-12 weight-500" :text="index+1"/>
        </div>
        <brand-paragraph class="color-white size-16 weight-400" :text="tab.text"/>
      </RouterLink>
    </nav>
    <RouterView name="tabs"/>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {defineProps, ref} from "vue";
import BrandParagraph from './BrandParagraph.vue';

interface Props {
  tabs: Array<{
    text: string,
    link: string
  }>
}

const props = withDefaults(defineProps<Props>(), {
  tabs: function () {
    return []
  }
})

let currentTabIndex = ref<number>(1);
</script>

<style scoped lang="scss">
.tabs {
  $default-color: $dark-3;
  $done-color: $green-1;
  $active-color: $brand-color;

  $self: &;
  display: flex;
  flex-direction: column;

  &__tab {
    display: flex;
    flex: 1;
    gap: 8px;

    position: relative;

    &-number {
      display: flex;
      min-width: 20px;
      width: 20px;
      height: 20px;
      padding: 4px;
      justify-content: center;
      align-items: center;
      background: $default-color;

      border-radius: 50%;
    }

    &:before {
      content:"";
      position: absolute;
      top: -12px;
      float: left;
      background: $default-color;
      width: 100%;
      height: 2px;
      border-radius: 100px;
    }

    &_done {
      &:before,
      #{$self}__tab-number {
        background: $done-color;
      }
    }

    &_active {
      &:before,
      #{$self}__tab-number {
        background: $active-color;
      }
    }
  }

  &__navigation {
    display: flex;
    gap: 8px;

    margin-bottom: 55px;
  }
}
</style>