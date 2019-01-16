<template>
	<div id="layOut">
		<div @click="scroll">
			<transition name="fade">
				<backTop v-if="tooLong" />
			</transition>
		</div>

		<snackBar v-show="success" />
		<div class="searchBar">
			<div class="search">
				<input placeholder="输入关键字搜索图标" v-model.trim="searchVal" />
			</div>
		</div>
		<div @click="copied">
			<iconCard v-for="(icon , index) in icons" :key="icon.id" v-clipboard="icon" >
				<div class="font-icons" slot="font-icons">{{icon}}</div>
				<div class="icon-name" slot="icon-name">{{index + 1}}&nbsp;{{icon}}</div>
			</iconCard>
		</div>
		<div v-if="icons.length==0" class="nodata">{{nodata}}</div>
	</div>
</template>

<script>
	import iconCard from '@/components/IconCard.vue'
	import snackBar from '@/components/SnackBar.vue'
	import backTop from '@/components/BackTop'

	export default {
		name: 'layOut',
		components: {
			iconCard,
			snackBar,
			backTop
		},
		data() {
			return {
				searchVal: '',
				icoListArr: [],
				nodata: '找不到相关图标',
				success: false,
				tooLong: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.showBacktop); //监听滚动条，触发返回顶部方法。
		},
		computed: {
			icons: function() {
				let iconList = [];
				for (var i = 0; i < this.icoListArr.length; i++) {

					if (this.icoListArr[i].search(this.searchVal) != -1) {

						iconList.push(this.icoListArr[i]);

					}
				}
				return iconList;
			}
		},
		created() {
			this.getIconList()
		},
		methods: {
			getIconList() {
				this.$axios.get("/icoList.json")
					.then(res => this.icoListArr = res.data)
			},
			copied() {
				console.log(this.success);
				this.success = !this.success;
				setTimeout(function(obj) {
					obj.success = false;
				}, 2000, this)
			}, // snackbar状态切换
			showBacktop() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if (scrollTop >= 420) {
					this.tooLong = true;
				} else if (scrollTop < 600) {
					this.tooLong = false;
				}
			}, //返回顶部按钮触发
			scroll: function smoothscroll() {
				let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
				if (currentScroll > 0) {
					window.requestAnimationFrame(smoothscroll);
					window.scrollTo(0, currentScroll - (currentScroll / 20));
				}
			}, //平滑返回顶部动画
		}
	}
</script>

<style scoped >
	#layOut {
		width: 1280px;
		margin: 136px auto 0 auto;
	}

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
		margin: 0 auto;
	}

	.search input {
		width: 100%;
		outline: none;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		font-weight: 200;
		text-indent: 8px;
		color: rgba(0, 120, 255, 1);
		border: 1px solid rgba(0, 120, 255, .3);
		box-sizing: border-box;
		transition: all ease-in .5s;
	}

	.search input:focus {
		border: 1px solid rgba(0, 120, 255, 1);
	}

	.nodata {
		width: 100%;
		padding: 16px 0;
		color: #999;
		background: #f5f5f5;
		font-size: 24px;
		font-weight: 200;
		text-align: center;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all .3s;
	}

	.fade-enter,
	.fade-leave-to {
		transform: scale(0);
		opacity: 0;
	}
</style>
