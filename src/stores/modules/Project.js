import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', () => {
  // =============================
  // 项目目录
  // =============================

  const projectList = ref([
    { name: '移动端智慧商城项目', url: 'smart-shopping' },
    { name: '大事件文章项目', url: 'big-event-management' },
    { name: '小兔鲜电商项目', url: 'rabbit-shopping' }
  ])

  //=============================

  return {
    // 笔记目录
    projectList
  }
})