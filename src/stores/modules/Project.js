import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', () => {
  // =============================
  // 项目目录
  // =============================

  const projectList = ref({
    移动端智慧商城项目: { url: 'https://github.com/liang-Ryan/smart-shopping' },
    大事件文章项目: { url: 'https://github.com/liang-Ryan/big-event-management' },
    小兔鲜电商项目: { url: 'https://github.com/liang-Ryan/rabbit-shopping' },
    GBFwiki贺图汇总: {
      url: 'https://gbf.huijiwiki.com/wiki/%E8%B4%BA%E5%9B%BE%E6%B1%87%E6%80%BB'
    },
    个人笔记源码: {
      url: 'https://github.com/liang-Ryan/Mypage-source'
    }
  })

  //=============================

  return {
    // 笔记目录
    projectList
  }
})
