<script setup>

import CellWrapper from "@/components/CellWrapper.vue";

 defineProps({
  tableData: {
    type: Array,
    required: true
  },
  tableColumns: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  }
})


</script>

<template>
  <el-table
      v-loading="loading"
      :data="tableData"
      header
      showOverflowTooltip
      stripe
      style="width: 100%"
  >
    <el-table-column
        v-for="(item,index) in tableColumns"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        v-bind="{...item}"
    >
      <template #default="scope">
        <CellWrapper
            :row="scope.row"
            :item="item"

        />
      </template>
    </el-table-column>

  </el-table>

</template>

<style scoped>

</style>
