<template>
	<div class="backtop">
		<i class="font-icons">airplanemode_active</i>
	</div>
</template>

<script>
	export default {
		name: 'backTop',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.backtop {
		position: fixed;
		right: 16px;
		bottom: 40px;
		width: 56px;
		height: 56px;
		line-height: 52px;
		border-radius: 32px;
		text-align: center;
		background: rgba(0, 120, 255, .9);
		box-shadow: 2px 2px 10px rgba(0, 120, 255, 1);
		transition: all ease .2s;
		/* animation: fadeIn .5s forwards; */
		cursor: pointer;
	}

	.backtop:hover {
		background: rgba(0, 120, 255, 1);
		animation: upup .8s infinite;
	}

	.backtop .font-icons {
		color: #fff;
		font-size: 32px;
	}

	@keyframes upup {
		0% {
			line-height: 60px;
		}

		25% {
			line-height: 48px;
		}

		50% {
			line-height: 60px;
		}

		75% {
			line-height: 48px;
		}

		100% {
			line-height: 60px;
		}
	}

	@keyframes fadeIn {
		from {
			transform: scale(0);
			opacity: 0;
		}

		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
