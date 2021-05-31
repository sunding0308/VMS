<template>
	<view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="content text-bold">
				个人信息
			</view>
		</view>
		<form>
			<view class="cu-form-group margin-top header-space">
				<view class="title">姓名<span>*</span></view>
				<input placeholder="请输入姓名" name="input" v-model="name" disabled="true"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号<span>*</span></view>
				<input placeholder="请输入手机号" type="number" name="input" v-model="phone"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">身份证<span>*</span></view>
				<input placeholder="请输入身份证号码" name="input" v-model="identificationNumber" disabled="true"></input>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate1Show=true" v-model.trim="carNo1"></input>
				<plate-input v-if="plate1Show" :plate="carNo1" @export="setPlate1" @close="plate1Show=false"></plate-input>
			</view>
			<view class="cu-form-group">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange1" :value="carTypeIndex1" :range="carRange1">
					<view class="picker">
						{{carType1 != '' ? carTypeShowObj[carType1] : (carTypeIndex1>-1?carRange1[carTypeIndex1]:carRange1[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange1" :value="motorcadeIndex1" :range="motorcadeRange1">
					<view class="picker">
						{{motorcade1 != '' ? motorcade1 : (motorcadeIndex1>-1?motorcadeRange1[motorcadeIndex1]:motorcadeRange1[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="!moreCar2">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate2Show=true" v-model.trim="carNo2"></input>
				<plate-input v-if="plate2Show" :plate="carNo2" @export="setPlate2" @close="plate2Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="!moreCar2">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange2" :value="carTypeIndex2" :range="carRange2">
					<view class="picker">
						{{carType2 != '' ? carTypeShowObj[carType2] : (carTypeIndex2>-1?carRange2[carTypeIndex2]:carRange2[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="!moreCar2">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange2" :value="motorcadeIndex2" :range="motorcadeRange2">
					<view class="picker">
						{{motorcade2 != '' ? motorcade2 : (motorcadeIndex2>-1?motorcadeRange2[motorcadeIndex2]:motorcadeRange2[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="!moreCar3">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate3Show=true" v-model.trim="carNo3"></input>
				<plate-input v-if="plate3Show" :plate="carNo3" @export="setPlate3" @close="plate3Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="!moreCar3">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange3" :value="carTypeIndex3" :range="carRange3">
					<view class="picker">
						{{carType3 != '' ? carTypeShowObj[carType3] : (carTypeIndex3>-1?carRange3[carTypeIndex3]:carRange3[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="!moreCar3">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange3" :value="motorcadeIndex3" :range="motorcadeRange3">
					<view class="picker">
						{{motorcade3 != '' ? motorcade3 : (motorcadeIndex3>-1?motorcadeRange3[motorcadeIndex3]:motorcadeRange3[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="!moreCar4">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate4Show=true" v-model.trim="carNo4"></input>
				<plate-input v-if="plate4Show" :plate="carNo4" @export="setPlate4" @close="plate4Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="!moreCar4">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange4" :value="carTypeIndex4" :range="carRange4">
					<view class="picker">
						{{carType4 != '' ? carTypeShowObj[carType4] : (carTypeIndex4>-1?carRange4[carTypeIndex4]:carRange4[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="!moreCar4">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange4" :value="motorcadeIndex4" :range="motorcadeRange4">
					<view class="picker">
						{{motorcade4 != '' ? motorcade4 : (motorcadeIndex4>-1?motorcadeRange4[motorcadeIndex4]:motorcadeRange4[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="!moreCar5">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate5Show=true" v-model.trim="carNo5"></input>
				<plate-input v-if="plate5Show" :plate="carNo5" @export="setPlate5" @close="plate5Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="!moreCar5">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange5" :value="carTypeIndex5" :range="carRange5">
					<view class="picker">
						{{carType5 != '' ? carTypeShowObj[carType5] : (carTypeIndex5>-1?carRange5[carTypeIndex5]:carRange5[0])}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="!moreCar5">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange5" :value="motorcadeIndex5" :range="motorcadeRange5">
					<view class="picker">
						{{motorcade5 != '' ? motorcade5 : (motorcadeIndex5>-1?motorcadeRange5[motorcadeIndex5]:motorcadeRange5[0])}}
					</view>
				</picker>
			</view>
			<view class="margin-tb-sm text-center" v-show="moreCar">
				<button class="cu-btn round bg-gradual-blue" @click="addMoreCar">添加更多车辆</button>
			</view>
			
<!-- 			<view class="cu-bar bg-white margin-top">
				<view class="action">
					身份证上传(正面)
				</view>
				<view class="action">
					{{idcard_positive == ''?0:1}}/1
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img"  @tap="ViewImage1" :data-url="idcard_positive" v-if="idcard_positive != ''">
					 <image :src="idcard_positive" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg1">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage1" v-if="idcard_positive == ''">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					身份证上传(背面)
				</view>
				<view class="action">
					{{idcard_back == ''?0:1}}/1
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img"  @tap="ViewImage2" :data-url="idcard_back" v-if="idcard_back != ''">
					 <image :src="idcard_back" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg2">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage2" v-if="idcard_back == ''">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view> -->
			<view class="cu-load load-modal" v-if="loadModal">
				<view class="gray-text">上传中...</view>
			</view>
			<view class="padding">
				<button class="cu-btn block bg-blue margin-tb-sm lg bottom-space" type="" @click="submit" :disabled="!canRegister">提交</button>
			</view>
		</form>
		<view class="cu-bar tabbar bg-white position-sticky fixed-bottom">
			<view class="action text-gray" @click="goHome">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray add-action" @click="addReservation">
				<button class="cu-btn cuIcon-add bg-gradual-blue shadow"></button>
				预约
			</view>
			<view class="action text-blue">
				<view class="cuIcon-my">
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import plateInput from '@/components/uni-plate-input/uni-plate-input.vue'
	export default {
		components: {
			plateInput
		},
		data() {
			return {
				name:'',
				phone:'',
				identificationNumber:'',
				carNo1:'',
				plate1Show:false,
				carTypeIndex1:-1,
				carType1:'',
				carRange1: [],
				carTypeObj1: {},
				motorcadeIndex1:-1,
				motorcade1:'',
				motorcadeRange1: [],
				carNo2:'',
				plate2Show:false,
				carTypeIndex2:-1,
				carType2:'',
				carRange2: [],
				carTypeObj2: {},
				carTypeShowObj: {},
				motorcadeIndex2:-1,
				motorcade2:'',
				motorcadeRange2: [],
				carNo3:'',
				plate3Show:false,
				carTypeIndex3:-1,
				carType3:'',
				carRange3: [],
				carTypeObj3: {},
				carTypeShowObj: {},
				motorcadeIndex3:-1,
				motorcade3:'',
				motorcadeRange3: [],
				carNo4:'',
				plate4Show:false,
				carTypeIndex4:-1,
				carType4:'',
				carRange4: [],
				carTypeObj4: {},
				carTypeShowObj: {},
				motorcadeIndex4:-1,
				motorcade4:'',
				motorcadeRange4: [],
				carNo5:'',
				plate5Show:false,
				carTypeIndex5:-1,
				carType5:'',
				carRange5: [],
				carTypeObj5: {},
				carTypeShowObj: {},
				motorcadeIndex5:-1,
				motorcade5:'',
				motorcadeRange5: [],
				moreCar:true,
				moreCar2:true,
				moreCar3:true,
				moreCar4:true,
				moreCar5:true,
				idcard_positive: '',
				idcard_back: '',
				canReservate:true,
				loadModal:false,
				canRegister:true
			}
		},
		computed:{
			...mapState(['openid'])
		},
		methods: {
			onLoad:function(options){
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/getRegisteredInfo.do?userid='+this.openid,
					success: (res)=> {
						console.log('获取用户信息');
						console.log(res.data);
						if(res.data.code == '90001') {
							this.name = res.data.data.USERNAME
							this.phone = res.data.data.MOBILE
							this.identificationNumber = res.data.data.IDCARD
							if(res.data.data.ITEMS[0]) {
								this.carNo1 = res.data.data.ITEMS[0].CAR_LICENSE
								this.carType1 = res.data.data.ITEMS[0].CAR_TYPE
								this.motorcade1 = res.data.data.ITEMS[0].CAR_TEAM
							}
							if(res.data.data.ITEMS[1]) {
								this.carNo2 = res.data.data.ITEMS[1].CAR_LICENSE
								this.carType2 = res.data.data.ITEMS[1].CAR_TYPE
								this.motorcade2 = res.data.data.ITEMS[1].CAR_TEAM
								this.moreCar2 = false
							}
							if(res.data.data.ITEMS[2]) {
								this.carNo3 = res.data.data.ITEMS[2].CAR_LICENSE
								this.carType3 = res.data.data.ITEMS[2].CAR_TYPE
								this.motorcade3 = res.data.data.ITEMS[2].CAR_TEAM
								this.moreCar3 = false
							}
							if(res.data.data.ITEMS[3]) {
								this.carNo4 = res.data.data.ITEMS[3].CAR_LICENSE
								this.carType4 = res.data.data.ITEMS[3].CAR_TYPE
								this.motorcade4 = res.data.data.ITEMS[3].CAR_TEAM
								this.moreCar4 = false
							}
							if(res.data.data.ITEMS[4]) {
								this.carNo5 = res.data.data.ITEMS[4].CAR_LICENSE
								this.carType5 = res.data.data.ITEMS[4].CAR_TYPE
								this.motorcade5 = res.data.data.ITEMS[4].CAR_TEAM
								this.moreCar5 = false
								this.moreCar = false
							} else {
								this.moreCar = true
							}
							// this.idcard_positive = res.data.data.IDCARD_POSITIVE
							// this.idcard_back = res.data.data.IDCARD_BACK
						} else {
							console.log(res.data.message);
						}
					}
				});
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
							console.log('获取预约信息');
							console.log(res.data);
							this.canReservate = false
						} else {
							console.log(res.data);
							this.canReservate = true
						}
					}
				});
				//获取车辆类型枚举
				uni.request({
					url: app.globalData.baseUrl+'/util/getEnum.do',
					data: {
						"ENUM_ID": "CAR_TYPE"
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取车辆类型枚举');
						console.log(res.data);
						if(res.data.code == '90001') {
							this.carRange1.push('请选择')
							this.carRange2.push('请选择')
							this.carRange3.push('请选择')
							this.carRange4.push('请选择')
							this.carRange5.push('请选择')
							this.carTypeShowObj[0] = '请选择'
							this.carTypeObj1['请选择'] = "0"
							this.carTypeObj2['请选择'] = "0"
							this.carTypeObj3['请选择'] = "0"
							this.carTypeObj4['请选择'] = "0"
							this.carTypeObj5['请选择'] = "0"
							res.data.data.forEach((item, i) => {
								this.carRange1.push(item.EMUN_VALUE_ZH)
								this.carRange2.push(item.EMUN_VALUE_ZH)
								this.carRange3.push(item.EMUN_VALUE_ZH)
								this.carRange4.push(item.EMUN_VALUE_ZH)
								this.carRange5.push(item.EMUN_VALUE_ZH)
								this.carTypeObj1[item.EMUN_VALUE_ZH] = item.EMUN_VALUE_ID
								this.carTypeObj2[item.EMUN_VALUE_ZH] = item.EMUN_VALUE_ID
								this.carTypeObj3[item.EMUN_VALUE_ZH] = item.EMUN_VALUE_ID
								this.carTypeObj4[item.EMUN_VALUE_ZH] = item.EMUN_VALUE_ID
								this.carTypeObj5[item.EMUN_VALUE_ZH] = item.EMUN_VALUE_ID
								this.carTypeShowObj[item.EMUN_VALUE_ID] = item.EMUN_VALUE_ZH
							})
						}
					}
				});
				//获取车队列表
				uni.request({
					url: app.globalData.baseUrl+'/restzvms046/getVehicleTeamList.do',
					method:"GET",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('获取车队列表');
						console.log(res.data);
						if(res.data.code == '90001') {
							this.motorcadeRange1.push('请选择')
							this.motorcadeRange2.push('请选择')
							this.motorcadeRange3.push('请选择')
							this.motorcadeRange4.push('请选择')
							this.motorcadeRange5.push('请选择')
							res.data.data.forEach((item, i) => {
								this.motorcadeRange1.push(item.TEAMNAME)
								this.motorcadeRange2.push(item.TEAMNAME)
								this.motorcadeRange3.push(item.TEAMNAME)
								this.motorcadeRange4.push(item.TEAMNAME)
								this.motorcadeRange5.push(item.TEAMNAME)
							})
						}
					}
				});
			},
			setPlate1(plate){
				if(plate.length >= 7) this.carNo1 = plate
				this.plate1Show = false
			},
			setPlate2(plate){
				if(plate.length >= 7) this.carNo2 = plate
				this.plate2Show = false
			},
			setPlate3(plate){
				if(plate.length >= 7) this.carNo3 = plate
				this.plate3Show = false
			},
			setPlate4(plate){
				if(plate.length >= 7) this.carNo4 = plate
				this.plate4Show = false
			},
			setPlate5(plate){
				if(plate.length >= 7) this.carNo5 = plate
				this.plate5Show = false
			},
			CarTypeChange1(e) {
				this.carTypeIndex1 = e.detail.value
				this.carType1 = this.carTypeObj1[this.carRange1[this.carTypeIndex1]]
			},
			MotorcadeChange1(e) {
				this.motorcadeIndex1 = e.detail.value
				this.motorcade1 = this.motorcadeRange1[this.motorcadeIndex1]
			},
			CarTypeChange2(e) {
				this.carTypeIndex2 = e.detail.value
				this.carType2 = this.carTypeObj2[this.carRange2[this.carTypeIndex2]]
			},
			MotorcadeChange2(e) {
				this.motorcadeIndex2 = e.detail.value
				this.motorcade2 = this.motorcadeRange2[this.motorcadeIndex2]
			},
			CarTypeChange3(e) {
				this.carTypeIndex3 = e.detail.value
				this.carType3 = this.carTypeObj3[this.carRange3[this.carTypeIndex3]]
			},
			MotorcadeChange3(e) {
				this.motorcadeIndex3 = e.detail.value
				this.motorcade3 = this.motorcadeRange3[this.motorcadeIndex3]
			},
			CarTypeChange4(e) {
				this.carTypeIndex4 = e.detail.value
				this.carType4 = this.carTypeObj4[this.carRange4[this.carTypeIndex4]]
			},
			MotorcadeChange4(e) {
				this.motorcadeIndex4 = e.detail.value
				this.motorcade4 = this.motorcadeRange4[this.motorcadeIndex4]
			},
			CarTypeChange5(e) {
				this.carTypeIndex5 = e.detail.value
				this.carType5 = this.carTypeObj5[this.carRange5[this.carTypeIndex5]]
			},
			MotorcadeChange5(e) {
				this.motorcadeIndex5 = e.detail.value
				this.motorcade5 = this.motorcadeRange5[this.motorcadeIndex5]
			},
			addMoreCar() {
				this.moreCar2 = false
				this.moreCar3 = false
				this.moreCar4 = false
				this.moreCar5 = false
				this.moreCar = !this.moreCar
			},
			ChooseImage1() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log('临时文件信息')
						console.log(res)
						this.idcard_positive = res.tempFilePaths[0]
						this.loadModal = true
						this.canRegister = false
						let app = getApp()
						uni.uploadFile({
						    url: app.globalData.baseUrl+'/restzvms042/uploadFiles.do',// 后端api接口
						    filePath: this.idcard_positive,// uni.chooseImage函数调用后获取的本地文件路劲
						    name: 'file',//后端通过'file'获取上传的文件对象
						    header:{},
						    success:(res) => {
								let resObj = JSON.parse(res.data)
								console.log(resObj)
						        if (resObj.code == '90001'){
						            console.log('文件上传成功')
									this.idcard_positive = resObj.data.FILE_URL
									this.loadModal = false
									this.canRegister = true
						        }
						    }
						});
					}
				});
			},
			ViewImage1(e) {
				uni.previewImage({
					urls: [this.idcard_positive],
					current: this.idcard_positive
				});
			},
			DelImg1(e) {
				uni.showModal({
					content: '确定要删除这张图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.idcard_positive = ''
						}
					}
				})
			},
			ChooseImage2() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log('临时文件信息')
						console.log(res)
						this.idcard_back = res.tempFilePaths[0]
						this.loadModal = true
						this.canRegister = false
						let app = getApp()
						uni.uploadFile({
						    url: app.globalData.baseUrl+'/restzvms042/uploadFiles.do',// 后端api接口
						    filePath: this.idcard_back,// uni.chooseImage函数调用后获取的本地文件路劲
						    name: 'file',//后端通过'file'获取上传的文件对象
						    header:{},
						    success:(res) => {
								let resObj = JSON.parse(res.data)
								console.log(resObj)
						        if (resObj.code == '90001'){
						            console.log('文件上传成功')
									this.idcard_back = resObj.data.FILE_URL
									this.loadModal = false
									this.canRegister = true
						        }
						    }
						});
					}
				});
			},
			ViewImage2(e) {
				uni.previewImage({
					urls: [this.idcard_back],
					current: this.idcard_back
				});
			},
			DelImg2(e) {
				uni.showModal({
					content: '确定要删除这张图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.idcard_back = ''
						}
					}
				})
			},
			getImg() {
				uni.getImageInfo({
					src: this.idcard_positive,
					success: function (image) {
						console.log(image);
					}
				});
			},
			submit() {
				if(!this.validate()) {
					return false
				}
				this.register()
			},
			validate() {
				// 表单校验
				let loginRules = [
					{name: 'name', type: 'required', errmsg: '请输入姓名'},
					{name: 'phone', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
					{name: 'identificationNumber', required: true, type: 'lengthRange', min: 18, max: 18, errmsg: '请输入正确的身份证'},
					{name: 'carNo1', required: true, type: 'lengthRange', min: 7, max: 8, errmsg: '请输入正确的车牌号'}
				]
				let userInfo = {
					name:this.name,
					phone:this.phone,
					identificationNumber:this.identificationNumber,
					carNo1:this.carNo1
				}
				let valLoginRes = this.$validate.validate(userInfo, loginRules)
				
				if (!valLoginRes.isOk) {
					uni.showModal({
						content: valLoginRes.errmsg,
						showCancel: false
					})
					return false
				}
				if (this.carType1 == '' || this.carType1 == '0') {
					uni.showModal({
						content: '请选择车辆类型',
						showCancel: false
					})
					return false
				}
				if (this.motorcade1 == '' || this.motorcade1 == '请选择') {
					uni.showModal({
						content: '请选择所属车队',
						showCancel: false
					})
					return false
				}
				if (this.carNo2 != '') {
					if (this.carType2 == '' || this.carType2 == '0') {
						uni.showModal({
							content: '请选择车辆类型',
							showCancel: false
						})
						return false
					}
					if (this.motorcade2 == '' || this.motorcade2 == '请选择') {
						uni.showModal({
							content: '请选择所属车队',
							showCancel: false
						})
						return false
					}
				}
				if (this.carNo3 != '') {
					if (this.carType3 == '' || this.carType3 == '0') {
						uni.showModal({
							content: '请选择车辆类型',
							showCancel: false
						})
						return false
					}
					if (this.motorcade3 == '' || this.motorcade3 == '请选择') {
						uni.showModal({
							content: '请选择所属车队',
							showCancel: false
						})
						return false
					}
				}
				if (this.carNo4 != '') {
					if (this.carType4 == '' || this.carType4 == '0') {
						uni.showModal({
							content: '请选择车辆类型',
							showCancel: false
						})
						return false
					}
					if (this.motorcade4 == '' || this.motorcade4 == '请选择') {
						uni.showModal({
							content: '请选择所属车队',
							showCancel: false
						})
						return false
					}
				}
				if (this.carNo5 != '') {
					if (this.carType5 == '' || this.carType5 == '0') {
						uni.showModal({
							content: '请选择车辆类型',
							showCancel: false
						})
						return false
					}
					if (this.motorcade5 == '' || this.motorcade5 == '请选择') {
						uni.showModal({
							content: '请选择所属车队',
							showCancel: false
						})
						return false
					}
				}
				// if (this.idcard_positive == '') {
				// 	uni.showModal({
				// 		content: '请上传身份证正面照片',
				// 		showCancel: false
				// 	})
				// 	return false
				// }
				// if (this.idcard_back == '') {
				// 	uni.showModal({
				// 		content: '请上传身份证背面照片',
				// 		showCancel: false
				// 	})
				// 	return false
				// }
				return true
			},
			register() {
				let carList = [];
				if(this.carNo1 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo1,
						"CAR_TYPE": this.carType1,
						"CAR_TEAM": this.motorcade1
					})
				}
				if(this.carNo2 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo2,
						"CAR_TYPE": this.carType2,
						"CAR_TEAM": this.motorcade2
					})
				}
				if(this.carNo3 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo3,
						"CAR_TYPE": this.carType3,
						"CAR_TEAM": this.motorcade3
					})
				}
				if(this.carNo4 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo4,
						"CAR_TYPE": this.carType4,
						"CAR_TEAM": this.motorcade4
					})
				}
				if(this.carNo5 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo5,
						"CAR_TYPE": this.carType5,
						"CAR_TEAM": this.motorcade5
					})
				}
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/updateRegisteredInfo.do',
					data: {
						"USERID": this.openid,
						"USERNAME": this.name,
						"IDCARD": this.identificationNumber,
						"MOBILE": this.phone,
						"IDCARD_POSITIVE": this.idcard_positive,
						"IDCARD_BACK": this.idcard_back,
						"UPDATE_ITEMS": carList
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: function (res) {
						if(res.data.code == '90001') {
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
							uni.showModal({
								content: res.data.message,
								showCancel: false
							})
						}
					}
				});
			},
			goHome() {
				uni.redirectTo({
				    url: '/pages/home/home'
				});
			},
			addReservation() {
				if(this.canReservate) {
					uni.redirectTo({
						url: '/pages/terms/terms?toWhere=reservation'
					});	
				} else {
					uni.showModal({
						content: '您已预约，无法进行多次预约！',
						showCancel: false
					})
				}
			},
		}
	}
</script>

<style>
	span{
		color:#ED1C24;
	}
	.bottom-space{
		margin-bottom: 150px;
	}
	.cu-capsule{
		height: 28px;
	}
</style>
