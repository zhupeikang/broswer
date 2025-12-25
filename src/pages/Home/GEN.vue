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
  <div class="bg-#F4F4F4  lg:p-20 p-10   flex flex-col  items-center">
    <div class="ma max-w-7xl lg:mt-50px">
      <div class='flex max-sm:flex-col items-center mb-10 gap-4'>
        <div class="lg:w-50% text-#A0A0A0 flex  flex-col justify-center gap-4 items-center">
          <img alt="" class="lg:w-400px w-180px  rounded-md" src="@/assets/genleap.png">
          <span class="max-sm:text-12px text-18px lg:line-height-10!">
          GENLEAP is the first Web3 MMORPG game that combines global traditional cultures with the new AI era, creating an open world where players can freely explore and evolve to a high degree.
          </span>
        </div>
        <div class="lg:w-50% flex-col flex gap-4 items-start">
          <div class="lg:w-500px aspect-video ">
            <video controls autoplay class="w-full rounded-md" src="/video.mp4"></video>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class='flex max-sm:flex-col items-center mb-10 gap-4'>
        <img alt="" class="lg:w-400px w-180px lg:hidden rounded-md" src="@/assets/kingnetAi.png">
        <div class="lg:w-50%   flex-col flex gap-4 items-center">
          <div class="lg:w-400px w-180px  ">
            <img alt="" class="w-full rounded-md" src="@/assets/Kingnet-l.png">
          </div>
        </div>
        <div class="lg:w-50%  text-#A0A0A0 flex-col flex gap-4 items-center">
          <img alt="" class="max-sm:hidden  lg:w-400px w-180px rounded-md" src="@/assets/kingnetAi.png">
          <span class="max-sm:text-12px text-18px lg:line-height-12! ">
          Driven by advanced AI models, Kingnet AI generates high-quality game assets—including characters, animations, environments, and dialogues—based on textual prompts and gameplay needs. Visual style and logic coherence are preserved across all outputs.
          </span>
        </div>

      </div>
      <el-divider></el-divider>
      <div class='flex max-sm:flex-col  items-center mb-10 gap-4 '>
        <div class="lg:w-50%  lg:text-50px text-22px flex flex-col font-bold">
          GETTING GAMES IS EASY
          <div class="font-bold flex items-center text-14px lg:text-30px">
            ALL YOU NEED IS
            <img class="lg:w-200px w-160px ml-4" src="@/assets/xmint.png">
          </div>
          <div class="grid grid-cols-3 gap-4 lg:mt-50px mt-20px">
            <div class="flex flex-col place-items-center gap-2">
              <img class="lg:w-100px w-40px h-40px lg:h-100px" src="@/assets/gen/1.png">
              <div class="lg:text-18px text-12px  text-center text-#5B5B5B">
                Diverse Game Content
              </div>
            </div>
            <div class="flex flex-col place-items-center  place-content-center gap-2">
              <img class="lg:w-100px w-40px h-40px lg:h-100px" src="@/assets/gen/2.png">
              <div class="lg:text-18px text-12px text-center text-#5B5B5B">
                Secure Transaction
                Environment
              </div>
            </div>
            <div class="flex flex-col place-items-center gap-2">
              <img class="lg:w-100px w-40px h-40px lg:h-100px" src="@/assets/gen/3.png">
              <div class="lg:text-18px text-12px text-center text-#5B5B5B">
                Open
                Ecosystem
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-50%  flex-col flex gap-4 items-start">
            <img class="lg:w-full w-180px" src="@/assets/sj.png">
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>
