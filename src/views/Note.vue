<script setup>
import { useNoteStore } from '@/stores'

// =============================
// store
// =============================

const noteStore = useNoteStore()

// =============================
</script>

<template>
  <header></header>

  <div class="note-contain">
    <Aside></Aside>

    <div class="note-article">
      <Nav></Nav>
      <article>
        <Paragraph
          v-for="(item, key) in noteStore.noteList[$route.params.id]"
          :key="key"
          :title="key"
          :content="item"
        >
        </Paragraph>
      </article>
    </div>
  </div>
</template>

<style lang="less" scoped>
.note-contain {
  padding: 30px 10px;
  display: flex;
  gap: 10px;

  .note-article {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow: auto;
    scrollbar-width: none;

    article {
      padding: 5px 20px;
      border-radius: 10px;
      background-color: rgb(255, 241, 222);

      display: flex;
      flex-direction: column;
    }
  }
}
</style>
