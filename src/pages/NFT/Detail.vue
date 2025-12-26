<script setup>
import {asset, transactionDetail} from "@/api/index.js";
import Copy from "@/components/Copy.vue";
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const info = ref({})
const hash = ref(route.params.hash)

const getData = () => {
  asset({
    hash: hash.value
  }).then(res => {
    info.value = res.data
  })
}

watch(hash, () => {
  getData()
}, {immediate: true})
</script>

<template>
  <div class=" mx-auto p-10">
    <div class="font-bold">
      NFT详情
    </div>
    <el-card v-if="info?.contract" class="box-card mt-4">
      <template #header>
        <div class="flex items-end  gap-2">
          <div class="w-80px">
            <img class=" w-80px rounded-md" :src="info?.contract?.image_url" alt="">
          </div>
          <div class="flex flex-col gap-2">
            <div>
              {{ info?.nft?.name }}#{{ info?.nft?.no }}
            </div>
            <div>
              <el-tag>NFT</el-tag>
            </div>
          </div>
        </div>
      </template>
      <div class="flex  flex-col gap-2">
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            NFT ID
          </div>
          <div class="flex-1 flex items-center gap-2 ">
            <Copy :cell-value="info.nft?.tokenId"/>
          </div>
        </div>
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            发行商
          </div>
          <div class="flex-1 flex items-center gap-2 ">
            <Copy :cell-value="info.contract?.publisher_address"/>
          </div>
        </div>
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            作者
          </div>
          <div class="flex-1 flex items-center gap-2 ">
          {{info.nft?.author}}
          </div>
        </div>
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            拥有者
          </div>
          <div class="flex-1 flex items-center gap-2 ">
            <Copy :cell-value="info.nft?.userAddress"/>
          </div>
        </div>
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            创建哈希
          </div>
          <div class="flex-1 flex items-center gap-2 ">
            {{info.nft?.txId}}
          </div>
        </div>
        <div class="flex items-center">
          <div class=" w-50 font-bold text-left mr-4">
            链上数据
          </div>
          <div class="flex-1 flex items-center gap-2 ">
            {{ info?.nft?.name }}#{{ info?.nft?.no }}
          </div>
        </div>

      </div>
    </el-card>
    <div v-else>
      <el-empty></el-empty>
    </div>
  </div>
</template>

<style scoped>

</style>
