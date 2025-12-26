<script setup>
import {indexData} from "@/api/index.js";
import {router} from "@/router/index.js";
import {onMounted, ref} from "vue";
const loading=ref(true)
import Block from "@/pages/Block/Table.vue";
import Transaction from "@/pages/Transaction/Table.vue";
const data=ref({

})

onMounted(() => {
  indexData().then(res=>{
    data.value=res.data
  }).finally(()=>{
    loading.value=false
  })
})

const goUrl=(path)=>{
  router.push(path);
}
</script>

<template>
  <div>
    <el-card>
      <template #header>
        恺英联盟链网数据统计
      </template>
      <div  v-loading="loading" class="flex  flex-row  gap-3 mb-5">
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">交易总数</div>
            <div class="text-2xl font-bold">{{ data?.trans_count }}</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">NFT总数</div>
            <div class="text-2xl font-bold">{{ data?.nft_count }}</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">区块高度</div>
            <div class="text-2xl font-bold">{{ data?.block }}</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">链账户地址数</div>
            <div class="text-2xl font-bold">{{ data?.user_count }}</div>
          </div>

        </div>
      </div>
      <el-divider></el-divider>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <el-card shadow="hover" header="最新区块">
          <Block :page="10"></Block>
          <template #footer>
          <el-button @click="goUrl('/block')" type="primary" > 查看更多区块</el-button>
          </template>
        </el-card>
        <el-card shadow="hover" header="最新交易">
          <Transaction :page="10"></Transaction>

          <template #footer>
            <el-button @click="goUrl('/transaction')" type="primary" > 查看更多交易</el-button>
          </template>
        </el-card>
      </div>

    </el-card>
  </div>
</template>

<style scoped>

</style>
