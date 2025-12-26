<template>
  <el-affix :offset="0">
    <div class="px-20">
      <el-menu
          :default-active="activeIndex"
          :ellipsis="false"
          class="menu"
          mode="horizontal"
          router
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
                class="w-400px"
                clearable
                placeholder="请输入地址/交易哈希/tokenId进行搜索"
                @select="handleSelect"
            >
              <template v-if="searchType" #header>
                <el-tag class="uppercase">{{ searchType }}</el-tag>
              </template>
              <template #default="{ item }">
                <div :class="['flex justify-between items-center',item.disabled && 'text-gray-400 cursor-not-allowed']">
                  {{ item.value }}
                </div>
              </template>
            </el-autocomplete>
          </div>

        </div>

      </el-menu>
    </div>
  </el-affix>


</template>

<script setup>
import {search} from "@/api/index.js";
import {ref, watch} from 'vue'
import {useRoute} from "vue-router";

const headerSlotState = ref()
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
const handleSelect = (item) => {
  if (item.disabled) return
  let url = ''
  switch (item.type) {
    case 'block':
      url = `/block/${item.value}`
      break
    case 'transaction':
      url = `/transaction/${item.value}`
      break
    case 'address':
      url = `/address/${item.value}`
      break
    case 'nft':
      url = `/nft/${item.value}`
      break
    default:
      url = `/search/${item.value}`
      break
  }
  window.location.href = url


}

const searchType = ref()

const querySearchAsync = async (queryString, cb) => {
  if (!queryString) {
    searchType.value = ''
    cb([])
    return
  }

  try {
    const res = await search({hash: queryString})
    const {type, hash} = res.data || {}

    if (!hash) {
      searchType.value = ''
      cb([
        {
          value: '未找到相关结果',
          disabled: true
        }
      ])
      return
    }

    searchType.value = type
    cb([
      {
        value: hash,
        type
      }
    ])
  } catch (e) {
    searchType.value = '搜索异常'
    cb([
      {
        value: '搜索失败，请稍后重试',
        disabled: true
      }
    ])
  }
}


</script>

<style scoped>
.menu {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 左右两边留空 */
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 30px; /* 控制右侧菜单间距，也可以用 padding-left 调整体距 */
  margin-right: 200px;
}
</style>
