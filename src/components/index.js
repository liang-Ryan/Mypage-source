import Aside from './Aside.vue'
import Nav from './Nav.vue'

// =============================
// 组件全局注册
// =============================

export const components = {
  install(app) {
    // app.component('组件的全局注册名', '被注册组件名（导入组件的对象名）')
    app.component('Aside', Aside)
    app.component('Nav', Nav)
  }
}
