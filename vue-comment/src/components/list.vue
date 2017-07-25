<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！<!-- style='display: none' --></h2>
        <ul class="list-group">
        <!-- 传属性，通过数据绑定 -->
          <item v-for="(comment,index) in comments" :key="index" :comment="comment" :remove-comment="removeComment" :index='index'></item>
        </ul>
    </div>
</template>
<script>
// 写分号报错
  import item from './item.vue'

	export default {
		// 声明接收哪些属性
    props: ['comments','removeComment'],
	  components: {// 组件引入
        item
	  }

	}
</script>
<style>
.reply {
  margin-top: 0px;
}
</style>
