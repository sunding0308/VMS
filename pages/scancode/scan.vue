<template>

</template>

<script>
	import wx from 'weixin-js-sdk'
    export default {
        data () {
            return {
                result: '',//扫码结果信息
                error: '',//错误信息
				businessStatus: '',
				carNO: '',
				clientName: '',
				goodsWeight: '',
				mobile: '',
				place: '',
				transportCompany: '',
				type: '',
				appId:'',
				timestamp:'',
				nonceStr:'',
				signature:''
            }
        },
        methods: {
			onLoad:function(options){
				this.businessStatus = options.businessStatus
				this.carNO = options.carNO
				this.clientName = options.clientName
				this.goodsWeight = options.goodsWeight
				this.mobile = options.mobile
				this.place = options.place
				this.transportCompany = options.transportCompany
				this.type = options.type
				
				let self = this
				new Promise(
				  function (resolve, reject) {
				    uni.request({
				    	url: 'http://xiaozhao.jttygroup.com/qywx/scan/',
						data: {
							"url": window.location.href.split("#")[0]
						},
						method:"POST",
						header : {'content-type':'application/x-www-form-urlencoded'},
				    	success: (res)=> {
				    		console.log('获取签名')
				    		console.log(res.data);
				    		self.appId = res.data.appId
				    		self.timestamp = res.data.timestamp
				    		self.nonceStr = res.data.nonceStr
				    		self.signature = res.data.signature
							resolve('成功') // 数据处理完成
				    	}
				    });
				  }
				).then(
				  (res) => {
					  this.startScan()
					  console.log(res)
					  },  // 成功
				  (err) => {console.log(err)} // 失败
				)
			},
			startScan() {
				wx.config({
				  debug: true,
				  appId: this.appId,
				  timestamp: this.timestamp,
				  nonceStr: this.nonceStr,
				  signature: this.signature,
				  jsApiList:  ["scanQRCode"]
				});
				wx.ready(function () {
				  // 在这里调用 API
				  wx.scanQRCode({
				    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				    scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
				    success: function (res) {
				      var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
					  console.log(result);
					  this.result = result
					  if(result.indexOf('https://crm.jtgroup.com.cn:8100/ckpd/home/queue/form') != -1) {
					  	//数据对接仓库排队系统
					  	uni.request({
					  		// url: 'http://192.168.3.91:81/home/queue/submit4Scan',
					  		url: 'https://crm.jtgroup.com.cn:8100/ckpd/home/queue/submit4Scan',
					  		data: {
					  			"carNo": this.carNO,
					  			"phoneNo": this.mobile,
					  			"transportCompany": this.carList[this.carNO],
					  			"clientName": this.clientName,
					  			"goodsWeight": this.goodsWeight,
					  			"type": this.type,
					  			"carStates": "空车",
					  			"ck": this.place
					  		},
					  		method:"POST",
					  		header : {'content-type':'application/json'},
					  		success: (res)=> {
					  			console.log(res.data)
					  			this.loadModal = false
					  			uni.showModal({
					  				content: res.data.Data.Message,
					  				showCancel: false
					  			})
					  		},
					  		fail: (res)=> {
					  			console.log(res)
					  		}
					  	});
					  } else {
					  	uni.showModal({
					  		content: '请扫描正确的仓库排队二维码',
					  		showCancel: false
					  	})
					  }
				    }
				  });
				});
				wx.error(function (res) {
				// config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
				   alert('配置验证失败: ' + res.errMsg)
				})
			}
        }
    }
</script>

<style scoped>
</style>