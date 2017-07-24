<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click='delComment' >删除</a>
    </div>
      <p class="user"><span >{{comment.username}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
	export default {
		// 接收数据
	  props:{
	  	comment: Object,// 属性名，属性值必须是对象类型
      removeComment: Function,
      index: Number
	  },
	  methods: {
		  delComment(){
        // 获取用户名
        const {username} = this.comment;
        // 验证是否删除
        if(confirm(`确定删除${username}的评论吗？`)){
          this.removeComment(this.index);
        }
      }
	  }
	}
</script>

<style>
li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>