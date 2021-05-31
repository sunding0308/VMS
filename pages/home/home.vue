<template>
	<view>
		<view id='container'></view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="help"  @click="goHelpPage">
				<icon class="iconfont icon-bangzhu"></icon>
			</view>
			<view class="content text-bold">
				首页
			</view>
			<view class="saomiao" @click="scanCode">
				<icon class="iconfont icon-saomiao"></icon>
			</view>
		</view>
		<view class="cu-card case header-space">
			<view class="cu-item">
				<view class="cu-list">
					<view class="cu-item">
						<view class="content flex-sub">
							<view class="flex solid-bottom padding justify-around">
								<view class="text-gray text-bold">
									<icon class="iconfont icon-dingwei" style="color:#adadad"></icon>
									{{ this.locationName }}
								</view>
								<view class="text-gray text-bold" @click="initAMap">
									<span v-if="!isLoad">刷新<icon class="iconfont icon-shuaxinzhongjieban" style="color:#adadad"></icon></span>
									<view v-if="isLoad" class="cu-load load-cuIcon" :class="isLoad?'loading':'over'"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card case" v-show="!reservationInfo">
			<view class="cu-item shadow bg-blue">
				<view class="cu-list">
					<view class="cu-tag radius bg-blue">当前预约信息</view>
					<view class="cu-item">
						<view class="content flex-sub">
							<view class="flex solid-bottom padding justify-around">
								<view class="text-orange text-xl text-bold">暂未预约</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card case bottom-little-space" @click="modifyReservation" v-show="reservationInfo">
			<view class="cu-item shadow bg-blue">
				<view class="cu-list">
					<view class="cu-tag radius bg-blue">当前预约信息</view>
					<view class="cu-item">
						<view class="content flex-sub">
							<view class="flex solid-bottom padding justify-around">
								<div class="qrcode" ref="qrcodeContainer"></div>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">车牌号：</view>
								<view class="text-black">{{this.carNO}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">预约入场时间：</view>
								<view class="text-black">{{this.time}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">业务类型：</view>
								<view class="text-black">{{this.businessType}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">装卸货地点：</view>
								<view class="text-black">{{this.place}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">入厂门岗：</view>
								<view class="text-black">{{this.door}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">是否排队：</view>
								<view class="text-black">{{this.isNeedQueue == 1 ? '是' : '否'}}</view>
							</view>
							<view class="flex solid-bottom padding justify-around">
								<view class="text-black">状态：</view>
								<view class="text-black"><view class='cu-tag line-red'>{{this.status}}</view></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex solid-bottom padding justify-around" v-show="reservationInfo">
			<button class="cu-btn bg-grey lg bottom-space" @click="cancel" v-show="this.businessStatus == 10 || this.businessStatus == 20">取消预约</button>
			<button class="cu-btn bg-green lg bottom-space" @click="confirm" v-show="this.businessStatus == 10" :disabled="isLocated">我已到位</button>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<view class="gray-text">预约数据导入中...</view>
		</view>
		<view class="cu-bar tabbar bg-white position-sticky fixed-bottom">
			<view class="action text-blue">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray add-action" @click="addReservation">
				<button class="cu-btn cuIcon-add bg-gradual-blue shadow"></button>
				预约
			</view>
			<view class="action text-gray" @click="modifyRegister">
				<view class="cuIcon-my">
				</view>
				我的
			</view>
		</view>
<!-- 		<div class="button">
			<wx-open-subscribe :template="['Al921RVRtQBGM7XQwgJL1ER8lwHVELRj7-HZk6B9i0k']" @error="onError" @success="onSuccess" id="subscribe">
				<script type="text/wxtag-template">
					<style>
						button{
							padding: 10px 30px;
							display: flex;
							width: 100%;
							align-items: center;
							justify-content: center;
							background: #4BCB7C;
							color: #fff;
							font-size: 16px;
							border: none;
							outline: none;
							border-radius: 50px;
						}
					</style>
					<button class="cu-btn bg-green lg bottom-space" @click="confirm" v-show="this.businessStatus == 10" :disabled="isLocated">接收入厂通知</button>
				</script>
			</wx-open-subscribe>
		</div> -->
	</view>
</template>

<script>
	import AMap from "@/api/AMap.js"
	import {mapState,mapMutations} from 'vuex';
	import QRCode from 'qrcodejs2'
	export default {
		data() {
			return {
				qrcode:'',
				carNO:'',
				mobile:'',
				time:'',
				businessType:'',
				businessStatus:'',
				place:'',
				door:'',
				clientName:'',
				goodsWeight:'',
				isNeedQueue:'',
				status:'',
				reservationInfo:false,
				reservationNo:'',
				userid:'',
				locationName:'定位中...',
				isLoad:true,
				isLocated:true,
				map: null,
				resAmap:null,
				loadModal:false,
				carList:{}
			}
		},
		computed:{
			...mapState(['openid'])
		},
		methods: {
			// onError(e) {
			// 	console.log(e);
			// },
			// onSuccess(e) {
			// 	if (e.detail.errMsg == 'subscribe:ok') {
			// 		let status = JSON.parse(e.detail.subscribeDetails);
			// 		if (JSON.parse(status['模板消息ID']).status == 'accept') {
			// 			Toast.success('订阅成功');
			// 		} else {
			// 			Toast.fail('订阅失败');
			// 		}
			// 	} else {
			// 		Toast.fail('订阅失败');
			// 	}
			// },
			onShow(){
			    this.getReservation()
			},
			onLoad:function(options){
				if (!this.openid) {
					this.$store.commit('setOpenid', this.$route.query.openid);
				}
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/getRegisteredInfo.do?userid='+(this.$route.query.openid ? this.$route.query.openid:this.openid),
					success: (res)=> {
						console.log('获取用户信息');
						console.log(res.data);
						if(res.data.code == '90001') {
							console.log(res.data);
							this.mobile = res.data.data.MOBILE
							res.data.data.ITEMS.forEach((item, i) => {
								this.carList[item.CAR_LICENSE] = (item.CAR_TEAM)
							})
						} else {
							uni.redirectTo({
								url: '/pages/terms/terms?toWhere=register'
							});	
						}
					}
				});
				this.initAMap()
			},
			async initAMap() {
				this.getReservation()
				this.locationName = '定位中...'
				this.isLoad = true
				try {
					this.resAmap = await AMap();
					this.$nextTick(function() {
						// this.getBroewerLatLng();
						var map = new this.resAmap.Map('container', {
							center: [121.430407,29.989491],
							radius: 3000, //半径
							borderWeight: 3,
							strokeColor: "#FF33FF", 
							strokeOpacity: 1,
							strokeWeight: 6,
							strokeOpacity: 0.2,
							fillOpacity: 0.4,
							strokeStyle: 'dashed',
							strokeDasharray: [10, 10], 
							// 线样式还支持 'dashed'
							fillColor: '#1791fc',
							zIndex: 50,
						});
						this.map = map;
						this.resAmap.plugin('AMap.Geolocation', () => {
							var geolocation = new this.resAmap.Geolocation({
								enableHighAccuracy: true, //是否使用高精度定位，默认:true
								timeout: 5000, //超过10秒后停止定位，默认：5s
								buttonPosition: 'RB', //定位按钮的停靠位置
								// buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
								zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
							});
							map.addControl(geolocation);
							geolocation.getCurrentPosition(function(status, result) {
								if (status == 'complete') {
									onComplete(result)
								} else {
									onError(result)
								}
							});
						});

						let that = this
						function onComplete(data) {
							console.log(data) // 获取到的定位信息
							var myLngLat = new that.resAmap.LngLat(data.position.lng,data.position.lat);
							var circle = new that.resAmap.Circle({
								center: new that.resAmap.LngLat(121.430407,29.989491),// 圆心位置
								radius: 3000 //半径
							});
							if(circle.contains(myLngLat)){
								that.locationName = data.formattedAddress
								that.isLocated = false
								console.log('有效区域')
							}else{
								that.locationName = '您不在有效区域内,无法点击到位'
								console.log('您不在有效区域内，无法点击到位!')
							}
							that.isLoad = false
						}

						function onError(data) {
							that.locationName = '获取定位失败'
							that.isLoad = false
							console.log(data) // 定位失败的信息
						}

					})
				} catch (e) {
					console.log(e)
				}
			},
			cancel() {
				uni.showModal({
					content: '您确定要取消预约吗?',
					showCancel: true,
					success:(res)=>{
						if (res.confirm) {
							let app = getApp()
							uni.request({
								url: app.globalData.baseUrl+'/restzvms043/reserveCancle.do',
								data: {
									"RESERVATION_NO": this.reservationNo,
									"USER_ID": this.userid
								},
								method:"POST",
								header : {'content-type':'application/json'},
								success: (res)=> {
									if(res.data.code == '90001') {
										console.log('取消预约')
										console.log(res.data);
										this.qrcode = ''
										this.carNO = ''
										this.time = ''
										this.businessType = ''
										this.businessStatus = ''
										this.place = ''
										this.door = ''
										this.clientName = ''
										this.goodsWeight = ''
										this.reservationInfo = false
										this.reservationNo = ''
										this.userid = ''
									} else {
										console.log(res.data);
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			confirm() {
				let business_status = 25
				if (this.isNeedQueue == 1) {
					business_status = 20
				}
				uni.showModal({
					content: '您确定已经到位吗?',
					showCancel: true,
					success:(res)=>{
						if (res.confirm) {
							this.isLocated = true
							let app = getApp()
							uni.request({
								url: app.globalData.baseUrl+'/restzvms043/updateReserveStatus.do',
								data: {
									"RESERVATION_NO": this.reservationNo,
									"BUSINESS_STATUS": business_status
								},
								method:"POST",
								header : {'content-type':'application/json'},
								success: (res)=> {
									if(res.data.code == '90001') {
										console.log('我已到位')
										console.log(res.data);
										if (this.isNeedQueue == 1) {
											this.businessStatus = 20
											this.status = '厂外排队'
										} else {
											this.businessStatus = 25
											this.status = '已呼叫入厂'
										}
									} else {
										console.log(res.data);
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			getStatus() {
				if (this.businessStatus == 10) {
					this.status = '预约'
				}
				if (this.businessStatus == 20) {
					this.status = '厂外排队'
				}
				if (this.businessStatus == 25) {
					this.status = '已呼叫入厂'
				}
				if (this.businessStatus == 30) {
					this.status = '场内排队'
				}
				if (this.businessStatus == 40) {
					this.status = '装卸任务中'
				}
				if (this.businessStatus == 50) {
					this.status = '等待出厂'
				}
			},
			addReservation() {
				if(this.carNO != '') {
					uni.showModal({
						content: '您已预约，无法进行多次预约！',
						showCancel: false
					})
				} else {
					uni.redirectTo({
						url: '/pages/terms/terms?toWhere=reservation'
					});	
				}
			},
			getReservation() {
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms043/getReserveInfo.do',
					data: {
						"RESERVATION_NO": '',
						"WECHATID": this.openid,
						"CAR_LICENSE": ''
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						if(res.data.code == '90001') {
							console.log('获取预约记录');
							console.log(res.data);
							this.qrcode = res.data.data.FIELD19
							this.carNO = res.data.data.CAR_LICENSE
							this.time = res.data.data.RESERVATION_ENTER_TIME
							this.businessType = res.data.data.BUSINESS_TYPE
							this.businessStatus = res.data.data.BUSINESS_STATUS
							this.place = res.data.data.LOADING_LOCATION
							this.door = res.data.data.ENTER_GATE
							this.clientName = res.data.data.FIELD16
							this.goodsWeight = res.data.data.FIELD17
							this.isNeedQueue = res.data.data.FIELD15
							this.reservationInfo = true
							this.reservationNo = res.data.data.RESERVATION_NO
							this.userid = res.data.data.USERID
							this.getStatus()
							this.showQRCode()
						} else {
							this.reservationInfo = false
							this.carNO = ''
							console.log(res.data);
						}
					}
				});
			},
			modifyRegister() {
				uni.redirectTo({
				    url: '/pages/register/update'
				});
			},
			modifyReservation() {
				if(this.businessStatus == 10 || this.businessStatus == 20){
					uni.redirectTo({
						url: '/pages/reservation/update?reservationNo='+this.reservationNo
					});	
				}
			},
			scanCode() {
				if(!this.carNO){
					uni.showModal({
						content: '未查询到预约信息',
						showCancel: false
					})
					return
				}
				if(this.businessStatus != 30){
					uni.showModal({
						content: '预约信息状态不正确',
						showCancel: false
					})
					return
				}
				if(this.businessType != '成品提货'){
					uni.showModal({
						content: '预约信息业务类型不正确',
						showCancel: false
					})
					return
				}
				window.location.href = 'http://xiaozhao.jttygroup.com/qywx/scan/?openid='+this.openid+'&transportCompany='+this.carList[this.carNO]+'&mobile='+this.mobile
			},
			showQRCode(){
				this.$refs.qrcodeContainer.innerHTML = ''
				this.$nextTick(()=>{
					var qrcode = new QRCode(this.$refs.qrcodeContainer, {
						text: this.qrcode,
						width: document.body.clientWidth * 0.7,
						height: document.body.clientWidth * 0.7,
						colorDark: '#000',
						colorLight: '#fff',
						correctLevel: QRCode.CorrectLevel.H
					})
				})
			},
			goHelpPage(){
				uni.redirectTo({
					url: '/pages/help/index'
				});	
			}
		}
	}
</script>

<style scoped>
	.cu-list{
		height: auto;
	}
	.bottom-space{
		margin-bottom: 150px;
	}
	.bottom-little-space{
		margin-bottom: 30px;
	}
	.icon-saomiao{
		font-size: 28px;
		color:#676767;
	}
	.saomiao{
		margin-right: 5%;
		font-weight: bold;
	}
	.icon-bangzhu{
		font-size: 28px;
		color:#676767;
	}
	.help{
		margin-left: 5%;
		font-weight: bold;
	}
</style>
