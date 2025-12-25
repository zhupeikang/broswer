<script setup>
import Divider from "@/components/Divider.vue";
import {ref} from "vue";

const list = ref(
    [
      {
        img: new URL('@/assets/whatwedo/1.png', import.meta.url).href,
        title: 'AI-Powered Game Development',
        desc: 'We build advanced AI systems capable of generating art assets, gameplay logic, level designs, and automated content pipelines—turning creative ideas into playable game experiences with unprecedented speed.'
      },
      {
        img: new URL('@/assets/whatwedo/2.png', import.meta.url).href,
        title: 'Web3-Native Creation Tools',
        desc: 'Through no-code and low-code creation tools, we enable anyone to easily create, own, and distribute game content and digital assets (UGA), accelerating the growth of user-generated economies across gaming and social ecosystems.'


      },
      {
        img: new URL('@/assets/whatwedo/3.png', import.meta.url).href,
        title: 'On-Chain Gaming Infrastructure',
        desc: 'We provide modular, multi-chain infrastructure supporting asset minting, ownership verification, trading, and cross-platform player identity systems—designed for scalable on-chain gaming experiences.'
      },
      {
        img: new URL('@/assets/whatwedo/4.png', import.meta.url).href,
        title: 'Creator-Driven Ecosystems',
        desc: 'We are building a new generation of ecosystems where creators, communities, and developers collaborate, co-create, and generate value within a decentralized framework—fueling sustainable growth of game worlds.'
      }
    ]
)

const color = '#D4D4D4'
</script>

<template>
  <div class="bg-#1A1A1A  lg:p-20  p-10  flex flex-col  items-center">
    <div class="text-#D4D4D4 font-bold flex flex-col items-center gap-2 text-40px">
      What we do
      <Divider :color="color"></Divider>
    </div>
    <div class="ma max-w-7xl mt-50px">
      <div
          v-for="(item, index) in list"
          :key="index"
          :class="[
          'flex max-sm:flex-col items-center mb-10 gap-4',
        index % 2 === 1 ? 'flex-row-reverse' : ''
      ]"
      >
        <div class="lg:w-50%">
          <img :src="item.img" alt="" class="w-full rounded-md">
        </div>

        <div :class="index % 2 === 1 ? 'items-end' : ''" class="lg:w-50% flex-col flex lg:gap-4 ">
          <div class="text-#4FB331 lg:text-24px font-bold mb-2">
            {{ item.title }}
          </div>
          <Divider :height="'2px'"  color="#C2C2C2"></Divider>
          <div class="text-#868686 max-sm:text-12px max-sm:mt-2">
            {{ item.desc }}
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<style scoped>

</style>
