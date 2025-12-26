<script setup>
import {formatTimestamp} from "@/util/index.js";
import {CircleCheckFilled, CopyDocument} from "@element-plus/icons-vue";
import {UseClipboard} from "@vueuse/components";
import {ElIcon} from "element-plus";
import {useRoute, useRouter} from "vue-router";
import Index from '@/pages/Transaction/Table.vue'
const route = useRoute()
console.log(route.params)
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium">区块详情</span>
      </div>
    </template>
    <div class="flex flex-col w-full gap-3">
        <div class="flex gap-4">
          <div class="font-bold">区块哈希</div>
          <div class="flex items-center gap-4">
            <div>
              {{ route.params.hash }}
            </div>
            <UseClipboard
                v-slot="{ copy, copied }"
                :source="route.params.hash"
            >
              <el-icon
                  :size="16"
                  class="cursor-pointer"
                  @click="copy()"
              >
                <CircleCheckFilled v-if="copied"/>
                <CopyDocument v-else/>
              </el-icon>
            </UseClipboard>

          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold">交易数量</div>
          <div class="flex items-center gap-4">
            <div>
              {{ route.params.num }}
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold">出块时间</div>
          <div class="flex items-center gap-4">
            <div>
              {{formatTimestamp(route.params.time)}}
            </div>

          </div>
        </div>
    </div>
  </el-card>
  <el-card class="box-card mt-20px">
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium">交易列表</span>
      </div>
    </template>
    <Index :blockHeight="route.params.height"></Index>
  </el-card>

</template>

<style scoped>

</style>
