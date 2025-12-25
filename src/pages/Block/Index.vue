<script setup>
import {blockList} from "@/api/index.js";
import {formatTimestamp} from "@/util/index.js";
import {CopyDocument} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import {UseClipboard} from '@vueuse/components'

const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(50);
const total = ref(1);
const getData = () => {
  loading.value = true;
  blockList({
    page: currentPage.value - 1,
    size: pageSize.value
  }).then(res => {
    tableData.value = res.data.list;
    total.value = res.data.total;
  }).finally(() => {
    loading.value = false;
  })
}

const tableColumns = [
  {
    width: "400",
    prop: 'BlockHeight',
    label: '区块高度',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}`
    }
  },
  {
    prop: 'BlockHash',
    label: '区块哈希',
    width: 400,
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}`
    }
  },
  {
    prop: 'TxNum',
    label: '交易数量'
  },
  {
    prop: 'Timestamp',
    label: '出块时间',
    time: true,
  },
];
onMounted(() => {
  getData();
})
const pageChange = (page, size) => {
  currentPage.value = page;
  pageSize.value = size
  getData();
}
import {useRouter} from 'vue-router'

const router = useRouter()

function goTo(path) {
  router.push(path)
}
</script>

<template>
  <div class=" ma">
    <el-card>
      <template #header>
        区块总数
      </template>
      <el-table
          header
          height="70vh"
          showOverflowTooltip
          stripe
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
      >
        <el-table-column
            v-for="(item,index) in tableColumns"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
        >
          <template #default="scope">
            <div v-if="item.rendCell" v-html="item.rendCell(scope.row)"></div>
            <div class="flex items-center justify-start gap-2 w-full" v-else>
              <div class="w-80%  overflow-hidden">
                <el-link @click.prevent="goTo(item.linkCell(scope.row))" :href="item?.linkCell(scope.row)"
                         v-if="item.isLink" type="primary">
                  {{ scope.row[item.prop] }}
                </el-link>
                <span v-else-if="item.time">
                  {{ formatTimestamp(scope.row[item.prop]) }}
                </span>
                <span v-else>
                  {{ scope.row[item.prop] }}
                </span>
              </div>

              <div v-if="item.isCopy">

                <UseClipboard v-slot="{ copy, copied }" :source="scope.row[item.prop]">
                  <el-icon class="cursor-pointer" @click="copy()" :size="16">
                    <CircleCheckFilled v-if="copied"/>
                    <CopyDocument v-if="!copied"/>
                  </el-icon>
                </UseClipboard>
              </div>
            </div>

          </template>
        </el-table-column>

      </el-table>
      <template #footer>
        <el-pagination
            size="large"
            class="mt-4 flex justify-end"
            v-model:page-size="pageSize"
            :total="total"
            :page-sizes="[10, 20, 50, 100]"
            layout="prev, pager, next, jumper,sizes"
            v-model:current-page="currentPage"
            @change="pageChange"
        >
        </el-pagination>
      </template>
    </el-card>
  </div>
</template>

<style scoped>

</style>
