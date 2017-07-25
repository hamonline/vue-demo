<!-- 结构 行为 样式 -->
<template>
<!-- 根标签 -->
	<div>
		<header class="site-header jumbotron">
	      <div class="container">
	        <div class="row">
	          <div class="col-xs-12">
	            <h1>利用Vue编写的评论案例</h1>
	          </div>
	        </div>
	      </div>
	    </header>
	    <div class="container">
	      <add :add-comment="addComment"></add>
	      <list :comments="comments" :remove-comment="removeComment"></list>
	    </div>
	</div>
</template>
<script>
// 引入组件
import add from './add.vue'
import list from './list.vue'
// 暴露组件模块
export default {
	// 数据绑定 v-bind:xxx='';
  data () {
    return {
      comments: []
  	}
  },
  // 页面加载时 执行一次
  created () {
    /*this.comments = [
	    {
	    	username:'Tom',
	    	content:'Just Do It!'
	    },
	    {
	    	username:'Rose',
	    	content:'You frist!'
	    }
    ]*/
    // 模拟发送ajax请求, 迅步获取数据
    setTimeout(() => {
	  const comments = [
	    {
	    	username:'Tom',
	    	content:'Just Do It!'
	    },
	    {
	    	username:'Rose',
	    	content:'You frist!'
	    }
	  ]
	  // 更新数据
	  this.comments = comments;
    },1000);
  },
  // 方法 用数据绑定方式 v-bind或:
  methods: {
    addComment (comment) {
      this.comments.unshift(comment);
    },
    removeComment (index) {
      this.comments.splice(index,1);
    }
  },
  components: {
	add,
	list
  }
}
</script>
<style></style>