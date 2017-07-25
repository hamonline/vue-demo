<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <list :todos="todos" :del-todo='delTodo'></list>
      <todo-footer :todos='todos' :remove-completed='removeCompleted' :select-all='selectAll'></todo-footer>
    </div>
  </div>
</template>
<script>
  import header from './header.vue'
  import footer from './footer.vue'
  import list from './list.vue'
  import localStorageUtil from '../util/localStorageUtil'

  export default {
    data () {
      return {
        todos: [
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:false},
          {title:'打豆豆',complete:false},

        ]
      }
    },
    created(){
      // 从local中读取
      this.todos = localStorageUtil.getTodos()
    },
    methods:{
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      delTodo (index) {
        this.todos.splice(index,1)
      },
      removeCompleted(){
        // 过滤数组  显示过滤后的数组列表 留下未完成的选项
        /*this.todos = this.todos.filter((todo,index)=>{
          retun !todo.complete
        })*/
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAll(isSelect){
        // 遍历数组
        this.todos.forEach(todo=>{
          todo.complete = isSelect;
        })
        /*this.todos.map(todo=>{
          todo.complete = isSelect;
        })*/
      }
    },
    // 深度监视
    watch:{
      todos:{
        // 深度监视
        deep:true,
        /*handler: val => {
          localStorageUtil.saveTodos(val)
        }*/
        handler:localStorageUtil.saveTodos
        /*handler: function (val) { // todos发生了变化
         localStorageUtil.saveTodos(val) // 保存todos
         },*/

      }
    },
    components:{
      'todo-header':header,
      'todo-footer':footer,
      list
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
