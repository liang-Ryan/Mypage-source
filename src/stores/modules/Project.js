import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', () => {
  // =============================
  // 项目目录
  // =============================

  const projectList = ref([
    { name: '移动端智慧商城项目', url: '/SmartShopping/index.html' },
    { name: '大事件文章项目', url: '/BigEventManagement/index.html' },
    { name: '小兔鲜电商项目', url: '/RabbitShopping/index.html' },
    {
      name: 'GBFwiki贺图汇总',
      externalUrl: 'https://gbf.huijiwiki.com/wiki/%E8%B4%BA%E5%9B%BE%E6%B1%87%E6%80%BB'
    }
  ])

  //=============================

  return {
    // 笔记目录
    projectList
  }
})
