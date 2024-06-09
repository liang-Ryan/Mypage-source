<script setup>
defineProps({
  title: String,
  subtitle: String,
  content: Object
})
</script>

<template>
  <!-- 标题 -->
  <h1 class="title" :id="title" v-if="title">{{ title }}</h1>
  <h2 class="subtitle" :id="subtitle" v-if="typeof subtitle === 'string'">{{ subtitle }}</h2>

  <!-- 正文 -->
  <div v-for="(item, key) in content" :key="key">
    <div class="content" v-if="typeof key === 'number'">
      <span v-if="typeof item === 'string'" v-html="item"></span>
      <Tables v-else :content="item"></Tables>
    </div>
    <Paragraph v-else :subtitle="key" :content="item"></Paragraph>
  </div>
</template>

<style lang="less" scoped>
.title {
  font-size: 20px;
  border-bottom: 1px black solid;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 10px;
}

.content {
  font-size: 14px;
}
</style>
