<template>
	<view>
		<view id='container'></view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="back"  @click="goBack">
				返回
			</view>
			<view class="content text-bold">
				帮助
			</view>
		</view>
		<view class="cu-card case header-space">
			<h3 class="title">车辆管理系统使用异常解决方法</h3>
			<p>步骤一：</p>
			<p>长按二维码，识别图中二维码：</p><br>
			<div class="img qrcode">
				<image src="../../static/x5qrcode.png"></image>
			</div>
			<p>步骤二：</p>
			<p>按图示选中4个对话框后，点清除，再使用车辆管理系统</p><br>
			<div class="img">
				<image src="../../static/cleanCache.png"></image>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goBack(){
				uni.redirectTo({
					url: '/pages/home/home'
				});	
			}
		}
	}
</script>

<style>
	.back{
		margin-left: 5%;
		font-weight: bold;
	}
	.title{
		text-align: center;
	}
	.img{
		width: 80%;
		height: 40%;
		text-align: center;
		vertical-align: middle;
		display: table-cell;
	}
</style>
