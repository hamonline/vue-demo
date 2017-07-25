<template>
   <div class="container">
    <search :set-search-name="setSearchName"></search>
    <list :search-name="searchName"></list>
  </div>
</template>
<script>
    import axios from 'axios'
	import search from './search.vue'
	import list from './list.vue'
	
	export default {
		data () {
			return {
			  searchName:''
			}
		},
		methods:{
			setSearchName (searchName) {
				this.searchName = searchName
			}
		},
		components:{
			search,
			list
		}
	}
</script>
<style></style>

