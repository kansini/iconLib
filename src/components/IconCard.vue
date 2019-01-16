<template>
	<div id="iconCard">
		<slot name="font-icons">
			<div class="font-icons">3d_rotation</div>
		</slot>
		<slot name="icon-name">
			<div class="icon-name">3d_rotation</div>
		</slot>
	</div>
</template>

<script>
	export default {
		name: 'iconCard',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	#iconCard {
		float: left;
		position: relative;
		width: 160px;
		height: 160px;
		line-height: 120px;
		text-align: center;
		background: rgba(0, 120, 255, 0);
		transition: all ease-in 1s;
		cursor: pointer;
		
	}

	#iconCard:hover {
		border-radius: 10px;
		background: rgba(0, 120, 255, .2);
		box-shadow: 0 0px 20px rgba(0, 120, 255, .2);
	}

	#iconCard .font-icons {
		font-size: 40px;
		transition: all ease-in .5s;
		color: #444;
	}

	#iconCard:hover .font-icons {
		animation: shake .3s;
		transform: scale(1.2);
		color: rgba(0, 120, 255, .8);
	}

	.icon-name {
		position: absolute;
		width: 160px;
		height: 40px;
		padding: 0 8px;
		box-sizing: border-box;
		left: 0;
		bottom: -20px;
		font-size: 12px;
		text-align: center;
		line-height: 40px;
		background: rgba(255, 255, 255, .2);
		color: #fff;
		opacity: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		transition: all ease-in .2s;
	}

	#iconCard:hover .icon-name {
		bottom: 0;
		opacity: 1;
		background: rgba(255, 255, 255, .2);
		color: #333;
	}

	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}

		20% {
			transform: rotate(-15deg);
		}

		40% {
			transform: rotate(15deg);
		}

		60% {
			transform: rotate(-15deg);
		}

		80% {
			transform: rotate(15deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}
</style>
