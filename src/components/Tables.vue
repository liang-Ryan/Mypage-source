<script setup>
defineProps({
  content: Object
})
</script>

<template>
  <!-- 渲染表格 / 单元格 嵌 表格 -->
  <div class="content">
    <table>
      <tr v-for="row in content" :key="row">
        <td v-for="cell in row" :key="cell">
          <span v-if="typeof cell === 'string'" v-html="cell"></span>
          <Cell v-else :cell="cell"></Cell>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
