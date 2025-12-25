<script setup>
const props=defineProps(['color','height'])
</script>

<template>
<div :style="{backgroundColor:props.color,height:props.height} " class="w-80px h-6px    rounded-md" >
</div>
</template>

<style scoped>

</style>
