<template>
   <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索GitHub用户</h3>
    <div>
      <input type="text" placeholder="输入要搜索的英文名" v-model="inputName"/>
      <button @click="search">搜索</button>
    </div>
  </section>
</template>
<script>
	export default {
		props:{
			setSearchName:Function
		},
		data(){
			return {
				inputName:''
			}
		},
		methods:{
			search(){
				const inputName = this.inputName.trim()
				if(!inputName){
					alert("请输入正确的信息!")
					return
				}
				this.setSearchName(inputName);
				this.inputName =''
			}
		}
	}
</script>
<style></style>