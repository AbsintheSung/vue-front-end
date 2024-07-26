<template>
  <!-- <el-button plain @click="centerDialogVisible = true"> Click to open the Dialog </el-button> -->

  <el-dialog
    :model-value="show"
    title="Warning"
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
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="delfunction"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
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
