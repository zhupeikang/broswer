<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <Header></Header>
    <el-main  class="h-[calc(100vh-60px)] " >
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component
              v-if="route.meta.keepAlive"
              :is="Component"
              :key="route.name"
          />
        </keep-alive>

        <component
            v-if="!route.meta.keepAlive"
            :is="Component"
            :key="route.fullPath"
        />
      </router-view>

    </el-main>
  </div>

</template>

<style scoped>

</style>
