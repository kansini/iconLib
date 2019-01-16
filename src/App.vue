<template>
	<div id="app">
		<layOut />
	</div>
</template>

<script>
	import layOut from './views/LayOut.vue'
	export default {
		name: 'app',
		components: {
			layOut,
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}

</style>
