<script setup>
import { computed } from 'vue'

// =============================
// props
// =============================

const porps = defineProps({
  title: String,
  subtitle: String,
  content: Object
})

// =============================
// computed
// =============================

const isSubtitle = computed(() => {
  const temp = {}
  for (let key in porps.content) {
    if (isNaN(+key)) {
      temp[key] = porps.content[key]
    }
  }
  return temp
})

const notSubtitle = computed(() => {
  const temp = {}
  for (let key in porps.content) {
    if (!isNaN(+key)) {
      temp[key] = porps.content[key]
    }
  }

  if (Object.keys(temp).length > 0) {
    return temp
  }
  return ''
})

// =============================
</script>

<template>
  <section>
    <!-- 标题 -->
    <h1 class="title" :id="title" v-if="title">{{ title }}</h1>
    <h2 class="subtitle" :id="subtitle" v-if="subtitle">{{ subtitle }}</h2>

    <!-- 渲染子级标题内容 -->
    <Paragraph
      v-for="(item, key) in isSubtitle"
      :key="key"
      :subtitle="key"
      :content="item"
    ></Paragraph>

    <!-- 正文 -->
    <div v-if="notSubtitle" class="content">
      <Cell v-for="item in notSubtitle" :key="item" :cell="item"></Cell>
    </div>
  </section>
</template>

<style lang="less" scoped>
.title {
  font-size: 20px;
  border-bottom: 1px white solid;
}

.subtitle {
  font-size: 16px;
}

.content {
  font-size: 14px;
  padding-bottom: 20px;
}
</style>
