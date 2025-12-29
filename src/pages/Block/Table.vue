<script setup>
import {blockList} from "@/api/index.js";
import CellRenderer from "@/components/CellRenderer.vue";
import TableCommon from "@/components/TableCommon.vue";
import {formatTimestamp} from "@/util/index.js";
import {h, onMounted, ref} from "vue";

const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const total = ref(1);
const props=defineProps({
  page: {
    default:50,
  }
})
const pageSize = ref(props.page);

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
    width: "200",
    prop: 'BlockHeight',
    label: '区块高度',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}/${row.TxNum}/${row.Timestamp}/${row.BlockHeight}`
    },
    rendCell: CellRenderer,

  },
  {
    prop: 'BlockHash',
    label: '区块哈希',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/block/${row.BlockHash}/${row.TxNum}/${row.Timestamp}/${row.BlockHeight}`
    },
    rendCell: CellRenderer,

  },
  {
    prop: 'TxNum',
    label: '交易数量',
    rendCell: CellRenderer,

  },
  {
    prop: 'Timestamp',
    label: '出块时间',
    time: true,
    rendCell: (row) => {
      return {
        render() {
          return h(
              () => formatTimestamp(row.Timestamp)
          )
        }
      }
    }


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
