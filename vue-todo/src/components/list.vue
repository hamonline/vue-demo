<template>
  <ul class="todo-main">
    <item v-for="(todo,index) in todos" :todo="todo" :key="index" :del-todo="delTodo" :index="index"></item>
  </ul>
</template>
<script>
  import item from './item.vue'
  export default {
    props:{
      todos:Array,
      delTodo:Function
    },
    components:{
      item
    }
  }
</script>
<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
