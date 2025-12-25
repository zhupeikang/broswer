<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <el-main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

  </el-main>
</template>

<style scoped>

</style>
