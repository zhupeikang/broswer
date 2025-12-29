<script setup>
import {transactionList} from "@/api/index.js";
import CellRenderer from "@/components/CellRenderer.vue";
import TableCommon from "@/components/TableCommon.vue";
import {formatTimestamp, getTxId} from "@/util/index.js";
import {ElTag} from "element-plus";
import {h, onMounted, ref, useAttrs} from "vue";
import {useRouter} from 'vue-router'

const tableData = ref([])
const loading = ref(false);
const currentPage = ref(1);
const props=defineProps({
  page: {
    default:50,
  }
})
const pageSize = ref(props.page);
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
// 查找数组key值为txId的索引。然后取值value


const tableColumns = [
  {
    width: "400",
    prop: 'BlockHash',
    label: '交易哈希',
    isLink: true,
    isCopy: true,
    linkCell: (row) => {
      return `/transaction/`+getTxId(row.ContractParameters)
    },
    rendCell: CellRenderer,
  },
  {
    width: "200",
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
    width: "200",
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
    isCopy: true,
    rendCell: CellRenderer,
  },
  {
    prop: 'Timestamp',
    label: '时间',
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
