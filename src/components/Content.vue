<script setup>
defineProps({
  content: [String, Object],
  intable: [Boolean],
  incell: [Boolean]
})
</script>

<template>
  <!-- 首次表格渲染 -->
  <div class="content" v-if="typeof content[0] === 'string' && typeof content[1] === 'object'">
    <span v-html="content[0]"></span>
    <Content :content="content[1]"></Content>
  </div>

  <!-- 单元格 嵌 表格 -->
  <div class="content" v-else-if="typeof content[0] === 'object' && typeof content[1] === 'object'">
    <table>
      <tr v-for="row in content" :key="row">
        <td v-for="cell in row" :key="cell">
          <span v-if="typeof cell === 'string'" v-html="cell"></span>
          <Content v-else :content="cell"></Content>
        </td>
      </tr>
    </table>
  </div>

  <!-- 单元格 嵌 表格+字符串 -->
  <div v-else-if="typeof content[0] === 'object' && typeof content[1] === 'string'">
    <div v-for="item in content" :key="item">
      <span v-if="typeof item === 'string'" v-html="item"></span>
      <table v-else>
        <tr v-for="row in item" :key="row">
          <td v-for="cell in row" :key="cell" v-html="cell"></td>
        </tr>
      </table>
    </div>
  </div>

  <!-- 字符串 -->
  <div class="content" v-else-if="typeof content[0] === 'string'" v-html="content"></div>
</template>

<style scoped></style>
