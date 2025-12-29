<script setup>
import { ElLink, ElIcon } from 'element-plus'
import { CircleCheckFilled, CopyDocument } from '@element-plus/icons-vue'
import { UseClipboard } from '@vueuse/components'
import {formatTimestamp, getValueByPath} from "@/util/index.js";
import {computed} from "vue";

const props = defineProps(
  {
    row: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  }
)

const cellValue = computed(() =>
    getValueByPath(props.row, props.item.prop)
)

const link = computed(() =>
    props.item.isLink ? props.item.linkCell?.(props.row) : ''
)
const displayValue = computed(() =>
    props.item.time ? formatTimestamp(cellValue.value) : cellValue.value
)
</script>

<template>
  <div class="flex items-center gap-2 w-full">
    <div class="overflow-hidden">
      <el-link
          v-if="item.isLink"
          type="primary"
          :href="link"
          @click.prevent="$emit('go', link)"
      >
        <span class="truncate max-w-[300px]">{{ cellValue }}</span>
      </el-link>

      <span v-else class="truncate max-w-[200px]">{{ cellValue }}</span>
    </div>

    <UseClipboard
        v-if="item.isCopy && cellValue"
        :source="cellValue"
        v-slot="{ copy, copied }"
    >
      <el-icon
          :size="16"
          class="cursor-pointer"
          @click="copy()"
      >
        <CircleCheckFilled class="text-blue-500" v-if="copied" />
        <CopyDocument v-else />
      </el-icon>
    </UseClipboard>
  </div>
</template>
