<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onLoad:function(options){
				if(this.$route.query.openid){
					uni.redirectTo({
						url: '/pages/home/home?random='+this.getRandomInt(1,1000)+'&openid='+this.$route.query.openid
					});	
				} else {
					uni.redirectTo({
						url: '/pages/terminal/index'
					});
				}
			},
			getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		}
	}
</script>

<style>

</style>
