<script setup>
import {transactionList} from "@/api/index.js";
import CellRenderer from "@/components/CellRenderer.vue";
import TableCommon from "@/components/TableCommon.vue";
import {ElTag} from "element-plus";
import {h, onMounted, ref, useAttrs} from "vue";
import {useRouter} from 'vue-router'

const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(50);
const total = ref(1);
const getData = () => {
  loading.value = true;
  transactionList({
    page: currentPage.value - 1,
    size: pageSize.value,
    block_height: attrs.blockHeight || ''
  }).then(res => {
    tableData.value = res.data.list;
    total.value = res.data.total;
  }).finally(() => {
    loading.value = false;
  })
}
const attrs=useAttrs()

const tableColumns = [
  {
    width: "400",
    prop: 'BlockHash',
    label: '交易哈希',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}`
    },
    rendCell: CellRenderer,
  },
  {
    width: "400",
    prop: 'TxType',
    label: '交易消息类型',
    rendCell: (row) => {
      return {
        render() {
          return h(
              ElTag,
              {type: 'info',disableTransitions:true},
              () => row.TxType
          )
        }
      }
    }
  },
  {
    width: "400",
    prop: 'TxStatusCode',
    label: '状态',
    rendCell: (row) => {
      return {
        render() {
          return h(
              ElTag,
              {type: 'success', round:true,disableTransitions:true},
              () => row.TxStatusCode
          )
        }
      }
    }

  },
  {
    width: "200",
    prop: 'BlockHeight',
    label: '区块高度',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'Timestamp',
    label: '时间',
    time: true,
    rendCell: CellRenderer,
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

const router = useRouter()

function goTo(path) {
  router.push(path)
}
defineExpose({
  currentPage,
  pageSize,
  total,
  pageChange
})
</script>

<template>

  <TableCommon
      :loading="loading"
      :tableColumns="tableColumns"
      :tableData="tableData"
  >
  </TableCommon>

</template>

<style scoped>

</style>
