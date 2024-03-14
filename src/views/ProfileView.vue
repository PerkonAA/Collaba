<template>
  <div class="inner-container mt-40 mb-40">
    <div class="profile light">
      <div class="profile__title page-title">
        <brand-title text="Профиль"/>
      </div>
      <div class="profile__content">
        <div class="profile__inner-wrapper inner-wrapper">
          <text-card class="light" title="Mind22" description="Другой пользователь увидит никнейм только после взаимного лайка"/>
          <div class="profile__row">
            <div class="filters__title">
              <brand-title tag="h3" class="size-18 weight-500" text="День рождения"/>
            </div>
            <div class="filters">
              <div class="filters__row row">
                <date-control/>
              </div>
              <div class="filters__row row">
                <checkbox-control>
                  <brand-paragraph class="size-16 weight-500" text="Отображать возраст"/>
                </checkbox-control>
              </div>
            </div>
          </div>

          <div class="separator"></div>

          <div class="profile__row">
            <div class="filters__title">
              <brand-title tag="h3" class="size-18 weight-500" text="Пол"/>
            </div>
            <div class="filters">
              <radio-control>
                <brand-paragraph class="size-16 weight-500" text="Мужской"/>
              </radio-control>
              <radio-control>
                <brand-paragraph class="size-16 weight-500" text="Женский"/>
              </radio-control>
              <radio-control>
                <brand-paragraph class="size-16 weight-500" text="Другой"/>
              </radio-control>
            </div>
          </div>

          <div class="separator"></div>

          <div class="profile__row">
            <div class="filters__title title-wrapper">
              <brand-title tag="h3" class="size-18 weight-500" text="Любимые игры"/>
              <brand-paragraph class="size-14 weight-400 color-dark-3" text="4/8"/>
            </div>
            <div class="filters">
              <filter-button v-for="(filter, index) in filtersGames"
                             :key="index"
                             :type="filter.type"
                             :text="filter.text"
                             :checked="filter.checked"
                             :disabled="filter.disabled"
              />
            </div>
          </div>

          <div class="separator"></div>

          <brand-button color="primary" text="Сохранить" size="size-l"/>

          <brand-notification
              class="profile__brand-notification"
              type="default"
              text="Любимые игры будут учитываться в качестве пресета при поиске напарника"
          >
          </brand-notification>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandTitle from "@/components/BrandTitle.vue";
import BrandParagraph from "@/components/BrandParagraph.vue";
import BrandNotification from "@/components/BrandNotification.vue";
import FilterButton from "@/components/FilterButton.vue";
import {ref} from "vue";
import CheckboxControl from "@/components/controls/CheckboxControl.vue";
import DateControl from "@/components/controls/DateControl.vue";
import RadioControl from "@/components/controls/RadioControl.vue";
import TextCard from "@/components/TextCard.vue";
import BrandButton from "@/components/BrandButton.vue";

type TFilter = {
  buttonType?: string,
  text: string,
  disabled?: boolean,
  checked?: boolean
  type?: string
}

const filtersPlatform = ref<Array<TFilter>>([
  {
    text: 'Без разницы',
    checked: true
  },
  {
    text: 'ПК',
    disabled: true
  },
  {
    text: 'XBOX',
    disabled: true
  },
  {
    text: 'PlayStation',
    disabled: true
  },
  {
    text: 'Смартфон',
    disabled: true
  }
])

const filtersGames = ref<Array<TFilter>>([
  {
    text: 'Dota 2',
    type: 'close',
    checked: true
  },
  {
    text: 'Dota 2',
    type: 'close'
  },
  {
    text: 'Fortnite',
    type: 'close'
  },
  {
    text: 'Добавить игру',
    type: 'add'
  }
])

const filtersSex = ref<Array<TFilter>>([
  {
    text: 'Без разницы',
    checked: true
  },
  {
    text: 'Мужской'
  },
  {
    text: 'Женский'
  }
])

</script>

<style scoped lang="scss">
.profile {
  &__content {
    max-width: 440px;
    margin-inline: auto;
  }

  &__inner-wrapper {
    background: $bg-color;
    padding: 16px;
  }
}
</style>
