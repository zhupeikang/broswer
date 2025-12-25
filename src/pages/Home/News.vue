<script setup>
import Divider from "@/components/Divider.vue";
import {ref} from "vue";

const list = ref(
    [
      {
        title: 'AI-Powered Game Development',
        desc: 'We build advanced AI systems capable of generating art assets, gameplay logic, level designs, and automated content pipelines—turning creative ideas into playable game experiences with unprecedented speed.'
      },
      {
        title: 'Web3-Native Creation Tools',
        desc: 'Through no-code and low-code creation tools, we enable anyone to easily create, own, and distribute game content and digital assets (UGA), accelerating the growth of user-generated economies across gaming and social ecosystems.'


      },
      {
        title: 'On-Chain Gaming Infrastructure',
        desc: 'We provide modular, multi-chain infrastructure supporting asset minting, ownership verification, trading, and cross-platform player identity systems—designed for scalable on-chain gaming experiences.'
      }
    ]
)

const color = '#4FB331'
const cardHovered = ref([false, false, false])
const cards = [
  {
    img: new URL('@/assets/news/news.png', import.meta.url).href,
    title: 'SmileCobra与香港恺英达成独家战略合作，共同构建Web3游戏可持续发展经济系统',
    description: 'https://www.theblockbeats.info/flash/253187',
    category: '科技',
    date: '2024-06-12 14:57',
  },
  {
    img: new URL('@/assets/news/news.png', import.meta.url).href,

    title: '恺英网络与SmileCobra Studio基于游戏AGI达成合作',
    description: 'https://www.theblockbeats.info/flash/26886',
    category: '商业',
    date: '2024-12-03 20:0',
  },
  {
    img: new URL('@/assets/news/news.png', import.meta.url).href,
    title: 'SmileCobra Studio、香港恺英（Kingnet Capital HK）与Cocos Studio达成合作，将共同推动Web3小游戏发展',
    description: 'https://www.theblockbeats.info/flash/268861',
    category: '趋势',
    date: '2024-11-02 15:08',
  }
]
const goUrl=({description})=>{
  window.open(description, '_blank');
}

const more=()=>{
  window.open('https://x.com/SmileCobra_GAME','_blank')
}
</script>

<template>
  <div id="news" class="bg-#F4F4F4 lg:p-20  p-10  flex flex-col  items-center">
    <div class="text-black font-bold flex flex-col items-center gap-2 text-40px">
      News
      <Divider :color="color"></Divider>
    </div>
    <div class="ma max-w-7xl mt-50px w-full">
      <div class="w-full lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-4 grid">
        <el-card v-for="(item,index) in cards" class="cursor-pointer" shadow="hover">
          <div class="w-full flex justify-center items-center gap-2">
            <img :src="item.img" alt="" class="w-280px rounded-md"/>
          </div>
          <template #footer>
            <div class="line-clamp-2 max-sm:text-12px">
              {{item.title}}
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <span class="text-xs text-slate-500 dark:text-slate-400">{{ item.date }}</span>
              <!-- 阅读按钮 -->
              <div
                  @click="goUrl(item)"
                  class="inline-flex text-#0033cc items-center gap-2 lg:text-sm text-10px font-semibold text-#4FB331 dark:text-blue-400 hover:text-#4FB331 dark:hover:text-blue-300 transition-all duration-300"
                  @mouseenter="cardHovered[index] = true"
                  @mouseleave="cardHovered[index] = false"
              >
                Read More
                <span :style="{ transform: `translateX(${cardHovered[index] ? 4 : 0}px)` }"
                      class="transition-transform duration-300">→</span>
              </div>
            </div>
          </template>
        </el-card>
      </div>
    </div>
    <div @click="more" class="mt-50px more  w-160px py-1 ">
      more
    </div>

  </div>
</template>

<style scoped>
.more{
  border: 1px solid #4FB331 ;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover{
    background: #4FB331;
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div.group {
  animation: slideInUp 0.6s ease-out forwards;
}
</style>
