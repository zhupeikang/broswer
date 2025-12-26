<script setup>

import {CircleCheckFilled, CopyDocument} from "@element-plus/icons-vue";
import {UseClipboard} from "@vueuse/components";
import {ElIcon} from "element-plus";
const props=defineProps({
  cellValue: {
    required: true
  }
})
console.log(props)
</script>


<template>

  <UseClipboard
      v-if="cellValue"
      :source="cellValue"
      v-slot="{ copy, copied }"
  >
    <div class="flex gap-2 items-center">
      <span class="truncate max-w-[200px]">{{ cellValue }}</span>
      <el-icon
          :size="16"
          class="cursor-pointer text-gray-500 hover:text-blue-500"
          @click.stop="copy()"
      >
        <CircleCheckFilled class="text-blue-500" v-if="copied" />
        <CopyDocument v-else />
      </el-icon>
    </div>
  </UseClipboard>

</template>

<style scoped>

</style>
