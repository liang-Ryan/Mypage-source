<script setup>
defineProps({
  cell: Object
})
</script>

<template>
  <!-- 单元格 渲染 正文/表格 判断 -->
  <div v-for="item in cell" :key="item">
    <span v-if="typeof item === 'string'" v-html="item"></span>
    <Tables v-else :content="item"></Tables>
  </div>
</template>

<style scoped></style>
