<script setup>
import Copy from "@/components/Copy.vue";
import {useRoute} from "vue-router";
import Table from "./Table.vue";
import {ref} from "vue";

const tableRef = ref(null)
const route = useRoute()

const hash = ref(route.params.hash)


</script>

<template>
    <el-card class="h-100%">
      <template #header>
        <div class="flex flex-col gap-4">
          地址详情：<Copy :cell-value="hash"></Copy>
          <el-tag class="w-80px">NFT</el-tag>
        </div>

<!--        NFT总数:  <span class="font-bold text-lg">{{tableRef?.total}}</span>-->
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
