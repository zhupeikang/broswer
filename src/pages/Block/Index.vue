<script setup>
import Table from "@/pages/Block/Table.vue";
import {ref} from "vue";
defineOptions({
  name: 'Block'
})
const tableRef = ref(null)
defineProps({
  showHeader: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <el-card class="h-100%">
    <template v-if="showHeader" #header>
      区块总数
    </template>
    <Table ref="tableRef"></Table>
    <template #footer>
      <el-pagination
          v-if="tableRef"
          v-model:current-page="tableRef.currentPage"
          v-model:page-size="tableRef.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="tableRef.total"
          class="mt-4 flex justify-end"
          layout="prev, pager, next, jumper,sizes"
          size="large"
          @change="tableRef.pageChange"
      >
      </el-pagination>
    </template>
  </el-card>
</template>

<style scoped>

</style>
