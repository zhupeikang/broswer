<script setup>

import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import About from "@/pages/Home/About.vue";
import Banner from "@/pages/Home/Banner.vue";
import Games from "@/pages/Home/Games.vue";
import GEN from "@/pages/Home/GEN.vue";
import News from "@/pages/Home/News.vue";
import Scrool from "@/pages/Home/Scrool.vue";
import WhatWeDo from "@/pages/Home/WhatWeDo.vue";
</script>

<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <WhatWeDo></WhatWeDo>
    <News></News>
    <Games></Games>
    <GEN></GEN>
    <About></About>
    <Scrool></Scrool>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
