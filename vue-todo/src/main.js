import Vue from 'vue'
import app from './components/app.vue'
import './index.css'

new Vue({
  el:'#app',
  /*components:{
    app
  },
  template: '<app/>'*/
  render: h => h(app)
  /*
  render: (createElement)=>{
     return createElement(app);
  }
  */
})
