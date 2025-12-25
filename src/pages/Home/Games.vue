<script setup>
import {gameList} from "@/api/index.js";
import Divider from "@/components/Divider.vue";
import {router} from "@/router/index.js";
import {onMounted, ref} from "vue";

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

const color = '#D5D4D1'
const cardHovered = ref([false, false, false])
const cards = [
  {
    img: new URL('@/assets/whatwedo/1.png', import.meta.url).href,
    title: '人工智能如何改变工作场景',
    description: '探索 AI 技术在企业中的应用，如何提高工作效率和创新能力',
    category: '科技',
    date: '2024年11月24日',
  },
  {
    img: new URL('@/assets/whatwedo/2.png', import.meta.url).href,

    title: '可持续发展成为商业新趋势',
    description: '越来越多的企业将环保和可持续发展纳入核心业务战略',
    category: '商业',
    date: '2024年11月23日',
  },
  {
    img: new URL('@/assets/whatwedo/3.png', import.meta.url).href,
    title: '数字化转型的成功案例分享',
    description: '了解企业如何通过数字化转型实现业务增长和竞争力提升',
    category: '趋势',
    date: '2024年11月22日',
  }
]
const List=ref([])
onMounted(()=>{
  gameList().then(res=>{
    List.value=res.data.game
  })
})
const go=({click_params, click_event})=>{
  if (!click_params) return
  const {url} = click_params
  switch (click_event) {
    case 'link':
      window.open(url)
      break;
    case '_self':
    case 'push':
      router.push(url)
      break;
    default:
      break;
  }
}
const more=()=>{
  window.open('https://xmint.games/game','_blank')
}
</script>

<template>
  <div class="bg-#1A1A1A lg:p-20 p-10  flex flex-col  items-center">
    <div class=" text-white font-bold flex flex-col items-center gap-2 text-40px">
      GAMES
      <Divider :color="color"></Divider>
    </div>
    <div class="ma max-w-7xl mt-50px w-full">
      <div class="w-full lg:grid-cols-3 lg:gap-20 gap-4 grid">
        <div v-for="(item,index) in List.slice(0,3)" class="cursor-pointer" shadow="hover">
          <div class="w-full flex-col flex justify-center items-center gap-2">
            <img :src="item.img_src" alt="" class="lg:w-400px w-300px h-200px object-cover rounded-md"/>
            <div @click="go(item)" class=" bg-#4FB331 mt-10 px-10 py-2 text-white font-bold  rounded-lg">PLAY</div>
          </div>
        </div>
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
  color:#4FB331 ;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover{
    background: black
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
