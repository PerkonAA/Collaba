<template>
  <div class="inner-container mt-40 mb-40">
    <div class="partners">
      <div class="partners__title page-title">
        <brand-title text="Мои напарники"/>
      </div>
      <div class="partners__content">
        <div class="partners__inner-wrapper inner-wrapper">
          <div class="partners__list-wrapper">
            <div v-for="(item, index) in list"
                 :key="index"
                 class="partners__row">
              <brand-paragraph class="size-14 weight-500 color-dark-3" :text="item.date"/>
              <div class="partners__list">
                <text-card v-for="partner in item.partners"
                           :key="partner" class="small light"
                           :img="partner.img" :title="partner.name"
                           :description="partner.description"/>
              </div>
              <div v-if="index !== list.length-1" class="separator"></div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandTitle from "@/components/BrandTitle.vue";
import BrandParagraph from "@/components/BrandParagraph.vue";
import {ref} from "vue";
import TextCard from "@/components/TextCard.vue";

const list = ref<Array<any>>([
    {
      id: 1,
      date: '25.10.2023',
      partners: [
        {
          img: '',
          name: 'Ancientsad',
          description: 'Собеседник, 24 лет'
        },
        {
          img: '',
          name: 'RVK',
          description: 'Собеседница, 20 лет'
        }
      ]
    },
    {
      id: 1,
      date: '24.10.2023',
      partners: [
        {
          img: '',
          name: 'Frost',
          description: 'Собеседник, 32 лет'
        },
        {
          img: '',
          name: 'Lullaby',
          description: 'Собеседница, 20 лет'
        }
      ]
    }
])
</script>

<style scoped lang="scss">
.partners {
  &__inner-wrapper {
    background: $bg-color;
    padding: 16px;
    max-width: 460px;
  }

  &__row,
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
