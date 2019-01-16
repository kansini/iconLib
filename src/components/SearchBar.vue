<template>
	<div class="searchBar">
		<div class="search">
			<input placeholder="输入关键字搜索图标" v-model="searchVal"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'searchBar',
		data(){
			return{
				searchVal: ''
			}
		}
	}
</script>

<style scoped>
	.searchBar {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		padding: 16px 0;
		background: rgba(255, 255, 255, .85);
		box-shadow: 0 0 20px rgba(0, 120, 255, .1);
		-webkit-backdrop-filter: blur(4px);
		z-index: 1;
	}

	.search {
		width: 50%;
		margin: 16px auto;
	}

	.search input {
		width: 100%;
		outline: none;
		height: 48px;
		line-height: 48px;
		text-indent: 8px;
		border: 1px solid rgba(0, 120, 255, .3);
		box-sizing: border-box;
		transition: all ease-in .5s;
	}

	.search input:focus {
		border: 1px solid rgba(0, 120, 255, .8);
	}
</style>
