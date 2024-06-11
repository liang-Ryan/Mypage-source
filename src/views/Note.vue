<script setup>
import { computed } from 'vue'
import { useNoteStore } from '@/stores'
import { useRoute } from 'vue-router'

// =============================
// store
// =============================

const noteStore = useNoteStore()

// =============================
// computed
// =============================

const route = useRoute()

const book = computed(() => {
  return noteStore.noteList[route.query.book]
})

const note = computed(() => {
  return noteStore.noteList[route.query.book][route.query.note]
})

// =============================
</script>

<template>
  <div class="main-body">
    <Aside :titlelist="note"></Aside>

    <div class="main-content">
      <Nav :notelist="book" :notekey="$route.query.book"></Nav>
      <article>
        <Paragraph v-for="(item, key) in note" :key="key" :title="key" :content="item"></Paragraph>
      </article>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-body {
  padding: 30px 10px;
  display: flex;
  gap: 10px;

  .main-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow: auto;
    scrollbar-width: none;

    article {
      padding: 5px 20px;
      border-radius: 10px;
      background-color: rgba(255, 241, 222, 0.2);

      display: flex;
      flex-direction: column;
    }
  }
}
</style>
