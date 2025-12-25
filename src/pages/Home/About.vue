<script setup>

import Divider from "@/components/Divider.vue";
</script>

<template>
  <div class="bg-#FFFFFF">
    <div class="max-w-7xl ma">
      <div class="flex p-10 max-sm:flex-col items-center gap-6 justify-between">
        <el-card class="lg:w-1/2  bg-white" shadow="hover">
          <template #header>
            <div>
              <img src="@/assets/about/3.png">
            </div>
            <div class="text-#222328 font-bold lg:text-30px text-20px">
              About Us
            </div>

          </template>
          <div class="text-#626262 max-sm:text-12px">
            <p>
              SmileCobra Studio is a next-generation Web3 gaming and AI innovation studio, dedicated to building
              scalable, creator-driven digital worlds.
            </p>
            <p class="mt-4">
              We focus on developing AI-enhanced game technologies, decentralized content-creation tools, and
              blockchain-native interactive experiences, empowering developers, players, and creators around the world.
            </p>
            <p class="mt-4">
              Our team has deep expertise in AI systems, game-engine tooling, and multi-chain Web3 infrastructure,
              enabling us to deliver high-performance products for mass adoption—from lightweight mini-apps to fully
              on-chain gaming ecosystems.
            </p>
          </div>
          <el-divider class="w-120px mt-40px"></el-divider>
        </el-card>
        <el-card class="lg:w-1/2 " shadow="hover">
          <template #header>
            <div >
              <img src="@/assets/about/2.png">
            </div>
            <div class="text-#222328 mt-20px font-bold lg:text-30px text-20px">
              Our Vision
            </div>

          </template>
          <div class="text-#626262 max-sm:text-12px line-height-7.2">
            <p>
              Rooted in the principles of open creativity and creator ownership,SmileCobra Studio aims to redefine how
              the next generation of AI + Web3 games are built, distributed, and monetized.
            </p>
            <p class="mt-4">
              We are shaping a future where:
            </p>
            <ul>
              <li>
                Everyone can become a game creator
              </li>
              <li>
                AI unlocks limitless creative possibilities
              </li>
              <li>
                Web3 games reach global mainstream adoption
              </li>
              <li>
                Community-driven virtual worlds evolve autonomously
              </li>
            </ul>
          </div>
          <el-divider class="w-120px mt-40px"></el-divider>

        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
