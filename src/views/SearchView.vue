<template>
  <div class="inner-container mt-40 mb-40">
    <div class="search">
      <div class="search__title">
        <brand-title text="Поиск напарника"/>
      </div>
      <div class="search__content">
        <div class="search__col search__col_1">
          <div class="search__inner-wrapper">
            <div class="search__game-list-header">
              <brand-title tag="h3" class="size-18 weight-500" text="Игры"/>
              <brand-paragraph class="size-15 weight-400 color-dark-3" text="4/8"/>
            </div>
            <div class="search__game-list">
              <div class="game-card"></div>
              <div class="game-card"></div>
              <div class="game-card"></div>
              <div class="game-card"></div>
              <div class="game-card"></div>
            </div>
          </div>
          <brand-notification
              title="Больше напарников без фильтров!"
              text="Убери все игры из фильтра поиска. Так ты расширишь круг потенциальных партнеров для общения"
          >
            <icon-info/>
          </brand-notification>
        </div>
        <div class="search__col search__col_2">
          <div class="search__inner-wrapper">
            <div class="search__filters filters-wrapper">
              <div class="filters__title">
                <brand-title tag="h3" class="size-18 weight-500" text="Платформа"/>
              </div>
              <div class="filters">
                <filter-button v-for="(filter, index) in filtersPlatform"
                               :key="index"
                               type="toggle"
                               :text="filter.text"
                               :checked="filter.checked"
                               :disabled="filter.disabled"
                />
              </div>
              <div class="separator"></div>
              <div class="filters__title">
                <brand-title tag="h3" class="size-18 weight-500" text="Возраст напарника"/>
              </div>
              <div class="filters">
                <filter-button v-for="(filter, index) in filtersAge"
                               :key="index"
                               type="toggle"
                               :text="filter.text"
                               :checked="filter.checked"
                               :disabled="filter.disabled"
                />
              </div>
              <div class="separator"></div>
              <div class="filters__title">
                <brand-title tag="h3" class="size-18 weight-500" text="Пол напарника"/>
              </div>
              <div class="filters">
                <filter-button v-for="(filter, index) in filtersSex"
                               :key="index"
                               type="toggle"
                               :text="filter.text"
                               :checked="filter.checked"
                               :disabled="filter.disabled"
                />
              </div>
              <div class="separator"></div>
            </div>
            <brand-button text="Найти напарника" color="primary"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandTitle from "@/components/BrandTitle.vue";
import BrandParagraph from "@/components/BrandParagraph.vue";
import BrandNotification from "@/components/BrandNotification.vue";
import IconInfo from "@/components/icons/IconInfo.vue";
import BrandButton from "@/components/BrandButton.vue";
import FilterButton from "@/components/FilterButton.vue";
import {ref} from "vue";

type TFilter = {
  buttonType?: string,
  text: string,
  disabled?: boolean,
  checked?: boolean
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

const filtersAge = ref<Array<TFilter>>([
  {
    text: 'Без разницы',
    checked: true
  },
  {
    text: 'до 17'
  },
  {
    text: 'от 18 до 24'
  },
  {
    text: 'от 25 до 30'
  },
  {
    text: 'от 30 до 35'
  },
  {
    text: 'от 35'
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
.search {
  $self: &;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    display: flex;
    justify-content: center;
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__col_1 {
    width: 61%;

    #{$self}__inner-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__col_2 {
    width: 40%;
  }

  &__content {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__inner-wrapper {
    border-radius: 16px;
    background: $bg-color;
    padding: 16px;
    width: 100%;
  }

  &__game-list-header {
    display: flex;
    justify-content: space-between;
  }

  &__game-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &__title {
    margin-bottom: 8px;
  }
}

.game-card {
  width: 140px;
  height: 174px;
  background: $dark-4;
  border-radius: 8px;
}

.separator {
  @include separator();
}
</style>