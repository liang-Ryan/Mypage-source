<script setup>
import { useNoteStore } from '@/stores'

// =============================
// store
// =============================

const noteStore = useNoteStore()

// =============================
</script>

<template>
  <div class="nav-content">
    <div class="return" @click="$router.push('/')">← 返回首页</div>
    <div class="nav-item">
      <div
        class="nav-item-content"
        v-for="item in noteStore.noteList"
        :key="item.name"
        @click="$router.push(`/note/${item.url}`)"
      >
        <span>
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-content {
  background-color: sandybrown;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 10px;
  display: flex;

  position: sticky;
  top: 0;

  .return {
    width: 200px;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 14px;

    &:hover {
      cursor: pointer;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;

    .nav-item-content {
      width: 100px;
      height: 20px;
      padding: 10px;
      border-radius: 5px;
      background-color: rgba(255, 235, 205, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 1px gray inset;
        > span {
          transform: scale(95%, 95%);
        }
      }
    }
  }
}
</style>
