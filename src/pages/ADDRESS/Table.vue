<script setup>
import {account} from "@/api/index.js";
import CellRenderer from "@/components/CellRenderer.vue";
import TableCommon from "@/components/TableCommon.vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(50);
const total = ref(0);
const getData = () => {
  loading.value = true;
  account({
    page: currentPage.value,
    size: pageSize.value,
    hash:hash.value
  }).then(res => {
    tableData.value = res.data.list;
    total.value = res.data.count;
  }).finally(() => {
    loading.value = false;
  })
}

const tableColumns = [
  {
    width: "200",
    prop: 'name',
    label: 'NFT名称',
    isLink: true,
    linkCell: (row) => {
      return `/nft/${row.tokenId}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'tokenId',
    label: 'NFT ID',
    width: 400,
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/nft/${row.tokenId}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'contractId',
    label: '合约ID',
    rendCell: CellRenderer,
  },
  {
    prop: 'txId',
    label: '交易hash',
    isLink: true,
    isCopy: true,
    rendCell: CellRenderer,
    linkCell: (row) => {
      return `/transaction/${row.txId}`
    },
  },
  {
    prop: 'createAt',
    label: '创建时间',
    rendCell: CellRenderer,
  },
];
const route = useRoute()
const hash = ref(route.params.hash)

watch(hash, () => {
  getData()
}, {immediate: true})
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
