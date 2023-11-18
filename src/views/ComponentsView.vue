<template>
  <div class="components">

    <div class="user-search-block-group">
      <div v-if="step === 1" class="step first-step">
        <brand-button @click="firstStepBtnClick" text="Найти напарника"/>
      </div>
      <div v-if="step === 2" class="step second-step">
        <user-search-block/>
      </div>
      <div v-if="step === 3" class="step third-step">
        <speaking-block/>
      </div>
    </div>

    <h1>This is an components page</h1>
    <div class="group">
      <h2 class="group-title">Button</h2>
      <div class="row">
        <brand-button text="Button" color="primary"/>
        <brand-button text="Button" color="secondary"/>
        <brand-button text="Button" color="warning"/>
      </div>
      <div class="row">
        <brand-button text="Button" color="primary">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" color="secondary">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" color="warning">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
      </div>
      <div class="row">
        <brand-button text="Button" color="primary">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" color="secondary">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" color="warning">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
      </div>
      <div class="row">
        <brand-button disabled text="Button" color="primary">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button disabled text="Button" color="secondary">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button disabled text="Button" color="warning">
          <template #right>
            <icon-atom/>
          </template>
        </brand-button>
      </div>
      <div class="row">
        <brand-button color="primary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button color="secondary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button color="warning" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
      </div>
      <div class="row">
        <brand-button disabled color="primary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button disabled color="secondary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button disabled color="warning" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
      </div>
    </div>
    <div class="group">
      <h2 class="group-title">Button sizes</h2>
      <div class="row">
        <brand-button text="Button" size="size-l" color="primary">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" size="size-m" color="secondary">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
        <brand-button text="Button" size="size-s" color="warning">
          <template #left>
            <icon-atom/>
          </template>
        </brand-button>
      </div>
      <div class="row">
        <brand-button size="size-l" color="primary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button size="size-m" color="secondary" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
        <brand-button size="size-s" color="warning" round>
          <template #right>
            <icon-like/>
          </template>
        </brand-button>
      </div>
    </div>
    <div class="group">
      <h2 class="group-title">Filter Button</h2>
      <div class="row">
        <filter-button text="Добавить игру"/>
        <filter-button text="Добавить игру"/>
        <filter-button text="Добавить игру"/>
      </div>
      <div class="row">
        <filter-button type="add" text="Добавить игру"/>
        <filter-button type="close" text="Добавить игру"/>
        <filter-button type="toggle" text="Добавить игру"/>
      </div>
      <div class="row">
        <filter-button type="toggle" text="от 18 до 24"/>
        <filter-button type="toggle" active text="Мужской"/>
        <filter-button type="toggle" disabled text="Смартфон"/>
        <filter-button type="toggle" active disabled text="ПК"/>
      </div>
    </div>
    <div class="group">
      <h2 class="group-title">Notification</h2>
      <div class="row">
        <brand-notification title="Текст" text="Длинный текст">
          <icon-info/>
        </brand-notification>
      </div>
      <div class="row">
        <brand-notification title="Текст" text="Длинный текст">
          <icon-like-fill/>
        </brand-notification>
      </div>
    </div>
    <div class="group">
      <h2 class="group-title">Speaking block</h2>
      <div class="row">
        <speaking-block/>
      </div>
    </div>
    <div class="group">
      <h2 class="group-title">Searching block</h2>
      <div class="row">
        <user-search-block/>
      </div>
    </div>
  </div>
</template>

<script>
import BrandButton from "../components/BrandButton.vue";
import FilterButton from "../components/FilterButton.vue";
import BrandNotification from "../components/BrandNotification.vue";
import SpeakingBlock from "../components/SpeakingBlock.vue";
import IconAtom from "../components/icons/IconAtom.vue";
import IconLike from "../components/icons/IconLike.vue";
import IconLikeFill from "../components/icons/IconLikeFill.vue";
import IconInfo from "../components/icons/IconInfo.vue";
import UserSearchBlock from "../components/UserSearchBlock.vue";

export default {
  name: "ComponentsView",
  data() {
    return {
      step: 1
    }
  },
  methods: {
    firstStepBtnClick() {
      this.step = 2;

      setTimeout(() => {
        this.step = 3
      }, 5000)
    }
  },
  components: {
    UserSearchBlock,
    SpeakingBlock, IconInfo, IconLike, IconLikeFill, IconAtom, BrandButton, FilterButton, BrandNotification}
}
</script>

<style scoped lang="scss">
.components {
  margin-bottom: 200px;
}

.group {
  margin: 20px;

  &-title {
    text-align: center;
    border-bottom: 1px solid $dark-4;
  }
}

.row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: end;
}

.user-search-block-group {
  display: flex;

  .step {
    margin: 150px auto;
  }
}
</style>