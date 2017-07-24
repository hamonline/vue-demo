// 入口js文件
import Vue from 'vue'
// import app from './components/app';//两种写法都可以
import app from './components/app.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    app
  },
  template: '<app/>'
})
