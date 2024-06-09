<script setup>
defineProps({
  title: {
    type: String,
    require: false
  },
  subtitle: {
    type: [String, Number],
    require: false
  },
  content: [String, Object]
})
</script>

<template>
  <div>
    <h1 class="title" :id="title" v-if="title">{{ title }}</h1>
    <h2 class="subtitle" :id="subtitle" v-if="typeof subtitle === 'string'">{{ subtitle }}</h2>

    <div v-for="(item, key) in content" :key="key">
      <Content class="content" v-if="typeof key === 'number'" :content="content"></Content>
      <Paragraph :subtitle="key" :content="item" v-else></Paragraph>
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
