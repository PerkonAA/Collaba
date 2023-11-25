<template>
  <div class="settings">
    <div class="settings__inner">
      <div class="settings__header">
        <div class="settings__title">Настройка профиля</div>
        <div class="settings__description">Ты вошел в систему с помощью Discord, поэтому у тебя уже есть никнейм, осталось настроить пару параметров</div>
      </div>
      <div class="settings__content">
        <div class="settings__subtitle">День рождения</div>
        <div class="settings__row row">
          <brand-select v-model="year" :options="yearOptions"/>
          <brand-select v-model="month" :options="monthOptions"/>
          <brand-select v-model="day" :options="dayOptions"/>
<!--          <select v-model="month">-->
<!--            <option :key="i" v-for="i in 12" :value="i - 1">{{ new Date(0, i - 1).toLocaleDateString('ru-RU', { month: 'long' }) }}</option>-->
<!--          </select>-->
<!--          <select v-model="day">-->
<!--            <option :key="i" v-for="i in daysCount">{{ i }}</option>-->
<!--          </select>-->
        </div>
        <div class="settings__row row">
          <div class="form-item">
            <span class="setting-text">Отображать возраст</span>
            <brand-checkbox></brand-checkbox>
          </div>
        </div>


        <div class="settings__subtitle">Пол</div>
        <div class="settings__row row">
          <div class="form-item">
            <span class="setting-text">Мужской</span>
            <brand-radio></brand-radio>
          </div>
          <div class="form-item">
            <span class="setting-text">Женский</span>
            <brand-radio></brand-radio>
          </div>
          <div class="form-item">
            <span class="setting-text">Другой</span>
            <brand-radio></brand-radio>
          </div>
        </div>
        <brand-notification title="Пол будет учитываться в поиске" text="Однако его не будет видно другому пользователю без подписки">
          <icon-info/>
        </brand-notification>
      </div>
    </div>
    <div class="settings__footer">
      <brand-button text="Сохранить и продолжить" color="primary"></brand-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from "vue";
import IconInfo from "../components/icons/IconInfo.vue";
import BrandCheckbox from '@/components/BrandCheckbox.vue'
import BrandButton from '@/components/BrandButton.vue'
import BrandSelect from '@/components/BrandSelect.vue'
import BrandNotification from '@/components/BrandNotification.vue'
import BrandRadio from "@/components/BrandRadio.vue";

let year = ref<number>(2000)
let month = ref<number>(1)
let day = ref<number>(1)

const yearOptions = computed(() => {
  let options = []
  for (let i = 1; i < 31; i++) {
    let option = {
      value: `${2000 +i}`,
      text: `${2000 +i}`
    }

    options.push(option)
  }
  return options;
})

const monthOptions = computed(() => {
  let options = []
  for (let i = 1; i < 13; i++) {
    let option = {
      value: i - 1,
      text: new Date(0, i - 1).toLocaleDateString('ru-RU', { month: 'long' }) + ''
    }

    options.push(option)
  }
  return options;
})

const dayOptions = computed(() => {
  let options = []
  let daysCount = year.value !== null && month.value !== null
      ? new Date(year.value, month.value + 1, 0).getDate()
      : 0

  for (let i = 1; i < daysCount + 1; i++) {
    let option = {
      value: i,
      text: i
    }
  // @section('content')
    options.push(option)
  }
  return options;
})

const daysCount = computed(() => {
  // console.log(this)
  // const { year, month } = this;
  return year.value !== null && month.value !== null
      ? new Date(year.value, month.value + 1, 0).getDate()
      : 0;
})
const date = computed(() => {
  return year.value !== null && month.value !== null && day.value !== null
      ? new Date(year.value, month.value, day.value)
      : null;
})
watch(daysCount, (val) => {
  if (day.value) {
    day.value = Math.min(day.value, val);
  }
});

</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  height: 100%;

  padding-bottom: 36px;

  &__inner {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  &__header {
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 8px;
    margin-top: 55px;
  }

  &__desctiption {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  &__footer {
    margin-top: 25px;
  }

  .setting-text {
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
}
</style>