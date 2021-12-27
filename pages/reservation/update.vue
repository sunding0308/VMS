<template>
	<view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="content text-bold">
				修改预约
			</view>
		</view>
		
		<view class="cu-form-group margin-top header-space">
			<view class="title">车辆</view>
			<picker @change="CarChange" :value="carIndex" :range="carRange">
				<view class="picker">
					{{carIndex>-1?carRange[carIndex]:carRange[0]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">预约入场日期</view>
			<picker mode="date" :value="date" start="0000-00-01" end="9999-12-31" @change="DateChange">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">预约入场时间</view>
			<picker mode="time" :value="time" start="00:00" end="23:59" @change="TimeChange">
				<view class="picker">
					{{time}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">业务类型</view>
			<picker @change="BusinessTypeChange" :value="businessTypeIndex" :range="businessTypeRange">
				<view class="picker">
					{{businessTypeIndex>-1?businessTypeRange[businessTypeIndex]:businessTypeRange[0]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">装卸货地点</view>
			<picker @change="PlaceChange" :value="placeIndex" :range="placeRange">
				<view class="picker">
					{{placeIndex>-1?placeRange[placeIndex]:placeRange[0]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="ifNeedClientName">
			<view class="title">客户名称<span>*</span></view>
			<input placeholder="请输入" class="text-right" name="input" v-model.trim="clientName"></input>
		</view>
		<view class="cu-form-group" v-show="ifNeedGoodsWeight">
			<view class="title">货物重量(吨)<span>*</span></view>
			<input placeholder="请输入" class="text-right" name="input" v-model.trim="goodsWeight"></input>
		</view>
		<view class="cu-form-group" v-show="ifNeedGoodsType">
			<view class="title">货物类型<span>*</span></view>
			<checkbox class="blue" :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false" value="铜管" @click="chooseGoodsType(0,'铜管')"></checkbox>铜管
			<checkbox class="blue" :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="铜带" @click="chooseGoodsType(1,'铜带')"></checkbox>铜带
			<checkbox class="blue" :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false" value="铜板" @click="chooseGoodsType(2,'铜板')"></checkbox>铜板
		</view>
		<view class="cu-form-group" v-show="ifNeedReason">
			<view class="title">入厂原因<span>*</span></view>
			<input placeholder="请输入" class="text-right" name="input" v-model="reason"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">入厂门岗</view>
			<view class="text-black door">{{this.door}}</view>
		</view>
		<view class="cu-form-group">
			<view class="title">是否排队</view>
			<view class="text-black door">{{this.isNeedQueue == 1 ? '是' : '否'}}</view>
		</view>
		<view class="cu-form-group" v-show="ifNeedBoxNo">
			<view class="title">集装箱号-1<span>*</span></view>
			<input class="text-right" placeholder="请输入7位数箱号" name="input" v-model="boxNo1"></input>
		</view>
		<view class="cu-form-group" v-show="ifNeedBoxNo">
			<view class="title">集装箱号-2<span>*</span></view>
			<input class="text-right" placeholder="请输入7位数箱号" name="input" v-model="boxNo2"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">金田业务联系人号码</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="phone"></input>
		</view>
		<view class="cu-form-group">
			<b>是否有不属于金田财物随车入厂</b>
			<radio :class="radio=='YES'?'checked':''" :checked="radio=='YES'?true:false" value="YES" @click="belongingsIn"></radio>是
			<radio :class="radio=='NO'?'checked':''" :checked="radio=='NO'?true:false" value="NO" @click="notBelongingsIn"></radio>否
		</view>
		<view class="cu-form-group margin-top" v-show="radio == 'YES'">
			<view class="title">货物名称</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="goods1"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">重量/数量</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="count1"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">单位</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="unit1"></input>
		</view>
		<view class="cu-form-group margin-top" v-show="radio == 'YES'">
			<view class="title">货物名称</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="goods2"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">重量/数量</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="count2"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">单位</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="unit2"></input>
		</view>
		<view class="cu-form-group margin-top" v-show="radio == 'YES'">
			<view class="title">货物名称</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="goods3"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">重量/数量</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="count3"></input>
		</view>
		<view class="cu-form-group" v-show="radio == 'YES'">
			<view class="title">单位</view>
			<input class="text-right" placeholder="请输入" name="input" v-model="unit3"></input>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<view class="gray-text">处理中</view>
		</view>
		<view class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg bottom-space" type="" @click="submit">提交</button>
		</view>
		
		<view class="cu-bar tabbar bg-white position-sticky fixed-bottom">
			<view class="action text-gray" @click="goHome">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-blue add-action">
				<button class="cu-btn cuIcon-add bg-gradual-blue shadow"></button>
				预约
			</view>
			<view class="action text-gray" @click="modifyRegister">
				<view class="cuIcon-my">
				</view>
				我的信息
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import {dateFormat} from '@/api/date-format.js';
	export default {
		data() {
			return {
				car:'',
				carIndex:-1,
				carRange: [],
				date:'',
				time:'',
				businessType:'',
				businessTypeIndex:-1,
				businessTypeRange: [],
				businessTypeObj: {},
				place:'',
				placeIndex:-1,
				placeRange: [],
				placeObj: {},
				ifNeedClientName:false,
				clientName:'',
				ifNeedGoodsWeight:false,
				goodsWeight:'',
				ifNeedReason:false,
				ifNeedBoxNo:false,
				reason:'',
				ifNeedGoodsType:false,
				checkbox: [{
					checked: false
				}, {
					checked: false
				}, {
					checked: false
				}],
				goodsType:[],
				door:'',
				isNeedQueue:'',
				phone:'',
				boxNo1:'',
				boxNo2:'',
				radio:'NO',
				goods1:'',
				count1:'',
				unit1:'',
				goods2:'',
				count2:'',
				unit2:'',
				goods3:'',
				count3:'',
				unit3:'',
				userid:'',
				username:'',
				loadModal:false
			}
		},
		computed:{
			...mapState(['openid']),
			datetime:function() {
				return this.date + ' ' +this.time
			},
			boxNo:function() {
				if(this.boxNo1 != "" || this.boxNo2 != ""){
					return this.boxNo1 + ',' + this.boxNo2;
				}else{
					return "";
				}
			}
		},
		methods: {
			onLoad:function(options){
				this.date = dateFormat('YYYY-mm-dd',new Date())
				this.time = new Date().toTimeString().slice(0, 5)
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/getRegisteredInfo.do?userid='+this.openid,
					success: (res)=> {
						console.log(res.data);
						if(res.data.code == '90001') {
							this.userid = res.data.data.USERID
							this.username = res.data.data.USERNAME
							res.data.data.ITEMS.forEach((item, i) => {
								this.carRange.push(item.CAR_LICENSE)
							})
						} else {
							console.log(res.data);
						}
					}
				});
				uni.request({
					url: app.globalData.baseUrl+'/restzvms043/getReserveInfo.do',
					data: {
						"RESERVATION_NO": this.$route.query.reservationNo,
						"WECHATID": '',
						"CAR_LICENSE": ''
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						if(res.data.code == '90001') {
							console.log('获取预约信息');
							console.log(res.data);
							this.car = res.data.data.CAR_LICENSE
							this.date = res.data.data.RESERVATION_ENTER_TIME.slice(0,10)
							this.time = res.data.data.RESERVATION_ENTER_TIME.slice(11,17)
							this.businessType = res.data.data.BUSINESS_TYPE
							if (this.businessType == '集装箱原料送货') {
								this.ifNeedBoxNo = true;
								this.boxNo1 = res.data.data.FIELD21.slice(0,7);
								this.boxNo2 = res.data.data.FIELD21.slice(8);
							} else {
								this.ifNeedBoxNo = false;
							}
							this.place = res.data.data.LOADING_LOCATION
							this.clientName = res.data.data.FIELD16
							this.goodsWeight = res.data.data.FIELD17
							this.goodsType = res.data.data.FIELD18.split(',')
							this.reason = res.data.data.REMARK
							this.door = res.data.data.ENTER_GATE
							this.isNeedQueue = res.data.data.FIELD15
							this.phone = res.data.data.INTERNAL_CONTACT
							if (res.data.data.FIELD16 != '') {
								this.ifNeedClientName = true
							} else {
								this.ifNeedClientName = false
							}
							if (res.data.data.FIELD17 != '') {
								this.ifNeedGoodsWeight = true
							} else {
								this.ifNeedGoodsWeight = false
							}
							this.goodsType.forEach(item => {
								switch (item) {
									case '铜管':
										this.checkbox[0].checked = true
										this.ifNeedGoodsType = true
										break
									case '铜带':
										this.checkbox[1].checked = true
										this.ifNeedGoodsType = true
										break
									case '铜板':
										this.checkbox[2].checked = true
										this.ifNeedGoodsType = true
										break
									default:
										this.ifNeedGoodsType = false
										break
								}
							})
							if (res.data.data.REMARK != '') {
								this.ifNeedReason = true
							} else {
								this.ifNeedReason = false
							}
							if(res.data.data.ITEMS.length > 0) {
								this.radio = 'YES'
								if(res.data.data.ITEMS[0]) {
									this.goods1 = res.data.data.ITEMS[0].GOODSNAME
									this.count1 = res.data.data.ITEMS[0].WEIGHT
									this.unit1 = res.data.data.ITEMS[0].UNIT
								}
								if(res.data.data.ITEMS[1]) {
									this.goods2 = res.data.data.ITEMS[1].GOODSNAME
									this.count2 = res.data.data.ITEMS[1].WEIGHT
									this.unit2 = res.data.data.ITEMS[1].UNIT
								}
								if(res.data.data.ITEMS[2]) {
									this.goods3 = res.data.data.ITEMS[2].GOODSNAME
									this.count3 = res.data.data.ITEMS[2].WEIGHT
									this.unit3 = res.data.data.ITEMS[2].UNIT
								}
							}
							//获取业务类型枚举
							uni.request({
								url: app.globalData.baseUrl+'/util/getEnum.do',
								data: {
									"ENUM_ID": "BUSINESS_TYPE"
								},
								method:"POST",
								header : {'content-type':'application/json'},
								success: (res)=> {
									console.log('获取业务类型')
									console.log(res.data)
									if(res.data.code == '90001') {
										res.data.data.forEach((item, i) => {
											this.businessTypeRange.push(item.EMUN_VALUE_ZH)
											this.businessTypeObj[item.EMUN_VALUE_ZH] = (item.EMUN_VALUE_ID)
										})
										this.businessTypeIndex = this.businessTypeRange.map(item => item).indexOf(this.businessType)
										//获取装卸货地点枚举
										uni.request({
											url: app.globalData.baseUrl+'/restzvms045/getLoadingLocation.do',
											data: {
												"BUSINESS_TYPE": this.businessTypeObj[this.businessType]
											},
											method:"POST",
											header : {'content-type':'application/json'},
											success: (res)=> {
												console.log('获取装卸货地点')
												console.log(res.data)
												if(res.data.code == '90001') {
													res.data.data.forEach((item, i) => {
														this.placeRange.push(item.LOADING_LOCATION_DESC)
														this.placeObj[item.LOADING_LOCATION_DESC] = (item.LOADING_LOCATION)
													})
													this.placeIndex = this.placeRange.map(item => item).indexOf(this.place)
													this.getEnterGate()
												}
											}
										});
									}
								}
							});
						} else {
							console.log(res.data);
						}
					}
				});
			},
			goHome() {
				uni.redirectTo({
				    url: '/pages/home/home'
				});
			},
			modifyRegister() {
				uni.redirectTo({
				    url: '/pages/register/update'
				});
			},
			CarChange(e) {
				this.carIndex = e.detail.value
				this.car = this.carRange[this.carIndex]
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			BusinessTypeChange(e) {
				//控制客户名称、货物重量显示隐藏 2:成品提货
				if (e.detail.value == 2) {
					this.ifNeedClientName = true
					this.ifNeedGoodsWeight = true
				} else {
					this.ifNeedClientName = false
					this.ifNeedGoodsWeight = false
					this.clientName = ''
					this.goodsWeight = ''
				}
				//如果是集装箱送货，显示箱号栏位 4:集装箱原料送货
				if (e.detail.value == 4) {
					this.ifNeedBoxNo = true
				} else {
					this.ifNeedBoxNo = false
					this.boxNo1 = '';
					this.boxNo2 = '';
				}
				//货物类型隐藏
				this.ifNeedGoodsType = false
				this.checkbox.forEach((item, index)=>{
					item.checked = false
				})
				this.goodsType = []
				//重置装卸货地点
				this.businessTypeIndex = e.detail.value
				this.businessType = this.businessTypeRange[this.businessTypeIndex]
				this.placeIndex = -1
				this.placeRange = []
				this.placeObj = {}
				let app = getApp()
				//获取装卸货地点枚举
				uni.request({
					url: app.globalData.baseUrl+'/restzvms045/getLoadingLocation.do',
					data: {
						"BUSINESS_TYPE": this.businessTypeObj[this.businessTypeRange[this.businessTypeIndex]]
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取装卸货地点')
						console.log(res.data)
						if(res.data.code == '90001') {
							res.data.data.forEach((item, i) => {
								this.placeRange.push(item.LOADING_LOCATION_DESC)
								this.placeObj[item.LOADING_LOCATION_DESC] = (item.LOADING_LOCATION)
							})
							this.place = this.placeRange[0]
							this.getEnterGate()
						}
					}
				});
			},
			PlaceChange(e) {
				//控制入厂原因显示隐藏 2:其他
				if (this.businessType == '其他' && e.detail.value == 2) {
					this.ifNeedReason = true
				} else {
					this.ifNeedReason = false
					this.reason = ''
				}
				//控制货物类型显示隐藏 7:智能仓库（铜管、铜带、铜板）
				if (this.businessType == '成品提货' && e.detail.value == 7) {
					this.ifNeedGoodsType = true
					this.goodsType = []
				} else {
					this.ifNeedGoodsType = false
					this.checkbox.forEach((item, index)=>{
						item.checked = false
					})
					this.goodsType = []
				}
				if (this.businessType == '成品提货') {
					switch (e.detail.value) {
						case 0:
							this.goodsType.push('棒线')
							break
						case 2:
							this.goodsType.push('电材')
							break
						case 5:
							this.goodsType.push('铜棒')
							break
						case 6:
							this.goodsType.push('铜排')
							break
						default:
							break
					}
				}
				this.placeIndex = e.detail.value
				this.place = this.placeRange[this.placeIndex]
			},
			chooseGoodsType(key,val) {
				this.checkbox[key].checked = !this.checkbox[key].checked
				if (this.checkbox[key].checked) {
					this.goodsType.push(val)
				} else {
					this.goodsType.splice(this.goodsType.indexOf(val), 1);
				}
			},
			belongingsIn(e) {
				this.radio = 'YES'
			},
			notBelongingsIn(e) {
				this.radio = 'NO'
				if(this.radio == 'NO') {
					this.goods1 = ''
					this.count1 = ''
					this.unit1 = ''
					this.goods2 = ''
					this.count2 = ''
					this.unit2 = ''
					this.goods3 = ''
					this.count3 = ''
					this.unit3 = ''
				}
			},
			getEnterGate() {
				let app = getApp()
				//获取入厂门岗
				uni.request({
					url: app.globalData.baseUrl+'/restzvms045/getEnterGate.do',
					data: {
						"BUSINESS_TYPE": this.businessTypeObj[this.businessType],
						"LOADING_LOCATION": this.placeObj[this.place]
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取入厂门岗')
						console.log(res.data)
						if(res.data.code == '90001') {
							this.door = res.data.data[0].ENTER_GATE
							this.isNeedQueue = res.data.data[0].SFPD
						} else {
							this.door = ''
							uni.showModal({
								content: res.data.message,
								showCancel: false
							})
						}
					}
				});
			},
			submit() {
				if (this.businessType == '成品提货' && this.clientName == '') {
					uni.showModal({
						content: '请输入客户名称',
						showCancel: false
					})
					return false
				}
				if (this.businessType == '成品提货' && this.goodsWeight == '') {
					uni.showModal({
						content: '请输入货物重量',
						showCancel: false
					})
					return false
				}
				if (this.businessType == '成品提货' && this.place == '智能仓库（铜管、铜带、铜板）' && this.goodsType.length == 0) {
					uni.showModal({
						content: '请选择货物类型',
						showCancel: false
					})
					return false
				}
				if (this.place == '其他' && this.reason == '') {
					uni.showModal({
						content: '请输入入厂原因',
						showCancel: false
					})
					return false
				}
				if (this.radio == 'YES' && this.goods1 == '' && this.goods2 == '' && this.goods3 == '') {
					uni.showModal({
						content: '请输入随车入厂财务',
						showCancel: false
					})
					return false
				}
				if (this.door == '') {
					uni.showModal({
						content: '请选择正确的业务类型和装卸货地点获取入厂门岗',
						showCancel: false
					})
					return false
				}
				if (this.businessType == '集装箱原料送货') {
					if (this.boxNo1 == '' || this.boxNo2 == '') {
						uni.showModal({
							content: '请输入箱号',
							showCancel: false
						})
						return false
					}
					if (this.boxNo1.length != 7 || this.boxNo2.length != 7) {
						uni.showModal({
							content: '请输入7位箱号',
							showCancel: false
						})
						return false
					}
				}
				this.loadModal = true;
				let goodsList = []
				let id = 0
				if(this.goods1 != '') {
					id++
					goodsList.push({
						"SERIAL_NUMBER": id,
						"GOODSNAME": this.goods1,
						"WEIGHT": this.count1,
						"UNIT": this.unit1,
					})
				}
				if(this.goods2 != '') {
					id++
					goodsList.push({
						"SERIAL_NUMBER": id,
						"GOODSNAME": this.goods2,
						"WEIGHT": this.count2,
						"UNIT": this.unit2,
					})
				}
				if(this.goods3 != '') {
					id++
					goodsList.push({
						"SERIAL_NUMBER": id,
						"GOODSNAME": this.goods3,
						"WEIGHT": this.count3,
						"UNIT": this.unit3,
					})
				}
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms043/reserveUpdate.do',
					data: {
						"RESERVATION_NO": this.$route.query.reservationNo,
						"RESERVATION_ENTER_TIME": this.datetime,
						"BUSINESS_TYPE": this.businessType,
						"LOADING_LOCATION": this.place,
						"ENTER_GATE": this.door,
						"FIELD16": this.clientName,
						"FIELD17": this.goodsWeight,
						"FIELD18": this.goodsType.toString(),
						"REMARK": this.reason,
						"IS_BELONGINGS_ENTER": this.checked == true?1:0,
						"INTERNAL_CONTACT": this.phone,
						"USERID": this.userid,
						"USERNAME": this.username,
						"CAR_LICENSE": this.car,
						"FIELD15": this.isNeedQueue,
						"UPDATE_ITEMS": goodsList,
						"IS_TERMINAL": 0,
						"FIELD20": 1, //预约厂区：集团
						"FIELD21": this.boxNo
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						if(res.data.code == '90001') {
							this.loadModal = false;
							uni.showModal({
								content: res.data.message,
								showCancel: false,
								success:function(){
									uni.redirectTo({
									    url: '/pages/home/home'
									});
								}
							})
						} else {
							console.log(res.data);
							this.loadModal = false;
							uni.showModal({
								content: res.data.message,
								showCancel: false
							})
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	span{
		color:#ED1C24;
	}
	.door{
		float: right;
	}
	.text-right{
		text-align:right; 
	}
	.bottom-space{
		margin-bottom: 150px;
	}
</style>
