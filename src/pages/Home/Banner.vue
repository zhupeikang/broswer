<script setup>

</script>

<template>
  <div>
    <div class="w-full h-screen bg items-center justify-center flex flex-col">
      <div>
        <img class="w-200px" src="@/assets/banner.png">
      </div>
      <div class="lg:text-100px text-30px text font-bold">
        <p class="" data-text="SmileCobra Studio">
          SmileCobra Studio
        </p>
      </div>
      <div class="text-#E4E4E4 text-center font-bold lg:text-30px">
          Is dedicated to building a creator-driven
        <p class="text-#E4E4E4 font-bold lg:text-30px">
          Web3 Gaming and AI innovation studio
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background:   rgba(0, 0, 0, 0.4) url("/1.gif") no-repeat center center;
  background-size: cover;
  position: relative;
  background-blend-mode: multiply; /* 或 multiply */

}
//.bg::after {
//  content: "";
//  position: absolute;
//  inset: 0;
//  background: rgba(0, 0, 0, 0.4); /* 0.0 透明 → 1.0 全黑 */
//  pointer-events: none;
//}
.text {
  p {
    position: relative;
    margin: auto;
    word-spacing: 0.2em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    color: transparent;
    background-color: #E86A2B;
    background-clip: text;
    font-weight: bold;
  }

  p::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    font-weight: bold;

    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, #DE1C22 11rem, transparent 11.15rem, transparent 15rem, #EE8B31 20rem, transparent 25rem, transparent 27rem,#4FB331 32rem, white 33rem, rgba(255, 255, 255, 0.3) 33.15rem, transparent 38rem, transparent 40rem, rgba(255, 255, 255, 0.3) 45rem, transparent 50rem, transparent 100%);
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
  }

  @keyframes shine {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -190% 0;
    }
  }
}
</style>
