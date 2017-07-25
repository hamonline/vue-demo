import Vue from 'vue'
//ajax请求包 
import VueResource from 'vue-resource'
import app from './components/app.vue'

// Vue.use()引入该对象
Vue.use(VueResource) // 背后给所有的vm和组件对象添加了一个属性: $http

new Vue({
	el:'#app',
	render:h => h(app)
})
