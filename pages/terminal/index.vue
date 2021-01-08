<template>
	<view>
		<image class="image-bg" src="../../static/carbg.png"/>
		<div class="logo-part">
			<image class="logo" src="../../static/jtlogo.png"/>
			<p>股票代码：601609</p>
		</div>
		<h2>{{nowDate}} {{nowTime}} {{week}}</h2>
		<div class="title-part">
			<h1>物流车辆出入管理系统自助终端</h1>
		</div>
		<view class="cu-item">
				<view class="margin-tb-sm text-center">
					<div class="zhanwei" style="visibility:hidden;">
						<div>
							<button class="cu-btn round bg-gray">占位</button>
						</div>
					</div>
					<div class="icon-box" @click="reserve">
						<i class="iconfont icon-ico"></i>
						<div>
							<button class="cu-btn round bg-gray">预约入厂</button>
						</div>
					</div>
					<div class="icon-box" @click="print">
						<i class="iconfont icon-dayin"></i>
						<div>
							<button class="cu-btn round bg-gray">补打预约单</button>
						</div>
					</div>
					<div class="icon-box">
						<i class="iconfont icon-jingqingqidai"></i>
						<div>
							<button class="cu-btn round bg-gray">更多功能敬请期待</button>
						</div>
					</div>
					<div class="zhanwei" style="visibility:hidden;">
						<div>
							<button class="cu-btn round bg-gray">占位</button>
						</div>
					</div>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nowDate:'',
				nowTime:'',
				week:''
			}
		},
		created() {
			// this.nowTimes();
		},
		methods: {
			// 获取当前时间函数
			timeFormate(timeStamp) {
				let year = new Date(timeStamp).getFullYear();
				let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
				let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
				let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
				let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
				let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
				// return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
				// this.nowDate = year + "-" + month + "-" + date +" "+" "+hh+":"+mm ;
				this.nDate = year + "-" + month + "-" + date +" "+" ";
				this.nowDate = this.nDate;
				this.nowTime = hh+":"+mm;
				// console.log(this.nowTime);
				var dateString = this.nDate;
				var dateObject = new Date(dateString);
				this.week=dateObject.getDay()
				if(this.week==1){
					this.week='星期一'
				}
				if(this.week==2){
					this.week='星期二'
				}
				if(this.week==3){
					this.week='星期三'
				}
				if(this.week==4){
					this.week='星期四'
				}
				if(this.week==5){
					this.week='星期五'
				}
				if(this.week==6){
					this.week='星期六'
				}
				if(this.week==0){
					this.week='星期日'
				}
			},
			// 定时器函数
			nowTimes(){
				this.timeFormate(new Date());
				setInterval(this.nowTimes,60*1000);
			},
			reserve() {
				uni.redirectTo({
				    url: '/pages/terminal/terminalReservation'
				});
			},
			print() {
				uni.redirectTo({
				    url: '/pages/terminal/printReservation'
				});
			}
		}
	}
</script>

<style>
	.image-bg {
		position: absolute;
		z-index: -1;
		left: 0;
		right: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	.logo-part {
		float: left;
	}
	.title-part {
		padding-top: 6em;
	}
	.logo {
		width: 12em;
		height: 4em;
	}
	p {
		color: #555555;
		margin-left: 2em;
	}
	h1 {
		color: #FFFFFF;
		text-align: center;
		font-size: 300%;
	}
	h2 {
		color: #FFFFFF;
		float: right;
		padding-top: 1%;
	}
	.cu-btn {
		color: #808080;
	}
	.icon-ico {
		font-size: 300rpx;
	}
	.icon-jingqingqidai {
		font-size: 300rpx;
	}
	.icon-dayin {
		font-size: 300rpx;
	}
	.cu-item {
		text-align: center;
		padding-top: 10%;
	}
	.icon-box {
		margin: 0 4% 0 4%;
		float: left;
		width: 13.6%;
		background-color: #DDDDDD;
		background:rgba(255,255,255,0.3);
		border-radius: 5px;
	}
	.zhanwei {
		margin: 0 4% 0 0;
		float: left;
		width: 13.6%;
	}
	.cu-btn {
		margin-bottom: 1em;
	}
</style>
