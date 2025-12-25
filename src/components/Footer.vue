<script setup>
import {footer, go} from "@/api/index.js";
import {onMounted, ref} from "vue";

const info = ref({})

onMounted(() => {
  footer().then(res => {
    console.log(res.data)
    info.value = res.data;
  })
})
</script>

<template>
  <div class="bg-#000000 px-10 py-5">
    <div>
      <div class="flex max-sm:flex-col justify-between gap-4 lg:px-40">
        <div class="lg:w-50% flex flex-col gap-4 justify-center ">
          <div>
            <img class="w-200px" src="@/assets/logo-f.png">
          </div>
          <div class="text-#989795 flex max-sm:text-10px items-center gap-2">
            <img class="inline-block max-sm:hidden" src="@/assets/u152.png">
            We develop AI-driven game tech, decentralized tools, and blockchain interactions, supporting global
            developers, players, and creators.
          </div>
          <div  class="flex gap-4">
            <div @click="go(item)" :key="index" class="cursor-pointer" v-for="(item,index) in info.social">
              <img  class="w-20px" alt="" :src="item.img_src" />
            </div>
          </div>
        </div>
        <div class="lg:w-50% lg:ml-40  max-sm:text-10px lg:mt-50px  ">
          <div class="text-#B1B0AE">
            About
          </div>
          <div class="grid grid-cols-2 mt-2 gap-2">
            <div @click="go(item)" :key="index" class="text-#605F5C font-bold cursor-pointer hover:text-white" v-for="(item,index) in info.footer">
              {{item.text}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
