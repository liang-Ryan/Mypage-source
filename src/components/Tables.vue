<script setup>
defineProps({
  content: Object
})
</script>

<template>
  <!-- 渲染表格 / 单元格 嵌 表格 -->
  <table>
    <tr v-for="row in content" :key="row">
      <td v-for="cell in row" :key="cell">
        <Cell :cell="cell"></Cell>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
