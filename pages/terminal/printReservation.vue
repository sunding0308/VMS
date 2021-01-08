<template>
	<view>
		<view class="cu-bar bg-gradual-blue"></view>
		<view class="cu-bar bg-gradual-blue header">
			<view class="content text-bold">
				补打预约单
			</view>
		</view>
		<view>
			 <scroll-view scroll-x="true">
				<t-table>
					<t-tr>
						<t-th>车牌号</t-th>
						<t-th>预约时间</t-th>
						<t-th>操作</t-th>
					</t-tr>
					<t-tr v-for="(item,index) in table" :key="item.CAR_LICENSE">
						<t-td>{{ item.CAR_LICENSE }}</t-td>
						<t-td>{{ item.FCHANGEDATE }}</t-td>
						<t-td><button class="cu-btn round bg-gradual-blue" :disabled="isDisabled" @click="doQrcodePrint(item.CAR_LICENSE)">打印</button></t-td>
					</t-tr>
				</t-table>
			</scroll-view>
		</view>
		<view class="padding">
			<button class="cu-btn block bg-grey margin-tb-sm lg bottom-space" type="" @click="back">返回</button>
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		data() {
			return {
				table:[],
				isDisabled:false
			}
		},
		components:{
			tTable,
			tTh,
			tTr,
			tTd
		},
		mounted() {
			this.getTerminalReserveInfo();
		},
		methods: {
			getTerminalReserveInfo(){
				let app = getApp()
				uni.request({
					url: 'http://192.168.60.160:8080/jtvms/restzvms043/getTerminalReserveInfo.do',
					data: {
						
					},
					method:"POST",
					header : {'content-type':'application/json'},
					success: (res)=> {
						console.log(res)
						if (res.data.code == "90001") {
							console.log(res.data.data.ITEMS)
							this.table = res.data.data.ITEMS
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.MESSAGE
							});
						}
					}
				});
			},
			doQrcodePrint(carNo){
				var printWs = '';
				// 使用本地打印
				var qrcodeinfo = '{\"url\":\"http://192.168.1.93:8080/WebReport/ReportServer?reportlet=ZTVMS%2FZT_VMS_S3_001_P.cpt&CAR_LICENSE='+carNo.substring(2)+'&format=PDF\",\"direction\":\"false\"}';
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
</style>
