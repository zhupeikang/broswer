<template>
  <div class="px-20">
    <el-menu
        router

        :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        :ellipsis="false"
    >
       <div class="ml-200px font-700">恺英联盟链</div>

      <div class="menu-right">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/block">区块浏览</el-menu-item>
        <el-menu-item index="/transaction">交易浏览</el-menu-item>
        <el-menu-item index="/nft">NFT</el-menu-item>
        <div>
          <el-autocomplete
              v-model="headerSlotState"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入地址/交易哈希/tokenId进行搜索"
              @select="handleSelect"
          >
            <template #header>{{searchType}}</template>
          </el-autocomplete>
        </div>

      </div>

    </el-menu>
  </div>
</template>

<script setup>
import {search} from "@/api/index.js";
import {ref, watch} from 'vue'
import {useRoute} from "vue-router";
const headerSlotState = ref('')
const route = useRoute()
const activeIndex = ref(route.path)
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath
})
const links = ref([])
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
let timeout
const handleSelect = (item) => {
  console.log(item)
}

const searchType=ref()

const querySearchAsync = (queryString,cb) => {
  search({
    hash: queryString
  }).then(res => {
    searchType.value = res.data.type
  })
  // const results = queryString
  //     ? links.value.filter(createFilter(queryString))
  //     : links.value
  //
  // clearTimeout(timeout)
  // timeout = setTimeout(() => {
  //   cb(results)
  // }, 3000 * Math.random())
}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;       /* 垂直居中 */
  justify-content: space-between; /* 左右两边留空 */
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 30px;  /* 控制右侧菜单间距，也可以用 padding-left 调整体距 */
  margin-right: 200px;
}
</style>
