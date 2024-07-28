<script setup>
const emits = defineEmits(['closeModal'])
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  titleText: {
    type: String
  },
  delfunction: {
    type: Function,
    default: () => {}
  }
})
const handleClose = () => {
  emits('closeModal')
}
</script>
<template>
  <el-dialog
    :model-value="show"
    title="刪除提示"
    width="500"
    align-center
    :before-close="handleClose"
  >
    <p v-if="titleText !== 'all'">
      是否將 <span class="text-xl font-bold"> {{ titleText }} </span> 此商品從購物車移除
    </p>
    <p v-else>是否將全部商品從購物車中移除</p>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose" class="del-dialog-cancel-btn">Cancel</el-button>
        <el-button type="primary" class="del-dialog-btn" @click="delfunction"> 確認 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style>
.el-dialog {
  background-color: #f3f1e5;
}
.del-dialog-btn,
.del-dialog-cancel-btn {
  border: none;
  background-color: black;
  color: white;
}
.del-dialog-btn:hover {
  background-color: black;
  color: red;
}
.del-dialog-cancel-btn:hover {
  background-color: black;
  color: #fbff22;
}
</style>
