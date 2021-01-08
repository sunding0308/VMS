<template>
	<view>
		<view class="cu-modal" :class="modalName=='DialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content"><b>温馨提示</b></view>
				</view>
				<view class="padding-xl">
					<p>尊敬的客户及司机朋友：</p>
					<tr>您好！</tr>
					<tr>欢迎来到金田集团，为了确保您的权利和利益，本公司相关规定请您知悉并予以遵守：</tr>
					<tr>1、货车进入厂区时，每辆车上限坐两人，未成年人不得进入公司，否则，发生意外事故，后果自负。如有需要请到门卫室休息。</tr>
					<tr><b>2、如果您有自带货品（特别是铜、锌、铝等金属产品或材料），请您入司时在门卫保安处登记说明，出厂时凭单出厂，非贵重物品也可以在门卫处暂时存放。如未事先登记，在本公司内一经发现，一律按偷盗行为处理。</b><tr>
					<tr><b>3、装、卸货物请按照指定线路、限速行驶，禁鸣喇叭；车辆如需停放，请停放在指定地点。</b><tr>
					<tr><b>4、进入厂区内过磅的车辆，禁止以任何形式给车辆水箱加水或放水、扔木块等擅自变动车辆重量的行为，违者按偷盗处理。</b><tr>
					<tr>5、厂区内禁止随地大小便、洗车、洗衣等，如发生，视为违规处理。</b>
					<tr>6、厂区内不得随意吸烟，如有需要请到指定地点吸烟。</tr>
					<tr><b>7、未经允许，不得进入车间，禁止以任何形式在车间内、外拍摄。</b><tr>
					<tr>8、请勿乱扔果皮纸屑、饮料罐、塑料袋等杂物。</tr>
					<tr>9、进入车间的装卸货物人员，禁止穿拖鞋、背心，乱走乱窜等，请服从我公司现场指挥人员安排，佩戴安全帽，走安全通道，或在指定场所等待。</tr>
					<tr>10、装卸货物过程中，为确保安全，请于车辆保持5米以上距离，否则停止货物装卸。</tr>
					<tr>11、未经门卫检查，严禁私自在门卫或围墙边递交物品，如发生，视为违规处理。。</tr>
					<tr>12、严禁违规跨越或绕过门禁。</tr>
					<tr>13、如发生突发事件，请服从现场指挥人员安排。</tr>
					<tr>14、出厂货物，一律凭与货单相符的出厂单出厂，违者将一律按偷盗处理。</tr>
					<tr>15、拒不听从保安指挥者，按违规处理，造成交通堵塞或不良影响者，禁止该司机进入公司。</tr>
					<tr>16、有酒驾嫌疑人员、车辆一律禁止进入公司，违者承担一切后果并禁止司机进入公司。</tr>
					<tr>17、私自摘取公司内水果的或造成树枝断裂的根据树木价值进行赔偿。</tr>
					<tr>18、对成品、电解铜等未按规定盖雨布的，按违规处理。</tr>
					<tr>19、登记人员对司乘人员负有管理责任。</tr><br>
					<p><checkbox :checked="checked" @click="checkTerms" /><b>我单位已认真阅读以上提示内容，完全知晓、理解，并严格遵守，如有违反，愿意按金田集团规定处理。以此为证。</b></p>
				</view>
				<view class="cu-bar bg-white justify-end" v-show="checked">
					<view class="action">
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end" v-show="!checked">
					<view class="action">
						<button class="cu-btn bg-green margin-left" disabled>确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				modalName: null,
				checked: false,
				toWhere: false
			}
		},
		methods: {
			hideModal(e) {
				this.modalName = null
				if(this.toWhere == 'register') {
					uni.redirectTo({
						url: '/pages/register/register'
					});	
				}
				if(this.toWhere == 'reservation') {
					uni.redirectTo({
						url: '/pages/reservation/reservation'
					});
				}
			},
			checkTerms() {
				this.checked = !this.checked
			}
		},
		onLoad:function(options){
			let app = getApp()
			this.toWhere = this.$route.query.toWhere
			setTimeout(()=>{
				this.modalName = 'DialogModal'
			},1000);
		},
	}
</script>

<style scoped>
	p,b{
		text-align:left;
	}
	tr>b{
		color: blue;
	}
	tr{
		text-align:left;
		text-indent: 2em;
	}
</style>
