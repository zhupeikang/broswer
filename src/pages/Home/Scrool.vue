<template>
  <div id="partners" class="w-full bg-#1A1A1A from-slate-50 to-white py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class=" text-#D4D4D4 font-bold flex flex-col items-center gap-2 lg:text-40px text-30px mb-20px">
        Ecosystem Partners
        <Divider :color="color"></Divider>
      </div>
      <div class="p-8   justify-center">
        <div
            class=" grid gap-8 max-sm:grid-cols-2 grid-cols-4 place-content-center place-items-center  max-sm:place-content-center max-sm:gap-2   lg:items-center ">
          <img alt="" class="w-300px max-sm:w-150px" src="@/assets/logo/top/1.png">
          <img alt="" class="w-300px max-sm:w-150px" src="@/assets/logo/top/2.png">
          <img alt="" class=" w-300px max-sm:w-150px" src="@/assets/logo/top/3.png">
          <img alt="" class="w-300px max-sm:w-150px" src="@/assets/logo/top/4.png">
        </div>
      </div>
      <!-- 第一行 - 向左滚动 -->
      <div class="relative mb-12 overflow-hidden rounded-lg">
        <div class="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-12"></div>
        <div class="flex gap-8 w-fit animate-scroll-left">
          <div v-for="(partner, idx) in partners" :key="`row1-${idx}`" class="flex-shrink-0">
            <div
                class="flex w-200px h-75px items-center justify-center  rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <img :alt="partner.name" :src="partner.logo"
                   class=" object-contain max-sm:w-full w-50% h-50% group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"/>
            </div>
          </div>
          <!-- 无缝循环 -->
          <div v-for="(partner, idx) in partners" :key="`row1-repeat-${idx}`" class="flex-shrink-0">
            <div
                class="flex w-200px h-75px items-center justify-center  rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <img :alt="partner.name" :src="partner.logo"
                   class="object-contain max-sm:w-full w-50% h-50%  group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"/>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二行 - 向右滚动 -->
      <div class="relative overflow-hidden rounded-lg">
        <div class="flex gap-8 w-fit animate-scroll-right">
          <div v-for="(partner, idx) in partners" :key="`row2-${idx}`" class="flex-shrink-0">
            <div
                class="w-200px h-75px flex  items-center justify-center  rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <img :alt="partner.name" :src="partner.logo"
                   class="w-50% h-50% max-sm:w-full object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"/>
            </div>
          </div>
          <!-- 无缝循环 -->
          <div v-for="(partner, idx) in partners" :key="`row2-repeat-${idx}`" class="flex-shrink-0">
            <div
                class="w-200px h-75px  flex items-center justify-center  rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <img :alt="partner.name" :src="partner.logo"
                   class="w-50% h-50% max-sm:w-full  object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divider from "@/components/Divider.vue";
import {ref} from 'vue'

const color = '#D4D4D4'

const partners = ref([
  {name: 'Partner 1', logo: new URL('@/assets/logo/1.png', import.meta.url).href},
  {name: 'Partner 2', logo: new URL('@/assets/logo/2.png', import.meta.url).href},
  {name: 'Partner 3', logo: new URL('@/assets/logo/3.png', import.meta.url).href},
  {name: 'Partner 4', logo: new URL('@/assets/logo/4.png', import.meta.url).href},
  {name: 'Partner 5', logo: new URL('@/assets/logo/5.png', import.meta.url).href},
  {name: 'Partner 6', logo: new URL('@/assets/logo/6.png', import.meta.url).href},
  {name: 'Partner 7', logo: new URL('@/assets/logo/7.png', import.meta.url).href},
  {name: 'Partner 8', logo: new URL('@/assets/logo/8.png', import.meta.url).href},
  {name: 'Partner 9', logo: new URL('@/assets/logo/9.png', import.meta.url).href},
  {name: 'Partner 10', logo: new URL('@/assets/logo/10.png', import.meta.url).href},
  {name: 'Partner 11', logo: new URL('@/assets/logo/11.png', import.meta.url).href},
  {name: 'Partner 12', logo: new URL('@/assets/logo/12.png', import.meta.url).href},
  {name: 'Partner 13', logo: new URL('@/assets/logo/13.png', import.meta.url).href},
  {name: 'Partner 14', logo: new URL('@/assets/logo/14.png', import.meta.url).href},
  {name: 'Partner 15', logo: new URL('@/assets/logo/15.png', import.meta.url).href},
  {name: 'Partner 16', logo: new URL('@/assets/logo/16.png', import.meta.url).href},
  {name: 'Partner 17', logo: new URL('@/assets/logo/17.png', import.meta.url).href},
  {name: 'Partner 18', logo: new URL('@/assets/logo/18.png', import.meta.url).href},
  {name: 'Partner 19', logo: new URL('@/assets/logo/19.png', import.meta.url).href},
  {name: 'Partner 20', logo: new URL('@/assets/logo/20.png', import.meta.url).href},
  {name: 'Partner 21', logo: new URL('@/assets/logo/21.png', import.meta.url).href},
  {name: 'Partner 22', logo: new URL('@/assets/logo/22.png', import.meta.url).href},
  {name: 'Partner 23', logo: new URL('@/assets/logo/23.png', import.meta.url).href},

])
</script>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 40s linear infinite;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}
</style>
