<script setup>
import {blockList, nftList} from "@/api/index.js";
import CellRenderer from "@/components/CellRenderer.vue";
import TableCommon from "@/components/TableCommon.vue";
import {getTxId} from "@/util/index.js";
import {onMounted, ref} from "vue";
const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(50);
const total = ref(0);
const getData = () => {
  loading.value = true;
  nftList({
    page: currentPage.value - 1,
    size: pageSize.value
  }).then(res => {
    tableData.value = res.data.data;
    total.value = res.data.total;
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
      return `/nft/${row.token_id}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'token_id',
    label: 'NFT ID',
    width: 400,
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/nft/${row.token_id}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'contract.chain_contract_id',
    label: '合约ID',
    rendCell: CellRenderer,
  },
  {
    prop: 'tx_id',
    label: '交易hash',
    isLink: true,
    isCopy: true,
    rendCell: CellRenderer,
    linkCell: (row) => {
      return `/transaction/${row.tx_id}`
    },
  },
  {
    prop: 'user_wallet.address',
    label: '拥有者',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/address/${row.user_wallet.address}`
    },
    rendCell: CellRenderer,
  },
  {
    prop: 'minted_at',
    label: '创建时间',
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
