<script setup>
defineProps({
  cell: [String, Object]
})
</script>

<template>
  <div v-for="item in cell" :key="item">
    <span v-if="typeof item === 'string'" v-html="item"></span>
    <Tables v-else :content="item"></Tables>
  </div>
</template>

<style scoped></style>
