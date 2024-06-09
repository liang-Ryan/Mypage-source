<script setup>
defineProps({
  title: String,
  subtitle: String,
  content: [String, Object]
})
</script>

<template>
  <div>
    <!-- 标题 -->
    <h1 class="title" :id="title" v-if="title">{{ title }}</h1>
    <h2 class="subtitle" :id="subtitle" v-if="typeof subtitle === 'string'">{{ subtitle }}</h2>

    <!-- 正文 -->
    <div v-for="(item, key) in content" :key="key">
      <div v-if="typeof key === 'number'">
        <span v-if="typeof item === 'string'" v-html="item"></span>
        <Tables class="content" v-else :content="item"></Tables>
      </div>
      <Paragraph v-else :subtitle="key" :content="item"></Paragraph>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  font-size: 20px;
  border-bottom: 1px black solid;
}

.content {
  font-size: 14px;

  .subtitle {
    font-size: 16px;
    margin: 25px 0;
  }
}
</style>
