(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-terminal-terminalReservation"],{"00e1":function(e,t,i){"use strict";var a=i("ed9a"),n=i.n(a);n.a},"0ccb":function(e,t,i){var a=i("50c4"),n=i("1148"),s=i("1d80"),o=Math.ceil,c=function(e){return function(t,i,c){var u,r,l=String(s(t)),d=l.length,p=void 0===c?" ":String(c),v=a(i);return v<=d||""==p?l:(u=v-d,r=n.call(p,o(u/p.length)),r.length>u&&(r=r.slice(0,u)),e?l+r:r+l)}};e.exports={start:c(!1),end:c(!0)}},"19ca":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"so-mask"},[i("v-uni-view",{staticClass:"so-plate animation-scale-up"},[i("v-uni-view",{staticClass:"so-plate-head"},[i("v-uni-view",{staticClass:"so-plate-type"},[i("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.typeChange.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-radio",{attrs:{value:"1",checked:1===e.type}}),e._v("普通车牌")],1),i("v-uni-label",[i("v-uni-radio",{attrs:{value:"2",checked:2===e.type}}),e._v("新能源车牌")],1)],1)],1)],1),i("v-uni-view",{staticClass:"so-plate-body"},[i("v-uni-view",{staticClass:"so-plate-word",class:{active:0==e.currentInputIndex},attrs:{"data-index":"0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[0]))])],1),i("v-uni-view",{staticClass:"so-plate-word",class:{active:1==e.currentInputIndex},attrs:{"data-index":"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[1]))])],1),i("v-uni-view",{staticClass:"so-plate-dot"}),i("v-uni-view",{staticClass:"so-plate-word",class:{active:2==e.currentInputIndex},attrs:{"data-index":"2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[2]))])],1),i("v-uni-view",{staticClass:"so-plate-word",class:{active:3==e.currentInputIndex},attrs:{"data-index":"3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[3]))])],1),i("v-uni-view",{staticClass:"so-plate-word",class:{active:4==e.currentInputIndex},attrs:{"data-index":"4"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[4]))])],1),i("v-uni-view",{staticClass:"so-plate-word",class:{active:5==e.currentInputIndex},attrs:{"data-index":"5"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[5]))])],1),i("v-uni-view",{staticClass:"so-plate-word",class:{active:6==e.currentInputIndex},attrs:{"data-index":"6"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[6]))])],1),2==e.type?i("v-uni-view",{staticClass:"so-plate-word",class:{active:7==e.currentInputIndex},attrs:{"data-index":"7"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inputSwitch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.currentInputValue[7]))])],1):e._e()],1),i("v-uni-view",{staticClass:"so-plate-foot"},[i("v-uni-view",{staticClass:"so-plate-keyboard",style:{height:e.keyboardHeight}},[i("v-uni-view",{attrs:{id:"keyboard"}},[e._l(e.provinceText,(function(t){return 1==e.inputType?i("v-uni-view",{key:t,staticClass:"so-plate-key",attrs:{"hover-class":"hover","data-value":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseKey.apply(void 0,arguments)}}},[e._v(e._s(t))]):e._e()})),1==e.inputType?[i("v-uni-text",{staticClass:"so-plate-key fill-block"}),i("v-uni-text",{staticClass:"so-plate-key fill-block"})]:e._e(),e._l(e.numberText,(function(t){return e.inputType>=3?i("v-uni-view",{key:t,staticClass:"so-plate-key",attrs:{"hover-class":"hover","data-value":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseKey.apply(void 0,arguments)}}},[e._v(e._s(t))]):e._e()})),e._l(e.wordText,(function(t){return e.inputType>=2?i("v-uni-view",{key:t,staticClass:"so-plate-key",attrs:{"hover-class":"hover","data-value":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseKey.apply(void 0,arguments)}}},[e._v(e._s(t))]):e._e()})),e._l(e.fillBlock,(function(t){return 3==e.inputType?i("v-uni-text",{key:t.num,staticClass:"so-plate-key fill-block"}):e._e()})),e._l(e.lastWordText,(function(t){return 4==e.inputType?i("v-uni-view",{key:t,staticClass:"so-plate-key",attrs:{"hover-class":"hover","data-value":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseKey.apply(void 0,arguments)}}},[e._v(e._s(t))]):e._e()})),4==e.inputType?i("v-uni-text",{staticClass:"so-plate-key fill-block"}):e._e()],2)],1),i("v-uni-view",{staticClass:"so-plate-btn-group"},[i("v-uni-view",[i("v-uni-button",{staticClass:"so-plate-btn so-plate-btn--cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("close")}}},[e._v("取消")])],1),i("v-uni-view",[i("v-uni-button",{staticClass:"so-plate-btn so-plate-btn--delete",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteKey.apply(void 0,arguments)}}},[e._v("删除")]),i("v-uni-button",{staticClass:"so-plate-btn so-plate-btn--submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.exportPlate.apply(void 0,arguments)}}},[e._v("完成")])],1)],1)],1)],1)],1)},s=[]},"23c3":function(e,t,i){var a=i("cb28");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("be6a9b30",a,!0,{sourceMap:!1,shadowMode:!1})},"2f4d":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"cu-bar bg-gradual-blue header"},[i("v-uni-view",{staticClass:"content text-bold"},[e._v("车辆预约自助终端")])],1),i("v-uni-view",{staticClass:"cu-form-group margin-top header-space"},[i("v-uni-view",{staticClass:"title"},[e._v("车牌号"),i("span",[e._v("*")])]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入车牌号",name:"input",disabled:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.plateShow=!0}},model:{value:e.carNo,callback:function(t){e.carNo="string"===typeof t?t.trim():t},expression:"carNo"}}),e.plateShow?i("plate-input",{attrs:{plate:e.carNo},on:{export:function(t){arguments[0]=t=e.$handleEvent(t),e.setPlate.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.plateShow=!1}}}):e._e()],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("手机号"),i("span",[e._v("*")])]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",type:"number",maxlength:"11",name:"input"},model:{value:e.mobile,callback:function(t){e.mobile="string"===typeof t?t.trim():t},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("预约入场日期")]),i("v-uni-picker",{attrs:{mode:"date",value:e.date,start:"0000-00-01",end:"9999-12-31"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.DateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.date))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("预约入场时间")]),i("v-uni-picker",{attrs:{mode:"time",value:e.time,start:"00:00",end:"23:59"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.TimeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.time))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("业务类型"),i("span",[e._v("*")])]),i("v-uni-picker",{attrs:{value:e.businessTypeIndex,range:e.businessTypeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.BusinessTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.businessTypeIndex>-1?e.businessTypeRange[e.businessTypeIndex]:"请选择"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("装卸货地点"),i("span",[e._v("*")])]),i("v-uni-picker",{attrs:{value:e.placeIndex,range:e.placeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PlaceChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.placeIndex>-1?e.placeRange[e.placeIndex]:"请选择"))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.ifNeedClientName,expression:"ifNeedClientName"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("客户名称"),i("span",[e._v("*")])]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.clientName,callback:function(t){e.clientName="string"===typeof t?t.trim():t},expression:"clientName"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.ifNeedGoodsWeight,expression:"ifNeedGoodsWeight"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("货物重量(吨)"),i("span",[e._v("*")])]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.goodsWeight,callback:function(t){e.goodsWeight="string"===typeof t?t.trim():t},expression:"goodsWeight"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.ifNeedGoodsType,expression:"ifNeedGoodsType"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("货物类型"),i("span",[e._v("*")])]),i("v-uni-checkbox",{staticClass:"blue",class:e.checkbox[0].checked?"checked":"",attrs:{checked:!!e.checkbox[0].checked,value:"铜管"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseGoodsType(0,"铜管")}}}),e._v("铜管"),i("v-uni-checkbox",{staticClass:"blue",class:e.checkbox[1].checked?"checked":"",attrs:{checked:!!e.checkbox[1].checked,value:"铜带"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseGoodsType(1,"铜带")}}}),e._v("铜带"),i("v-uni-checkbox",{staticClass:"blue",class:e.checkbox[2].checked?"checked":"",attrs:{checked:!!e.checkbox[2].checked,value:"铜板"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseGoodsType(2,"铜板")}}}),e._v("铜板")],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.ifNeedReason,expression:"ifNeedReason"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("入厂原因"),i("span",[e._v("*")])]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("入厂门岗")]),i("v-uni-view",{staticClass:"text-black door"},[e._v(e._s(this.door))])],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("是否排队")]),i("v-uni-view",{staticClass:"text-black door"},[e._v(e._s(1==this.isNeedQueue?"是":"否"))])],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("金田业务联系人号码")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("b",[e._v("是否有不属于金田财物随车入厂")]),i("v-uni-radio",{class:"YES"==e.radio?"checked":"",attrs:{checked:"YES"==e.radio,value:"YES"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.belongingsIn.apply(void 0,arguments)}}}),e._v("是"),i("v-uni-radio",{class:"NO"==e.radio?"checked":"",attrs:{checked:"NO"==e.radio,value:"NO"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.notBelongingsIn.apply(void 0,arguments)}}}),e._v("否")],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[e._v("货物名称")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.goods1,callback:function(t){e.goods1=t},expression:"goods1"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("重量/数量")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.count1,callback:function(t){e.count1=t},expression:"count1"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("单位")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.unit1,callback:function(t){e.unit1=t},expression:"unit1"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[e._v("货物名称")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.goods2,callback:function(t){e.goods2=t},expression:"goods2"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("重量/数量")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.count2,callback:function(t){e.count2=t},expression:"count2"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("单位")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.unit2,callback:function(t){e.unit2=t},expression:"unit2"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[e._v("货物名称")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.goods3,callback:function(t){e.goods3=t},expression:"goods3"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("重量/数量")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.count3,callback:function(t){e.count3=t},expression:"count3"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"YES"==e.radio,expression:"radio == 'YES'"}],staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("单位")]),i("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入",name:"input"},model:{value:e.unit3,callback:function(t){e.unit3=t},expression:"unit3"}})],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",staticStyle:{"margin-bottom":"30px"},attrs:{type:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),i("v-uni-button",{staticClass:"cu-btn block bg-grey margin-tb-sm lg bottom-space",attrs:{type:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("返回")])],1)],1)},s=[]},"322e":function(e,t,i){"use strict";i.r(t);var a=i("ec59"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},4372:function(e,t,i){"use strict";i.r(t);var a=i("2f4d"),n=i("322e");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("841a");var o,c=i("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"da7de896",null,!1,a["a"],o);t["default"]=u.exports},"4d90":function(e,t,i){"use strict";var a=i("23e7"),n=i("0ccb").start,s=i("9a0c");a({target:"String",proto:!0,forced:s},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},7198:function(e,t,i){"use strict";i.r(t);var a=i("19ca"),n=i("c7a3");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("00e1");var o,c=i("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5a3da0bc",null,!1,a["a"],o);t["default"]=u.exports},"841a":function(e,t,i){"use strict";var a=i("23c3"),n=i.n(a);n.a},"9a0c":function(e,t,i){var a=i("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},afdc:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".so-mask[data-v-5a3da0bc]{position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,.5);z-index:998}.so-plate[data-v-5a3da0bc]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;width:100%;left:0;background:#fff;padding:%?25?% %?25?% 0 %?25?%}.so-plate-head[data-v-5a3da0bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.so-plate-type[data-v-5a3da0bc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block}.so-plate-type uni-label[data-v-5a3da0bc]{display:inline-block;min-height:%?32?%;font-size:%?26?%;margin-right:%?10?%}.so-plate-body[data-v-5a3da0bc]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.so-plate-word[data-v-5a3da0bc]{border:%?1?% solid #ccc;-webkit-border-radius:%?10?%;border-radius:%?10?%;height:0;margin:0 %?5?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:calc(4.28571429%);width:calc(4.28571429%);position:relative}.so-plate-word.active[data-v-5a3da0bc]{border-color:#007aff;-webkit-box-shadow:0 0 %?15?% 0 #007aff;box-shadow:0 0 %?15?% 0 #007aff}.so-plate-word uni-text[data-v-5a3da0bc]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);font-weight:700;font-size:%?32?%}.so-plate-dot[data-v-5a3da0bc]{width:%?15?%;height:%?15?%;background:#ccc;-webkit-border-radius:50%;border-radius:50%;margin:0 %?5?%}.so-plate-keyboard[data-v-5a3da0bc]{background:#eee;margin-left:%?-25?%;margin-right:%?-25?%;padding:%?20?% %?25?% %?10?% %?25?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s}.so-plate-keyboard>uni-view[data-v-5a3da0bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.so-plate-key[data-v-5a3da0bc]{display:block;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-shadow:0 0 %?8?% 0 #bbb;box-shadow:0 0 %?8?% 0 #bbb;width:%?80?%;height:%?80?%;margin:%?5?% 0;font-size:%?32?%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.so-plate-key.hover[data-v-5a3da0bc]{background:#efefef}.so-plate-key.fill-block[data-v-5a3da0bc]{width:%?80?%;height:%?80?%;background:none;-webkit-box-shadow:none;box-shadow:none}.so-plate-btn[data-v-5a3da0bc]{display:inline-block;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-shadow:0 0 %?10?% 0 #bbb;box-shadow:0 0 %?10?% 0 #bbb;font-size:%?28?%;text-align:center;margin:0 0 0 %?10?%}.so-plate-btn-group[data-v-5a3da0bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#eee;margin-left:%?-25?%;margin-right:%?-25?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?25?% %?10?% %?25?%}.so-plate-btn--cancel[data-v-5a3da0bc]{margin:0}.so-plate-btn--submit[data-v-5a3da0bc]{background:#5773f9;color:#fff}.so-plate-btn--delete[data-v-5a3da0bc]{color:#fd6b6d}.animation-scale-up[data-v-5a3da0bc]{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:scale-up-data-v-5a3da0bc;animation-name:scale-up-data-v-5a3da0bc}@-webkit-keyframes scale-up-data-v-5a3da0bc{0%{opacity:.8;-webkit-transform:scale(.8);transform:scale(.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-data-v-5a3da0bc{0%{opacity:.8;-webkit-transform:scale(.8);transform:scale(.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}",""]),e.exports=t},b879:function(e,t,i){"use strict";function a(e,t){var i,a={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};for(var n in a)i=new RegExp("("+n+")").exec(e),i&&(e=e.replace(i[1],1==i[1].length?a[n]:a[n].padStart(i[1].length,"0")));return e}i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("4d90"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.dateFormat=a},bb98:function(e,t,i){"use strict";i("a15b"),i("e25e"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uni-plate-input",data:function(){return{type:1,currentInputIndex:0,currentInputValue:["","","","","","",""],fillBlock:[{num:11},{num:12},{num:13},{num:14},{num:15},{num:16}],keyboardHeightInit:!1,keyboardHeight:"auto",provinceText:["粤","京","冀","沪","津","晋","蒙","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","桂","琼","渝","川","贵","云","藏","陕","甘","青","宁"],numberText:["1","2","3","4","5","6","7","8","9","0"],wordText:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"],lastWordText:["港","澳","学","领","警"]}},props:{plate:{type:String}},computed:{inputType:function(){switch(this.currentInputIndex){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 3;case 4:return 3;case 5:return 3;case 6:return 2==this.type?3:4;case 7:return 4;default:return 1}}},watch:{currentInputIndex:function(e,t){var i=this;this.keyboardHeightInit&&this.$nextTick((function(){i.changeKeyboardHeight()}))}},methods:{typeChange:function(e){var t=e.detail.value;this.type=parseInt(t),this.currentInputIndex=0,this.currentInputValue=1==t?["","","","","","",""]:["","","","","","","",""]},inputSwitch:function(e){var t=e.currentTarget.dataset.index;this.currentInputIndex=parseInt(t)},chooseKey:function(e){var t=e.currentTarget.dataset.value;this.$set(this.currentInputValue,this.currentInputIndex,t),1==this.type&&this.currentInputIndex<6&&this.currentInputIndex++,2==this.type&&this.currentInputIndex<7&&this.currentInputIndex++},deleteKey:function(){this.$set(this.currentInputValue,this.currentInputIndex,""),0!=this.currentInputIndex&&this.currentInputIndex--},exportPlate:function(){var e=this.currentInputValue.join(""),t=!1;if((1===this.type&&7!=e.length||2===this.type&&8!=e.length)&&(t=!0),t)return uni.showToast({title:"请输入完整的车牌号码",icon:"none"});this.$emit("export",e)},changeKeyboardHeight:function(){var e=this,t=uni.createSelectorQuery().in(this);t.select("#keyboard").boundingClientRect(),t.exec((function(t){e.keyboardHeight=t[0].height+uni.upx2px(30)+"px",e.keyboardHeightInit=!0}))}},mounted:function(){var e=this;console.log(this.plate);var t=this.plate.split("");7===t.length?this.type=1:8===t.length&&(this.type=2),7!==t.length&&8!==t.length||(this.currentInputValue=t,this.currentInputIndex=t.length-1),setTimeout((function(){e.$nextTick((function(){e.changeKeyboardHeight()}))}),500)}};t.default=a},c7a3:function(e,t,i){"use strict";i.r(t);var a=i("bb98"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},cb28:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"span[data-v-da7de896]{color:#ed1c24}.door[data-v-da7de896]{float:right}.text-right[data-v-da7de896]{text-align:right}.bottom-space[data-v-da7de896]{margin-bottom:150px}.sort[data-v-da7de896]{height:auto}li[data-v-da7de896]{font-size:x-large;color:#747070}.chosen[data-v-da7de896]{color:#fff;background-color:#0081ff}",""]),e.exports=t},ec59:function(e,t,i){"use strict";var a=i("4ea4");i("4160"),i("c975"),i("fb6a"),i("a434"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("7198")),s=i("b879"),o={components:{plateInput:n.default},data:function(){return{carNo:"",plateShow:!1,date:"",time:"",businessTypeIndex:-1,businessTypeRange:[],businessTypeObj:{},placeIndex:-1,placeRange:[],placeObj:{},ifNeedClientName:!1,clientName:"",ifNeedGoodsWeight:!1,goodsWeight:"",ifNeedReason:!1,reason:"",ifNeedGoodsType:!1,checkbox:[{checked:!1},{checked:!1},{checked:!1}],goodsType:[],door:"-",isNeedQueue:"",phone:"",radio:"NO",goods1:"",count1:"",unit1:"",goods2:"",count2:"",unit2:"",goods3:"",count3:"",unit3:"",mobile:"",username:"Terminal"}},computed:{datetime:function(){return this.date+" "+this.time},businessType:function(){return-1==this.businessTypeIndex?"请选择":this.businessTypeRange[this.businessTypeIndex]},place:function(){return-1==this.placeIndex?"请选择":this.placeRange[this.placeIndex]}},methods:{onLoad:function(e){var t=this;this.date=(0,s.dateFormat)("YYYY-mm-dd",new Date),this.time=(new Date).toTimeString().slice(0,5);getApp();uni.request({url:"http://192.168.60.160:8080/jtvms/util/getEnum.do",data:{ENUM_ID:"BUSINESS_TYPE"},method:"POST",header:{"content-type":"application/json"},success:function(e){console.log("获取业务类型"),console.log(e.data),"90001"==e.data.code&&(t.businessTypeRange.push("请选择"),e.data.data.forEach((function(e,i){t.businessTypeRange.push(e.EMUN_VALUE_ZH),t.businessTypeObj[e.EMUN_VALUE_ZH]=e.EMUN_VALUE_ID})),uni.request({url:"http://192.168.60.160:8080/jtvms/restzvms045/getLoadingLocation.do",data:{BUSINESS_TYPE:t.businessTypeObj[t.businessTypeRange[0]]},method:"POST",header:{"content-type":"application/json"},success:function(e){console.log("获取装卸货地点"),console.log(e.data),"90001"==e.data.code&&(t.placeRange.push("请选择"),e.data.data.forEach((function(e,i){t.placeRange.push(e.LOADING_LOCATION_DESC),t.placeObj[e.LOADING_LOCATION_DESC]=e.LOADING_LOCATION})))}}))}})},setPlate:function(e){e.length>=7&&(this.carNo=e),this.plateShow=!1},DateChange:function(e){this.date=e.detail.value},TimeChange:function(e){this.time=e.detail.value},BusinessTypeChange:function(e){var t=this;3==e.detail.value?(this.ifNeedClientName=!0,this.ifNeedGoodsWeight=!0):(this.ifNeedClientName=!1,this.ifNeedGoodsWeight=!1,this.clientName="",this.goodsWeight=""),this.ifNeedGoodsType=!1,this.checkbox.forEach((function(e,t){e.checked=!1})),this.goodsType=[],this.businessTypeIndex=e.detail.value,this.placeIndex=-1,this.placeRange=[],this.placeObj={};getApp();uni.request({url:"http://192.168.60.160:8080/jtvms/restzvms045/getLoadingLocation.do",data:{BUSINESS_TYPE:this.businessTypeObj[this.businessTypeRange[this.businessTypeIndex]]},method:"POST",header:{"content-type":"application/json"},success:function(e){console.log("获取装卸货地点"),console.log(e.data),"90001"==e.data.code&&(t.placeRange.push("请选择"),e.data.data.forEach((function(e,i){t.placeRange.push(e.LOADING_LOCATION_DESC),t.placeObj[e.LOADING_LOCATION_DESC]=e.LOADING_LOCATION})),t.getEnterGate())}})},PlaceChange:function(e){if("其他"==this.businessType&&3==e.detail.value?this.ifNeedReason=!0:(this.ifNeedReason=!1,this.reason=""),"成品提货"==this.businessType&&8==e.detail.value?(this.ifNeedGoodsType=!0,this.goodsType=[]):(this.ifNeedGoodsType=!1,this.checkbox.forEach((function(e,t){e.checked=!1})),this.goodsType=[]),"成品提货"==this.businessType)switch(e.detail.value){case 1:this.goodsType.push("棒线");break;case 3:this.goodsType.push("电材");break;case 6:this.goodsType.push("铜棒");break;case 7:this.goodsType.push("铜排");break;default:break}this.placeIndex=e.detail.value,this.getEnterGate()},chooseGoodsType:function(e,t){this.checkbox[e].checked=!this.checkbox[e].checked,this.checkbox[e].checked?this.goodsType.push(t):this.goodsType.splice(this.goodsType.indexOf(t),1)},belongingsIn:function(e){this.radio="YES"},notBelongingsIn:function(e){this.radio="NO","NO"==this.radio&&(this.goods1="",this.count1="",this.unit1="",this.goods2="",this.count2="",this.unit2="",this.goods3="",this.count3="",this.unit3="")},getEnterGate:function(){var e=this;getApp();uni.request({url:"http://192.168.60.160:8080/jtvms/restzvms045/getEnterGate.do",data:{BUSINESS_TYPE:this.businessTypeObj[this.businessType],LOADING_LOCATION:this.placeObj[this.place]},method:"POST",header:{"content-type":"application/json"},success:function(t){console.log("获取入厂门岗"),console.log(t.data),"90001"==t.data.code?(e.door=t.data.data[0].ENTER_GATE,e.isNeedQueue=t.data.data[0].SFPD):(e.door="-",e.isNeedQueue="")}})},submit:function(){var e=this;if(11!=this.mobile.length)return uni.showModal({content:"请输入正确的手机号",showCancel:!1}),!1;if(""==this.businessType||"请选择"==this.businessType)return uni.showModal({content:"请选择业务类型",showCancel:!1}),!1;if(""==this.place||"请选择"==this.place)return uni.showModal({content:"请选择装卸货地点",showCancel:!1}),!1;if("成品提货"==this.businessType&&""==this.clientName)return uni.showModal({content:"请输入客户名称",showCancel:!1}),!1;if("成品提货"==this.businessType&&""==this.goodsWeight)return uni.showModal({content:"请输入货物重量",showCancel:!1}),!1;if("成品提货"==this.businessType&&"智能仓库（铜管、铜带、铜板）"==this.place&&0==this.goodsType.length)return uni.showModal({content:"请选择货物类型",showCancel:!1}),!1;if("其他"==this.place&&""==this.reason)return uni.showModal({content:"请输入入厂原因",showCancel:!1}),!1;if("YES"==this.radio&&""==this.goods1&&""==this.goods2&&""==this.goods3)return uni.showModal({content:"请输入随车入厂财务",showCancel:!1}),!1;if("-"==this.door||""==this.isNeedQueue)return uni.showModal({content:"请选择正确的业务类型和装卸货地点获取入厂门岗",showCancel:!1}),!1;var t=[],i=0;""!=this.goods1&&(i++,t.push({SERIAL_NUMBER:i,GOODSNAME:this.goods1,WEIGHT:this.count1,UNIT:this.unit1})),""!=this.goods2&&(i++,t.push({SERIAL_NUMBER:i,GOODSNAME:this.goods2,WEIGHT:this.count2,UNIT:this.unit2})),""!=this.goods3&&(i++,t.push({SERIAL_NUMBER:i,GOODSNAME:this.goods3,WEIGHT:this.count3,UNIT:this.unit3})),uni.showLoading({title:"打印预约单中..."});getApp();uni.request({url:"http://192.168.60.160:8080/jtvms/restzvms043/reserve.do",data:{RESERVATION_ENTER_TIME:this.datetime,BUSINESS_TYPE:this.businessType,LOADING_LOCATION:this.place,ENTER_GATE:this.door,FIELD16:this.clientName,FIELD17:this.goodsWeight,FIELD18:this.goodsType.toString(),REMARK:this.reason,IS_BELONGINGS_ENTER:"YES"==this.radio?1:0,INTERNAL_CONTACT:this.phone,USERID:this.mobile,USERNAME:this.username,CAR_LICENSE:this.carNo,FIELD15:this.isNeedQueue,listZvms043Item:t,IS_TERMINAL:1},method:"POST",header:{"content-type":"application/json"},success:function(t){"90001"==t.data.code?(uni.hideLoading(),e.doQrcodePrint()):(console.log(t.data),uni.hideLoading(),uni.showModal({content:t.data.message,showCancel:!1}))}})},doQrcodePrint:function(){var e="",t='{"url":"http://192.168.1.93:8080/WebReport/ReportServer?reportlet=ZTVMS%2FZT_VMS_S3_001_P.cpt&CAR_LICENSE='+this.carNo.substring(2)+'&format=PDF","direction":"false"}';1==e.readyState?e.send(t):(e=new WebSocket("ws://127.0.0.1:7777/print"),e.onopen=function(){console.log("链接已open"),e.send(t)},e.onclose=function(){console.log("链接已断开"),e.close()},uni.showLoading({title:"打印完成"}),setTimeout((function(){uni.redirectTo({url:"/pages/terminal/index"})}),1e3))},back:function(){uni.redirectTo({url:"/pages/terminal/index"})}}};t.default=o},ed9a:function(e,t,i){var a=i("afdc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4a57b055",a,!0,{sourceMap:!1,shadowMode:!1})}}]);