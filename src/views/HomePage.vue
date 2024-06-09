<script setup>
import { useNoteStore } from '@/stores'
import { useProjectStore } from '@/stores/modules/Project'

// =============================
// store
// =============================

const noteStore = useNoteStore()
const projectStore = useProjectStore()

// =============================
// 项目页面跳转
// =============================

const changeUrl = (url) => {
  window.location.href = url
}

// =============================
</script>

<template>
  <header></header>
  <div class="home-page-content">
    <div class="home-item">
      <div class="home-item-header">个人笔记</div>
      <div class="home-item-content">
        <div
          class="content-item"
          v-for="(item, key) in noteStore.noteList"
          :key="key"
          @click="$router.push(`/note/${key}`)"
        >
          <span>{{ key }}</span>
        </div>
        <!-- <div id="add" class="content-item"><span>添加新笔记</span></div> -->
      </div>
    </div>
    <div class="home-item">
      <div class="home-item-header">练习作品</div>
      <div class="home-item-content">
        <a
          class="content-item"
          v-for="(item, key) in projectStore.projectList"
          :key="key"
          @click="changeUrl(item.url)"
        >
          <span>{{ key }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-page-content {
  display: flex;
  gap: 100px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .home-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 15px;

    .home-item-header {
      width: 200px;
      height: 60px;
      background-color: blanchedalmond;
      border: 3px solid bisque;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .home-item-content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .content-item {
        width: 200px;
        height: 30px;
        background-color: antiquewhite;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;

        &:hover {
          cursor: pointer;
          box-shadow: 0px 0px 10px 1px gray inset;
          > span {
            transform: scale(95%, 95%);
          }
        }
      }

      #add:hover {
        cursor: not-allowed;
      }
    }
  }
}
</style>
