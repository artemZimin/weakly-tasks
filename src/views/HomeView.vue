<template>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="04.01.2023 - 09.01.2023"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <a-button type="primary" size="large" @click="showModal">Добавить неделю</a-button>
    <a-modal v-model:visible="visibleModal" title="Добавить новую неделю" @ok="handleModalOk">
      <form>
        <a-typography-text>Введите название</a-typography-text>
        <a-input placeholder="Название" />
      </form>
    </a-modal>
  </template>
<script>
import { defineComponent, ref } from 'vue';

const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 33',
}, {
  title: 'Ant Design Title 4',
}];
export default defineComponent({
  setup() {
    const visibleModal = ref(false);

    const showModal = () => {
      visibleModal.value = true;
    };

    const handleModalOk = (e) => {
      console.log(e);
      visibleModal.value = false;
    };

    return {
      data,
      showModal,
      visibleModal,
      handleModalOk,
    };
  },
});
</script>
