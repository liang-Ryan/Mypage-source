import Aside from './Aside.vue'
import Nav from './Nav.vue'
import Paragraph from './Paragraph.vue'

import Tables from './Tables.vue'
import Cell from './Cell.vue'

// =============================
// 组件全局注册
// =============================

export const components = {
  install(app) {
    // app.component('组件的全局注册名', '被注册组件名（导入组件的对象名）')
    app.component('Aside', Aside)
    app.component('Nav', Nav)
    app.component('Paragraph', Paragraph)
    app.component('Tables', Tables)
    app.component('Cell', Cell)
  }
}
