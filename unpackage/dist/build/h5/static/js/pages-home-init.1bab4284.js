(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-init"],{"5a50":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{onLoad:function(n){this.$route.query.openid?uni.redirectTo({url:"/pages/home/home?random="+this.getRandomInt(1,1e3)+"&openid="+this.$route.query.openid}):uni.redirectTo({url:"/pages/terminal/index"})},getRandomInt:function(n,e){return Math.floor(Math.random()*(e-n+1))+n}}};e.default=r},bc1b:function(n,e,t){"use strict";t.r(e);var r=t("5a50"),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},c39e:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view")},o=[]},e1ca:function(n,e,t){"use strict";t.r(e);var r=t("c39e"),u=t("bc1b");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);var i,a=t("f0c5"),c=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"fb42fb9a",null,!1,r["a"],i);e["default"]=c.exports}}]);