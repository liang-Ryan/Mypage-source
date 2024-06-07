import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('NoteStore', () => {
  // =============================
  // 笔记目录
  // =============================

  const noteList = ref([
    { name: 'git', url: 'git', content: {} },
    { name: '前端', url: 'html' },
    { name: 'lua', url: 'lua' }
  ])

  // =============================

  return {
    // 笔记目录
    noteList
  }
})
