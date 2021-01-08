import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建一个 store
const store = new Vuex.Store({
    //初始 state 对象
    state:{
        openid: ""
    },
    //定义一些mutation
    mutations:{
        setOpenid(state,openid){
            state.openid = openid;
        }
    }
})

//导出该模块:以便其他文件可对其进行使用
export default store