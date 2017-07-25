<template>
<!-- 鼠标enter-leave事件和over-out事件，前者是当鼠标在嵌套的div中移动时，不会触发，只有真正的离开后才会触发；后者是鼠标在嵌套div中，鼠标移动在父子之间频繁触发；开发中一般多用enter-leave -->
  <li @mouseenter='mouseToggle(true)' @mouseleave='mouseToggle(false)' :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model='todo.complete'/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show='isShow' @click='remove'>删除</button>
  </li>
</template>
<script>
  export default {
    props:{
      todo:Object,
      delTodo:Function,
      index:Number
    },
    data(){
      return {
        bgColor:'#fff',
        isShow:false
      }
    },
    methods:{
      mouseToggle(isDel){
        if(isDel){
          this.bgColor = '#eee'
          this.isShow = true
        }else{
          this.bgColor = '#fff'
          this.isShow = false
        }
      },
      remove(){
        // 解构赋值todo对象
        const {todo,delTodo,index} = this
        // 验证删除
        if(confirm(`确定删除${todo.title}吗？`)){
          this.delTodo(index)
        }
      }
    }
  }
</script>
<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
