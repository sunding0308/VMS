(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-terminal-index"],{"5ddc":function(t,e,i){"use strict";var a=i("9ade"),n=i.n(a);n.a},"6be0":function(t,e,i){"use strict";i.r(e);var a=i("8c14"),n=i("ab65");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("5ddc");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1550c41d",null,!1,a["a"],o);e["default"]=r.exports},"8c14":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-image",{staticClass:"image-bg",attrs:{src:i("9fc2")}}),a("div",{staticClass:"logo-part"},[a("v-uni-image",{staticClass:"logo",attrs:{src:i("abb0")}}),a("p",[t._v("股票代码：601609")])],1),a("h2",[t._v(t._s(t.nowDate)+" "+t._s(t.nowTime)+" "+t._s(t.week))]),a("div",{staticClass:"title-part"},[a("h1",[t._v("物流车辆出入管理系统自助终端")])]),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"margin-tb-sm text-center"},[a("div",{staticClass:"zhanwei",staticStyle:{visibility:"hidden"}},[a("div",[a("v-uni-button",{staticClass:"cu-btn round bg-gray"},[t._v("占位")])],1)]),a("div",{staticClass:"icon-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reserve.apply(void 0,arguments)}}},[a("i",{staticClass:"iconfont icon-ico"}),a("div",[a("v-uni-button",{staticClass:"cu-btn round bg-gray"},[t._v("预约入厂")])],1)]),a("div",{staticClass:"icon-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.print.apply(void 0,arguments)}}},[a("i",{staticClass:"iconfont icon-dayin"}),a("div",[a("v-uni-button",{staticClass:"cu-btn round bg-gray"},[t._v("补打预约单")])],1)]),a("div",{staticClass:"icon-box"},[a("i",{staticClass:"iconfont icon-jingqingqidai"}),a("div",[a("v-uni-button",{staticClass:"cu-btn round bg-gray"},[t._v("更多功能敬请期待")])],1)]),a("div",{staticClass:"zhanwei",staticStyle:{visibility:"hidden"}},[a("div",[a("v-uni-button",{staticClass:"cu-btn round bg-gray"},[t._v("占位")])],1)])])],1)],1)},s=[]},"9ade":function(t,e,i){var a=i("cf96");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1fba51ba",a,!0,{sourceMap:!1,shadowMode:!1})},"9fc2":function(t,e,i){t.exports=i.p+"static/img/carbg.62bd9080.png"},ab65:function(t,e,i){"use strict";i.r(e);var a=i("b79e"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},abb0:function(t,e,i){t.exports=i.p+"static/img/jtlogo.241c99a3.png"},b79e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{nowDate:"",nowTime:"",week:""}},created:function(){},methods:{timeFormate:function(t){var e=new Date(t).getFullYear(),i=new Date(t).getMonth()+1<10?"0"+(new Date(t).getMonth()+1):new Date(t).getMonth()+1,a=new Date(t).getDate()<10?"0"+new Date(t).getDate():new Date(t).getDate(),n=new Date(t).getHours()<10?"0"+new Date(t).getHours():new Date(t).getHours(),s=new Date(t).getMinutes()<10?"0"+new Date(t).getMinutes():new Date(t).getMinutes();new Date(t).getSeconds(),new Date(t).getSeconds();this.nDate=e+"-"+i+"-"+a+"  ",this.nowDate=this.nDate,this.nowTime=n+":"+s;var o=this.nDate,c=new Date(o);this.week=c.getDay(),1==this.week&&(this.week="星期一"),2==this.week&&(this.week="星期二"),3==this.week&&(this.week="星期三"),4==this.week&&(this.week="星期四"),5==this.week&&(this.week="星期五"),6==this.week&&(this.week="星期六"),0==this.week&&(this.week="星期日")},nowTimes:function(){this.timeFormate(new Date),setInterval(this.nowTimes,6e4)},reserve:function(){uni.redirectTo({url:"/pages/terminal/terminalReservation"})},print:function(){uni.redirectTo({url:"/pages/terminal/printReservation"})}}};e.default=a},cf96:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".image-bg[data-v-1550c41d]{position:absolute;z-index:-1;left:0;right:0;bottom:0;right:0;width:100%;height:100%}.logo-part[data-v-1550c41d]{float:left}.title-part[data-v-1550c41d]{padding-top:6em}.logo[data-v-1550c41d]{width:12em;height:4em}p[data-v-1550c41d]{color:#555;margin-left:2em}h1[data-v-1550c41d]{color:#fff;text-align:center;font-size:300%}h2[data-v-1550c41d]{color:#fff;float:right;padding-top:1%}.cu-btn[data-v-1550c41d]{color:grey}.icon-ico[data-v-1550c41d]{font-size:%?300?%}.icon-jingqingqidai[data-v-1550c41d]{font-size:%?300?%}.icon-dayin[data-v-1550c41d]{font-size:%?300?%}.cu-item[data-v-1550c41d]{text-align:center;padding-top:10%}.icon-box[data-v-1550c41d]{margin:0 4% 0 4%;float:left;width:13.6%;background-color:#ddd;background:hsla(0,0%,100%,.3);border-radius:5px}.zhanwei[data-v-1550c41d]{margin:0 4% 0 0;float:left;width:13.6%}.cu-btn[data-v-1550c41d]{margin-bottom:1em}",""]),t.exports=e}}]);