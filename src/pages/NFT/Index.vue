<script setup>
import Table from "./Table.vue";
import {ref} from "vue";

const tableRef = ref(null)



</script>

<template>
    <el-card class="h-100%">
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
