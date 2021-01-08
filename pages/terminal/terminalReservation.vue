<template>
	<view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="content text-bold">
				车辆预约自助终端
			</view>
		</view>
		
		<view class="cu-form-group margin-top header-space">
			<view class="title">车牌号<span>*</span></view>
			<input placeholder="请输入车牌号" name="input" disabled="true" class="text-right" @tap="plateShow=true" v-model.trim="carNo"></input>
			<plate-input v-if="plateShow" :plate="carNo" @export="setPlate" @close="plateShow=false"></plate-input>
		</view>
		<view class="cu-form-group">
			<view class="title">手机号<span>*</span></view>
			<input placeholder="请输入" class="text-right" type="number" maxlength="11" name="input" v-model.trim="mobile"></input>
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
			<view class="title">业务类型<span>*</span></view>
			<picker @change="BusinessTypeChange" :value="businessTypeIndex" :range="businessTypeRange">
				<view class="picker">
					{{businessTypeIndex>-1?businessTypeRange[businessTypeIndex]:'请选择'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">装卸货地点<span>*</span></view>
			<picker @change="PlaceChange" :value="placeIndex" :range="placeRange">
				<view class="picker">
					{{placeIndex>-1?placeRange[placeIndex]:'请选择'}}
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
		<view class="padding">
			<button style="margin-bottom: 30px;" class="cu-btn block bg-blue margin-tb-sm lg" type="" @click="submit">提交</button>
			<button class="cu-btn block bg-grey margin-tb-sm lg bottom-space" type="" @click="back">返回</button>
		</view>
	</view>
</template>

<script>
	import plateInput from '@/components/uni-plate-input/uni-plate-input-register.vue'
	import {dateFormat} from '@/api/date-format.js';
	export default {
		components: {
			plateInput
		},
		data() {
			return {
				carNo:'',
				plateShow:false,
				date:'',
				time:'',
				businessTypeIndex:-1,
				businessTypeRange: [],
				businessTypeObj: {},
				placeIndex:-1,
				placeRange: [],
				placeObj: {},
				ifNeedClientName:false,
				clientName:'',
				ifNeedGoodsWeight:false,
				goodsWeight:'',
				ifNeedReason:false,
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
				door:'-',
				isNeedQueue:'',
				phone:'',
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
				mobile:'',
				username:'Terminal',
			}
		},
		computed:{
			datetime:function() {
				return this.date + ' ' +this.time
			},
			businessType:function() {
				return this.businessTypeIndex == -1 ? '请选择' : this.businessTypeRange[this.businessTypeIndex]
			},
			place:function() {
				return this.placeIndex == -1 ? '请选择' : this.placeRange[this.placeIndex]
			},
		},
		methods: {
			onLoad:function(options){
				this.date = dateFormat('YYYY-mm-dd',new Date())
				this.time = new Date().toTimeString().slice(0, 5)
				let app = getApp()
				//获取业务类型枚举
				uni.request({
					url: 'http://192.168.60.160:8080/jtvms/util/getEnum.do',
					data: {
						"ENUM_ID": "BUSINESS_TYPE"
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取业务类型')
						console.log(res.data)
						if(res.data.code == '90001') {
							this.businessTypeRange.push('请选择')
							res.data.data.forEach((item, i) => {
								this.businessTypeRange.push(item.EMUN_VALUE_ZH)
								this.businessTypeObj[item.EMUN_VALUE_ZH] = (item.EMUN_VALUE_ID)
							})
							//获取装卸货地点枚举
							uni.request({
								url: 'http://192.168.60.160:8080/jtvms/restzvms045/getLoadingLocation.do',
								data: {
									"BUSINESS_TYPE": this.businessTypeObj[this.businessTypeRange[0]]
								},
								method:"POST",
								header : {'content-type':'application/json'},
								success: (res)=> {
									console.log('获取装卸货地点')
									console.log(res.data)
									if(res.data.code == '90001') {
										this.placeRange.push('请选择')
										res.data.data.forEach((item, i) => {
											this.placeRange.push(item.LOADING_LOCATION_DESC)
											this.placeObj[item.LOADING_LOCATION_DESC] = (item.LOADING_LOCATION)
										})
									}
								}
							});
						}
					}
				});
			},
			setPlate(plate){
				if(plate.length >= 7) this.carNo = plate
				this.plateShow = false
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			BusinessTypeChange(e) {
				//控制客户名称、货物重量显示隐藏 3:成品提货
				if (e.detail.value == 3) {
					this.ifNeedClientName = true
					this.ifNeedGoodsWeight = true
				} else {
					this.ifNeedClientName = false
					this.ifNeedGoodsWeight = false
					this.clientName = ''
					this.goodsWeight = ''
				}
				//货物类型隐藏
				this.ifNeedGoodsType = false
				this.checkbox.forEach((item, index)=>{
					item.checked = false
				})
				this.goodsType = []
				//重置装卸货地点
				this.businessTypeIndex = e.detail.value
				this.placeIndex = -1
				this.placeRange = []
				this.placeObj = {}
				let app = getApp()
				//获取装卸货地点枚举
				uni.request({
					url: 'http://192.168.60.160:8080/jtvms/restzvms045/getLoadingLocation.do',
					data: {
						"BUSINESS_TYPE": this.businessTypeObj[this.businessTypeRange[this.businessTypeIndex]]
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取装卸货地点')
						console.log(res.data)
						if(res.data.code == '90001') {
							this.placeRange.push('请选择')
							res.data.data.forEach((item, i) => {
								this.placeRange.push(item.LOADING_LOCATION_DESC)
								this.placeObj[item.LOADING_LOCATION_DESC] = (item.LOADING_LOCATION)
							})
							this.getEnterGate()
						}
					}
				});
			},
			PlaceChange(e) {
				//控制入厂原因显示隐藏 3:其他
				if (this.businessType == '其他' && e.detail.value == 3) {
					this.ifNeedReason = true
				} else {
					this.ifNeedReason = false
					this.reason = ''
				}
				//控制货物类型显示隐藏 8:智能仓库（铜管、铜带、铜板）
				if (this.businessType == '成品提货' && e.detail.value == 8) {
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
						case 1:
							this.goodsType.push('棒线')
							break
						case 3:
							this.goodsType.push('电材')
							break
						case 6:
							this.goodsType.push('铜棒')
							break
						case 7:
							this.goodsType.push('铜排')
							break
						default:
							break
					}	
				}
				this.placeIndex = e.detail.value
				this.getEnterGate()
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
					url: 'http://192.168.60.160:8080/jtvms/restzvms045/getEnterGate.do',
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
							this.door = '-'
							this.isNeedQueue = ''
						}
					}
				});
			},
			submit() {
				if (this.mobile.length != 11) {
					uni.showModal({
						content: '请输入正确的手机号',
						showCancel: false
					})
					return false
				}
				if (this.businessType == '' || this.businessType == '请选择') {
					uni.showModal({
						content: '请选择业务类型',
						showCancel: false
					})
					return false
				}
				if (this.place == '' || this.place == '请选择') {
					uni.showModal({
						content: '请选择装卸货地点',
						showCancel: false
					})
					return false
				}
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
				if (this.door == '-' || this.isNeedQueue == '') {
					uni.showModal({
						content: '请选择正确的业务类型和装卸货地点获取入厂门岗',
						showCancel: false
					})
					return false
				}
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
				uni.showLoading({
					title: '打印预约单中...'
				});
				let app = getApp()
				uni.request({
					url: 'http://192.168.60.160:8080/jtvms/restzvms043/reserve.do',
					data: {
						"RESERVATION_ENTER_TIME": this.datetime,
						"BUSINESS_TYPE": this.businessType,
						"LOADING_LOCATION": this.place,
						"ENTER_GATE": this.door,
						"FIELD16": this.clientName,
						"FIELD17": this.goodsWeight,
						"FIELD18": this.goodsType.toString(),
						"REMARK": this.reason,
						"IS_BELONGINGS_ENTER": this.radio == 'YES'?1:0,
						"INTERNAL_CONTACT": this.phone,
						"USERID": this.mobile,
						"USERNAME": this.username,
						"CAR_LICENSE": this.carNo,
						"FIELD15": this.isNeedQueue,
						"listZvms043Item": goodsList,
						"IS_TERMINAL": 1
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						if(res.data.code == '90001') {
							uni.hideLoading();
							this.doQrcodePrint();
						} else {
							console.log(res.data);
							uni.hideLoading()
							uni.showModal({
								content: res.data.message,
								showCancel: false
							})
						}
					}
				});
			},
			doQrcodePrint(){
				var printWs = '';
				// 使用本地打印
				var qrcodeinfo = '{\"url\":\"http://192.168.1.93:8080/WebReport/ReportServer?reportlet=ZTVMS%2FZT_VMS_S3_001_P.cpt&CAR_LICENSE='+this.carNo.substring(2)+'&format=PDF\",\"direction\":\"false\"}';
				if(printWs.readyState==1) {
						printWs.send(qrcodeinfo)
				} else {
						printWs = new WebSocket("ws://127.0.0.1:7777/print");
						// printWs = new WebSocket("ws://192.168.3.52:7777/print");
						printWs.onopen = function () {
							console.log('链接已open');
							printWs.send(qrcodeinfo)
	        			};
			        printWs.onclose = function () {
			            console.log('链接已断开');
			            printWs.close();
			        };
					uni.showLoading({
						title: '打印完成'
					});
					setTimeout(()=>{
						uni.redirectTo({
							url: '/pages/terminal/index'
						});
					},1000)
				}
			},
			back() {
				uni.redirectTo({
				    url: '/pages/terminal/index'
				});
			}
		}
	}
</script>

<style>
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
	.sort{
		height:auto;
	}
	li{
		font-size:x-large;
		color: #747070;
	}
	.chosen {
	  color: #fff;
	  background-color: #0081ff;
	}
</style>
