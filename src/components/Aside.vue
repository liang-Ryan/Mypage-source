<script setup>
import { useNoteStore } from '@/stores'

// =============================
// store
// =============================

const noteStore = useNoteStore()

// =============================
</script>

<template>
  <aside>
    <div class="return" @click="$router.push('/')"><div class="return-button">返回首页</div></div>
    <div class="aside-content">
      <a
        class="aside-item"
        v-for="(item, key) in noteStore.noteList[$route.params.id]"
        :key="key"
        :href="'#' + key"
      >
        {{ key }}
      </a>
    </div>
  </aside>
</template>

<style lang="less" scoped>
aside {
  min-width: 130px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: sticky;
  left: 0;

  .return {
    height: 30px;
    padding: 0 5px;
    border-radius: 10px;
    background-color: rgb(255, 192, 74);

    display: flex;
    align-items: center;

    > .return-button {
      width: 100%;
      border-radius: 5px;
      background-color: rgba(255, 235, 205, 0.5);

      display: flex;
      justify-content: center;

      font-size: 13px;

      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 10px 1px gray inset;
      }
    }
  }

  .aside-content {
    padding: 10px 5px;
    border-radius: 10px;
    background-color: rgb(255, 241, 222);

    display: flex;
    flex-direction: column;
    gap: 10px;

    .aside-item {
      height: 30px;
      border-radius: 5px;
      background-color: rgb(245, 217, 181);

      display: flex;
      justify-content: center;
      align-items: center;

      color: black;
      text-decoration: none;

      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 10px 1px gray inset;
      }
    }
  }
}
</style>
