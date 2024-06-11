<script setup>
import { ref } from 'vue'

// =============================
// props
// =============================

defineProps({
  notelist: Object,
  notekey: String
})

// =============================
// 滚轮事件
// =============================

const navContent = ref(null)
const scrollEvent = (deltaY) => {
  navContent.value.scrollLeft = navContent.value.scrollLeft + deltaY
}

// =============================
</script>

<template>
  <nav ref="navContent" @wheel.prevent="scrollEvent($event.deltaY)">
    <div
      class="nav-item"
      :class="{ active: $route.query.note === key }"
      v-for="(item, key) in notelist"
      :key="key"
      @click="$router.push(`/note?book=${notekey}&note=${key}`)"
    >
      {{ key }}
    </div>
  </nav>
</template>

<style lang="less" scoped>
nav {
  height: 30px;
  padding: 0 5px;
  border-radius: 10px;
  background-color: rgba(255, 241, 222, 0.2);

  display: flex;
  align-items: center;
  gap: 10px;

  overflow: auto;
  scrollbar-width: none;

  .nav-item {
    min-width: 80px;
    border-radius: 5px;
    background-color: rgba(4, 0, 255, 0.38);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    font-size: 13px;

    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px 1px gray inset;
    }
  }

  .active {
    background-color: rgba(255, 0, 0, 0.72);
  }
}
</style>
