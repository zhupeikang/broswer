<template>
  <div class="header h-100px   bg-black   flex items-center lg:px-20 px-10 justify-between">
    <!-- logo -->
    <img alt="" src="@/assets/logo.png">

    <!-- PC 菜单 -->
    <div class="hidden md:flex items-center  gap-80px justify-between">
      <el-dropdown   :teleported="false" @command="handleCommand">
        <div class="text-20px text-#BCBCBC font-bold">
          Products
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="https://www.kingnetai.io/">
              <div class="flex items-center gap-10px">
                <img class="w-20px h-20px" src="@/assets/icon/1.png" />
                KINGNET AI
              </div>

            </el-dropdown-item>
            <el-dropdown-item command="https://xmint.games/">
              <div class="flex items-center gap-10px">
                <img class="w-20px" src="@/assets/icon/2.png" />
                XMINT Platform
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="http://genleap.world/">
              <div class="flex items-center gap-10px">
                <img class="w-20px" src="@/assets/icon/3.png" />
                Genleap

              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown :teleported="false" @command="handleCommand">
        <div class="text-20px text-#BCBCBC font-bold">
          GameFi
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="https://t.me/ZaryaGameBot">
              <div class="flex items-center gap-10px">
                <img class="w-20px" src="@/assets/icon/4.png" />
                ZARYA
              </div>


            </el-dropdown-item>
            <el-dropdown-item command="https://www.dappportal.io/dapps/N67b319b2bd857a6b255cf1fe">
              <div class="flex items-center gap-10px">
                <img class="w-20px" src="@/assets/icon/4.png" />
                Genleap

              </div>


            </el-dropdown-item>
            <el-dropdown-item command="https://fishing-xm.xmint.games/">
              <div class="flex items-center gap-10px">
                <img class="w-20px" src="@/assets/icon/4.png" />
                Fishing Trip

              </div>


            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div @click="goAnchor('news')" class="text-20px text-#BCBCBC cursor-pointer  font-bold">News</div>
      <div @click="goAnchor('partners')" class="text-20px cursor-pointer text-#BCBCBC font-bold">Partners</div>
    </div>

    <!-- Mobile 菜单按钮 -->
    <div
        class="flex md:hidden text-#BCBCBC text-24px font-bold"
        @click="drawer = true"
    >
      ☰
    </div>
  </div>

  <!-- Mobile Drawer -->
  <el-drawer
      v-model="drawer"
      direction="rtl"
      size="90%"
      class="bg-black"
      :with-header="false"
  >
    <nav class=" ">
      <!-- Products -->
      <ul>
        <!-- 一级 -->
        <li class="text-20px text-#BCBCBC font-bold py-12px">
          Products
        </li>

        <!-- 二级 -->
        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('https://www.kingnetai.io/')"
        >
          <img class="w-20px" src="@/assets/icon/1.png" />
          <span class="text-#BCBCBC">KINGNET AI</span>
        </li>

        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('https://xmint.games/')"
        >
          <img class="w-20px" src="@/assets/icon/2.png" />
          <span class="text-#BCBCBC">XMINT Platform</span>
        </li>

        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('http://genleap.world/')"
        >
          <img class="w-20px" src="@/assets/icon/3.png" />
          <span class="text-#BCBCBC">Genleap</span>
        </li>
      </ul>

      <!-- GameFi -->
      <ul class="mt-24px">
        <!-- 一级 -->
        <li class="text-20px text-#BCBCBC font-bold py-12px">
          GameFi
        </li>

        <!-- 二级 -->
        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('https://t.me/ZaryaGameBot')"
        >
          <img class="w-20px" src="@/assets/icon/4.png" />
          <span class="text-#BCBCBC">ZARYA</span>
        </li>

        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('https://www.dappportal.io/dapps/N67b319b2bd857a6b255cf1fe')"
        >
          <img class="w-20px" src="@/assets/icon/4.png" />
          <span class="text-#BCBCBC">Genleap</span>
        </li>

        <li
            class="flex items-center gap-10px pl-16px py-10px"
            @click="go('https://fishing-xm.xmint.games/')"
        >
          <img class="w-20px" src="@/assets/icon/4.png" />
          <span class="text-#BCBCBC">Fishing Trip</span>
        </li>
      </ul>

      <!-- 普通一级菜单 -->
      <ul class="mt-24px">
        <li @click="goAnchor('news')" class="text-20px text-#BCBCBC font-bold py-12px">News</li>
        <li @click="goAnchor('partners')" class="text-20px text-#BCBCBC font-bold py-12px">Partners</li>
      </ul>
    </nav>
  </el-drawer>
</template>
<script setup>
import {router} from "@/router/index.js";
import { ref } from 'vue'

const drawer = ref(false)
const goAnchor = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  drawer.value = false // 移动端顺便关闭菜单
}

const handleCommand = (url) => {
  window.open(url, '_blank')
}

const go = (url) => {
  window.open(url, '_blank')
  drawer.value = false
}
</script>



<style scoped>
:deep(.el-dropdown__popper) {
  --el-border-color-light: var(--el-color-primary);
  --el-bg-color-overlay: rgba(0,0,0,0.4);
  --el-dropdown-menuItem-hover-fill:transparent;
  .el-dropdown-menu__item{
    color: white;
  }

}
:deep(.el-tooltip__trigger){
  &:focus-visible{
    outline: none;
  }
}

.mobile-title {
  @apply text-18px font-bold py-12px border-b border-#333 cursor-pointer;
}

.mobile-sub {
  @apply pl-12px text-14px text-#BCBCBC;
}
.mobile-sub > div {
  @apply py-8px;
}

:deep(.el-drawer) {
  background: #000;
}
</style>
