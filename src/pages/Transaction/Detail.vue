<script setup>
import {transactionDetail} from "@/api/index.js";
import Copy from "@/components/Copy.vue";
import {CircleCheckFilled, CopyDocument} from "@element-plus/icons-vue";
import {UseClipboard} from "@vueuse/components";
import {ElIcon} from "element-plus";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const info=ref({})
const hash=ref(route.params.hash)

const getData=()=>{
  transactionDetail({
    hash:hash.value
  }).then(res=>{
    info.value=res.data
  })
}

watch(hash,()=>{
  getData()
},{immediate:true})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium">基本信息</span>
      </div>
    </template>
    <div class="flex flex-col w-full gap-3">
      <div class="flex gap-4">
        <div class="font-bold">交易哈希</div>
        <Copy :cell-value="info?.tx_hash"/>

      </div>
      <div class="flex gap-4">
        <div class="font-bold">交易ID</div>
        <div class="flex items-center gap-4">
          <div>
            {{ info?.tx_id }}
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="font-bold">交易时间</div>
        <div class="flex items-center gap-4">
          <div>
            {{info?.create_time}}
          </div>

        </div>
      </div>
    </div>
  </el-card>
  <el-card class="box-card mt-10">
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium">交易内容</span>
      </div>
    </template>
    <pre v-if="info.payload" class="bg-gray-100 p-4 rounded overflow-x-auto">{{  }}</pre>
    <div v-else>
      <el-empty></el-empty>
    </div>
  </el-card>
</template>

<style scoped>

</style>
