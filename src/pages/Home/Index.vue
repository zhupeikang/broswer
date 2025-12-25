<script setup>
import Index from '@/pages/Block/Index.vue'
</script>

<template>
  <div>
    <el-card>
      <template #header>
        恺英联盟链网数据统计
      </template>
      <div class="flex  flex-row  gap-3 mb-5">
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">区块高度</div>
            <div class="text-2xl font-bold">1,234,567</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">区块高度</div>
            <div class="text-2xl font-bold">1,234,567</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">区块高度</div>
            <div class="text-2xl font-bold">1,234,567</div>
          </div>

        </div>
        <div class="flex-1 flex  justify-between bg-white p-2 rounded-lg shadow">
          <div>
            <div class="text-gray-500">区块高度</div>
            <div class="text-2xl font-bold">1,234,567</div>
          </div>

        </div>
      </div>
      <el-divider></el-divider>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <el-card shadow="hover" header="最新区块">

<!--          <Index></Index>-->

          <template #footer>
          <el-button type="primary" > 查看更多区块</el-button>
          </template>
        </el-card>
        <el-card shadow="hover" header="最新交易">
          <template #footer>
            <el-button type="primary" > 查看更多交易</el-button>
          </template>
        </el-card>
      </div>

    </el-card>
  </div>
</template>

<style scoped>

</style>
