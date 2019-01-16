<template>
	<div class="snackbar">
		<span class="circle">
			<i class="font-icons">pregnant_woman</i>
		</span>
		复制成功!
	</div>
</template>

<script>
	export default {
		name: 'snackBar',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.snackbar {
		position: fixed;
		bottom: -40px;
		opacity: 0;
		left: 0;
		width: 100%;
		height: 56px;
		line-height: 56px;
		background: rgba(21, 204, 53, .8);
		color: #fff;
		text-align: center;
		z-index: 999;
		animation: snackbar 2s forwards;
		font-weight: 200;
		font-size: 16px;
	}

	.circle {
		display: inline-block;
		width: 40px;
		height: 40px;
		margin-right: 8px;
		line-height: 40px;
		border-radius: 20px;
		text-align: center;
		background: rgba(255,255,255,1);
	}

	.circle .font-icons {
		color: #42B983;
		font-size: 32px;
	}

	@keyframes snackbar {
		10% {
			bottom: -40px;
			opacity: 0;
		}

		20% {
			bottom: 0px;
			opacity: 1;
		}

		80% {
			bottom: 0px;
			opacity: 1;
		}

		100% {
			bottom: -40px;
			opacity: 0;
		}
	}
</style>
