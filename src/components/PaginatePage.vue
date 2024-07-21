<script setup>
/*
    //使用另一個分頁套件 vue-awesome-paginate
    total-items : 總共幾個
    items-per-page: 點擊下一個 要跳幾格
    max-pages-shown : 一次總共要顯示幾個
    v-model 綁定目前 在哪一頁
*/
import { computed } from 'vue'
const props = defineProps({
  pageInfo: {
    type: Object,
    default: () => {
      return {
        current_page: 1,
        has_next: true,
        has_pre: false,
        total_pages: 2
      }
    }
  }
})
const pages = computed(() => {
  const { current_page, has_next, has_pre, total_pages } = props.pageInfo
  return {
    currentPage: current_page,
    hasNext: has_next,
    hasPrevious: has_pre,
    totalPages: total_pages
  }
})
const emits = defineEmits({
  sendPageNum: (num) => {
    if (typeof num === 'number') {
      return true
    }
  }
})

const onClickHandler = (page) => {
  //   console.log(page)
  emits('sendPageNum', page)
}
</script>
<template>
  <vue-awesome-paginate
    :total-items="pages.totalPages"
    :items-per-page="1"
    :max-pages-shown="4"
    v-model="pages.currentPage"
    @click="onClickHandler"
  />
</template>
<style>
.pagination-container {
  display: flex;
  margin: 0px auto;
  column-gap: 10px;
}

.paginate-buttons {
  padding: 8px 15px;
  cursor: pointer;

  background-color: #f3f1e5;

  border: 1px solid black;

  color: black;
}

.paginate-buttons:hover {
  background-color: black;
  color: #fbff22;
}

.active-page {
  background-color: black;

  color: #fbff22;
}
.active-page:hover {
  background-color: black;
  color: #fbff22;
}
</style>
