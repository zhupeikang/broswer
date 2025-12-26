<template>
  <component
      v-if="isComponent"
      :is="item.rendCell"
      :row="row"
      :item="item"
      @go="goTo"
  />
  <component
      v-else-if="isFunction"
      :is="renderCustomCell()"
  />
  <div v-else>
    {{ getValueByPath(row, item.prop) }}
  </div>
</template>

<script setup>
import {router} from "@/router/index.js";
import {getValueByPath} from '@/util/index.js' // lodash.get 类似函数
import {computed} from 'vue'

const goTo = (path) => {
  router.push(path)
}
const props = defineProps({
  row: { type: Object, required: true },
  item: { type: Object, required: true }
})


// 判断 rendCell 是组件还是函数
const isComponent = computed(() => {
  return typeof props.item.rendCell === 'object' ||
      (typeof props.item.rendCell === 'function' && props.item.rendCell.__vccOpts)
})

const isFunction = computed(() => typeof props.item.rendCell === 'function' && !isComponent.value)

// 如果是函数，调用返回 VNode
const renderCustomCell = () => {
  if (isFunction.value) {
    return props.item.rendCell(props.row)
  }
  return 'div'
}
</script>
