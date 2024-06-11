<script setup>
defineProps({
  cell: [String, Object]
})

// =============================
// 表格判断
// =============================

const isTable = (cell) => {
  for (let i = 0; i < cell.length; i++) {
    if (typeof cell[i] === 'string') {
      return false
    }
  }
  return true
}

// =============================
</script>

<template>
  <span v-if="typeof cell === 'string'" v-html="cell"></span>
  <Tables v-else-if="isTable(cell)" :content="cell"></Tables>
  <Cell v-else v-for="item in cell" :key="item" :cell="item"></Cell>
</template>

<style scoped></style>
