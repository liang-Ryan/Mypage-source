<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/stores'

// =============================
// store
// =============================

const noteStore = useNoteStore()

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
  <div ref="navContent" class="nav-content" @wheel="scrollEvent($event.deltaY)">
    <div
      class="nav-item"
      :class="{ active: $route.path === `/note/${key}` }"
      v-for="(item, key) in noteStore.noteList"
      :key="key"
      @click="$router.push(`/note/${key}`)"
    >
      {{ key }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-content {
  height: 30px;
  padding: 0 5px;
  border-radius: 10px;
  background-color: rgb(255, 192, 74);

  display: flex;
  align-items: center;
  gap: 10px;

  overflow: auto;
  scrollbar-width: none;

  .nav-item {
    min-width: 80px;
    border-radius: 5px;
    background-color: rgba(255, 235, 205, 0.5);

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
    background-color: rgb(117, 191, 255);
  }
}
</style>
