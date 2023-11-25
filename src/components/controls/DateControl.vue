<template>
  <div class="date-control">
    <brand-select day v-model="day" :options="dayOptions"/>
    <brand-select month v-model="month" :options="monthOptions"/>
    <brand-select year v-model="year" :options="yearOptions"/>
  </div>
</template>

<script setup lang="ts">
import BrandSelect from '@/components/BrandSelect.vue'
import {computed, ref} from "vue";

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

</script>

<style scoped lang="scss">
.date-control {
  width: 100%;
  display: flex;
  gap: 8px;

  [year],
  [day] {
    flex: 1;
  }

  [month] {
    flex: 3;
  }
}
</style>