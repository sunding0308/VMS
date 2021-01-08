<template>
	<view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="content text-bold">
				司机注册
			</view>
		</view>
		<form>
			<view class="cu-form-group margin-top header-space">
				<view class="title">姓名<span>*</span></view>
				<input placeholder="请输入姓名" name="input" v-model="name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号<span>*</span></view>
				<input placeholder="请输入手机号" type="number" name="input" v-model="phone"></input>
				<view class="grid">
					<view class="margin-tb-sm text-center">
						<button class="cu-btn round lines-blue" shadow :disabled="disabled" @click="sendCode">{{sendSms}}</button>
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码<span>*</span></view>
				<input placeholder="请输入验证码" name="input" v-model="captcha"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">身份证<span>*</span></view>
				<input placeholder="请输入身份证号码" name="input" v-model.trim="identificationNumber"></input>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">车牌号<span>*</span></view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate1Show=true" v-model.trim="carNo1"></input>
				<plate-input v-if="plate1Show" :plate="carNo1" @export="setPlate1" @close="plate1Show=false"></plate-input>
			</view>
			<view class="cu-form-group">
				<view class="title">车辆类型<span>*</span></view>
				<picker @change="CarTypeChange1" :value="carTypeIndex1" :range="carRange1">
					<view class="picker">
						{{carTypeIndex1>-1?carRange1[carTypeIndex1]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">所属车队<span>*</span></view>
				<picker @change="MotorcadeChange1" :value="motorcadeIndex1" :range="motorcadeRange1">
					<view class="picker">
						{{motorcadeIndex1>-1?motorcadeRange1[motorcadeIndex1]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="moreCar">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate2Show=true" v-model.trim="carNo2"></input>
				<plate-input v-if="plate2Show" :plate="carNo2" @export="setPlate2" @close="plate2Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="moreCar">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange2" :value="carTypeIndex2" :range="carRange2">
					<view class="picker">
						{{carTypeIndex2>-1?carRange2[carTypeIndex2]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="moreCar">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange2" :value="motorcadeIndex2" :range="motorcadeRange2">
					<view class="picker">
						{{motorcadeIndex2>-1?motorcadeRange2[motorcadeIndex2]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="moreCar">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate3Show=true" v-model.trim="carNo3"></input>
				<plate-input v-if="plate3Show" :plate="carNo3" @export="setPlate3" @close="plate3Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="moreCar">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange3" :value="carTypeIndex3" :range="carRange3">
					<view class="picker">
						{{carTypeIndex3>-1?carRange3[carTypeIndex3]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="moreCar">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange3" :value="motorcadeIndex3" :range="motorcadeRange3">
					<view class="picker">
						{{motorcadeIndex3>-1?motorcadeRange3[motorcadeIndex3]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="moreCar">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate4Show=true" v-model.trim="carNo4"></input>
				<plate-input v-if="plate4Show" :plate="carNo4" @export="setPlate4" @close="plate4Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="moreCar">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange4" :value="carTypeIndex4" :range="carRange4">
					<view class="picker">
						{{carTypeIndex4>-1?carRange4[carTypeIndex4]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="moreCar">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange4" :value="motorcadeIndex4" :range="motorcadeRange4">
					<view class="picker">
						{{motorcadeIndex4>-1?motorcadeRange4[motorcadeIndex4]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-show="moreCar">
				<view class="title">车牌号</view>
				<input placeholder="请输入车牌号" name="input" disabled="true" @tap="plate5Show=true" v-model.trim="carNo5"></input>
				<plate-input v-if="plate5Show" :plate="carNo5" @export="setPlate5" @close="plate5Show=false"></plate-input>
			</view>
			<view class="cu-form-group"  v-show="moreCar">
				<view class="title">车辆类型</view>
				<picker @change="CarTypeChange5" :value="carTypeIndex5" :range="carRange5">
					<view class="picker">
						{{carTypeIndex5>-1?carRange5[carTypeIndex5]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="moreCar">
				<view class="title">所属车队</view>
				<picker @change="MotorcadeChange5" :value="motorcadeIndex5" :range="motorcadeRange5">
					<view class="picker">
						{{motorcadeIndex5>-1?motorcadeRange5[motorcadeIndex5]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="margin-tb-sm text-center" v-show="!moreCar">
				<button class="cu-btn round bg-gradual-blue" @click="addMoreCar">添加更多车辆</button>
			</view>
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					身份证上传(正面)<span>*</span>
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
					身份证上传(背面)<span>*</span>
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
			</view>
			<view class="cu-load load-modal" v-if="loadModal">
				<view class="gray-text">上传中...</view>
			</view>
			<view class="padding">
				<button class="cu-btn block bg-blue margin-tb-sm lg" type="" @click="submit" :disabled="!canRegister">注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import {SFID} from '@/api/idcard-validate.js';
	import plateInput from '@/components/uni-plate-input/uni-plate-input-register.vue'
	export default {
		components: {
			plateInput
		},
		data() {
			return {
				name:'',
				phone:'',
				sendSms:'获取验证码',
				captcha:'',
				returnedCaptcha:'',
				disabled:false,
				identificationNumber:'',
				carNo1:'',
				plate1Show:false,
				carTypeIndex1:-1,
				carRange1: [],
				carTypeObj1: {},
				motorcadeIndex1:-1,
				motorcadeRange1: [],
				carNo2:'',
				plate2Show:false,
				carTypeIndex2:-1,
				carRange2: [],
				carTypeObj2: {},
				motorcadeIndex2:-1,
				motorcadeRange2: [],
				carNo3:'',
				plate3Show:false,
				carTypeIndex3:-1,
				carRange3: [],
				carTypeObj3: {},
				motorcadeIndex3:-1,
				motorcadeRange3: [],
				carNo4:'',
				plate4Show:false,
				carTypeIndex4:-1,
				carRange4: [],
				carTypeObj4: {},
				motorcadeIndex4:-1,
				motorcadeRange4: [],
				carNo5:'',
				plate5Show:false,
				carTypeIndex5:-1,
				carRange5: [],
				carTypeObj5: {},
				motorcadeIndex5:-1,
				motorcadeRange5: [],
				moreCar:false,
				idcard_positive: '',
				idcard_back: '',
				loadModal:false,
				canRegister:true
			}
		},
		computed:{
			...mapState(['openid']),
			carType1:function() {
				return this.carTypeIndex1 == -1 ? '' : this.carRange1[this.carTypeIndex1]
			},
			motorcade1:function() {
				return this.motorcadeIndex1 == -1 ? '' : this.motorcadeRange1[this.motorcadeIndex1]
			},
			carType2:function() {
				return this.carTypeIndex2 == -1 ? '' : this.carRange2[this.carTypeIndex2]
			},
			motorcade2:function() {
				return this.motorcadeIndex2 == -1 ? '' : this.motorcadeRange2[this.motorcadeIndex2]
			},
			carType3:function() {
				return this.carTypeIndex3 == -1 ? '' : this.carRange3[this.carTypeIndex3]
			},
			motorcade3:function() {
				return this.motorcadeIndex3 == -1 ? '' : this.motorcadeRange3[this.motorcadeIndex3]
			},
			carType4:function() {
				return this.carTypeIndex4 == -1 ? '' : this.carRange4[this.carTypeIndex4]
			},
			motorcade4:function() {
				return this.motorcadeIndex4 == -1 ? '' : this.motorcadeRange4[this.motorcadeIndex4]
			},
			carType5:function() {
				return this.carTypeIndex5 == -1 ? '' : this.carRange5[this.carTypeIndex5]
			},
			motorcade5:function() {
				return this.motorcadeIndex5 == -1 ? '' : this.motorcadeRange5[this.motorcadeIndex5]
			}
		},
		methods: {
			onLoad: function(options) {
				let app = getApp()
				//获取车辆类型枚举
				uni.request({
					url: app.globalData.baseUrl+'/util/getEnum.do',
					data: {
						"ENUM_ID": "CAR_TYPE"
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log(res.data);
						if(res.data.code == '90001') {
							this.carRange1.push('请选择')
							this.carRange2.push('请选择')
							this.carRange3.push('请选择')
							this.carRange4.push('请选择')
							this.carRange5.push('请选择')
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
			sendCode(){
				let loginRules = [
					{name: 'phone', required: true, type: 'phone', errmsg: '请输入正确的手机号'}
				]
				let phone = {
					phone:this.phone
				}
				let valLoginRes = this.$validate.validate(phone, loginRules)
				
				if (!valLoginRes.isOk) {
					uni.showModal({
						content: valLoginRes.errmsg,
						showCancel: false
					})
					return false
				}
				let self = this
				//验证码
				self.disabled = true;
				var time = 60;//时间为10s，可以按情况更改 
				var timer = setInterval(fun, 1000);//设置定时器
				function fun() {
					time--;
					if(time>=0) {
						self.sendSms = time + "s后重新发送"; 
					}else if(time<0){ 
						self.sendSms = "重新获取验证码"; 
						self.disabled = false;//倒计时结束能够重新点击发送的按钮 
						clearInterval(timer);//清除定时器 
						time = 60;//设置循环重新开始条件 
					} 
				}
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/sendCodeMessage.do',
					data: {
						"MOBILE": this.phone
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log('发送验证码')
						console.log(res.data)
						if(res.data.code == '90001') {
							this.returnedCaptcha = res.data.data.YZM
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
			},
			MotorcadeChange1(e) {
				this.motorcadeIndex1 = e.detail.value
			},
			CarTypeChange2(e) {
				this.carTypeIndex2 = e.detail.value
			},
			MotorcadeChange2(e) {
				this.motorcadeIndex2 = e.detail.value
			},
			CarTypeChange3(e) {
				this.carTypeIndex3 = e.detail.value
			},
			MotorcadeChange3(e) {
				this.motorcadeIndex3 = e.detail.value
			},
			CarTypeChange4(e) {
				this.carTypeIndex4 = e.detail.value
			},
			MotorcadeChange4(e) {
				this.motorcadeIndex4 = e.detail.value
			},
			CarTypeChange5(e) {
				this.carTypeIndex5 = e.detail.value
			},
			MotorcadeChange5(e) {
				this.motorcadeIndex5 = e.detail.value
			},
			addMoreCar() {
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
					{name: 'captcha', required: true, type: 'number', errmsg: '请输入验证码'},
					{name: 'identificationNumber', required: true, type: 'lengthRange', min: 18, max: 18, errmsg: '请输入正确的身份证号'},
					{name: 'carNo1', required: true, type: 'lengthRange', min: 7, max: 8, errmsg: '请输入正确的车牌号'}
				]
				let userInfo = {
					name:this.name,
					phone:this.phone,
					captcha:this.captcha,
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
				if (!SFID(this.identificationNumber)) {
					uni.showModal({
						content: '请输入正确的身份证号',
						showCancel: false
					})
					return false
				}
				if (this.carType1 == '' || this.carType1 == '请选择') {
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
					if (this.carType2 == '' || this.carType2 == '请选择') {
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
					if (this.carType3 == '' || this.carType3 == '请选择') {
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
					if (this.carType4 == '' || this.carType4 == '请选择') {
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
					if (this.carType5 == '' || this.carType5 == '请选择') {
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
				if (this.idcard_positive == '') {
					uni.showModal({
						content: '请上传身份证正面照片',
						showCancel: false
					})
					return false
				}
				if (this.idcard_back == '') {
					uni.showModal({
						content: '请上传身份证背面照片',
						showCancel: false
					})
					return false
				}
				if (this.returnedCaptcha != this.captcha) {
					uni.showModal({
						content: '请输入正确的验证码',
						showCancel: false
					})
					return false
				}
				return true
			},
			register() {
				let carList = [];
				if(this.carNo1 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo1,
						"CAR_TYPE": this.carTypeObj1[this.carType1],
						"CAR_TEAM": this.motorcade1
					})
				}
				if(this.carNo2 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo2,
						"CAR_TYPE": this.carTypeObj2[this.carType2],
						"CAR_TEAM": this.motorcade2
					})
				}
				if(this.carNo3 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo3,
						"CAR_TYPE": this.carTypeObj3[this.carType3],
						"CAR_TEAM": this.motorcade3
					})
				}
				if(this.carNo4 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo4,
						"CAR_TYPE": this.carTypeObj4[this.carType4],
						"CAR_TEAM": this.motorcade4
					})
				}
				if(this.carNo5 != '') {
					carList.push({
						"CAR_LICENSE": this.carNo5,
						"CAR_TYPE": this.carTypeObj5[this.carType5],
						"CAR_TEAM": this.motorcade5
					})
				}
				let app = getApp()
				uni.request({
					url: app.globalData.baseUrl+'/restzvms042/registered.do',
					data: {
						"WECHATID": this.openid,
						"USERNAME": this.name,
						"IDCARD": this.identificationNumber,
						"MOBILE": this.phone,
						"IDCARD_POSITIVE": this.idcard_positive,
						"IDCARD_BACK": this.idcard_back,
						"listZvms042Item": carList
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: function (res) {
						if(res.data.code == '90002') {
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
			}
		}
	}
</script>

<style>
	span{
		color:#ED1C24;
	}
	.padding{
		margin-bottom: 100px;
	}
	.cu-capsule{
		height: 28px;
	}
</style>
