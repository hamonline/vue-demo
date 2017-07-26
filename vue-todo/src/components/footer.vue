<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model='isCheckAll'/>
    </label>
    <span>
    <!-- completeLen是vue中一个计算函数方法 ，在computed里声明 -->
          <span>已完成{{completeLen}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click='removeCompleted'  v-show='completeLen'>清除已完成任务<!-- v-show='completeLen > 0' --></button>
  </div>
</template>
<script>
  export default {
    props:{
      todos:Array,
      removeCompleted:Function,
      // selectAll:Function
    },
    computed:{
      completeLen () {
        // 命令式
        /*let totalLen = 0
        for(let i=0;i<this.todos.length;i++){
          if(this.todos[i].complete){
            totalLen++
          }
        }
        return totalLen;*/
        // 用数组中reduce()方法 实现数组数据的是统计   
        // reduce()结果返回的是最后哦一次遍历执行回调函数 return的结果
        return this.todos.reduce((preTotal,todo) => {//preTotal是返回的参数，总长度  todo是遍历验证的对象
          return preTotal += todo.complete ? 1 : 0
        },0)
        // 一开始 todo数组中处于完成状态的是0 
        // 数组常用的方法: map()/filter()/reduce()/find()/findIndex()
      },
      isCheckAll:{
        get(){
          return this.completeLen === this.todos.length && this.todos.length>0
        },
        set(val){// 当用户通过操作的方式改变了勾选状态
          // 更新todos
          // this.selectAll(val)
          this.$emit('selectAll',val)

        }
      }

    }
  }
</script>
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
