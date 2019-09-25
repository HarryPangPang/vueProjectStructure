/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
// import QS from 'qs';
import Vue from 'vue'
// import gaLoading from '../../components/gaLoading'
// Vue.use(gaLoading)
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
    console.log(`${msg}弹出错误`)
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    console.log('跳转登录页')
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.error(other);
    }
}

// 创建axios实例
// var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
axios.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。      
        const token = '32132'
        token || (config.headers.Authorization = token);
        console.log(Vue)
        vm.$gaLoading.show('')
        return config;
    },
    error => Promise.error(error)
)

// 响应拦截器
axios.interceptors.response.use(
    // 请求成功
    res => {
        vm.$gaLoading.hide()
        if (res.status === 200) {
            return {
                status: res.data.status,
                msg: res.data.msg,
                data: res.data.data
            }
        } else {
            Promise.reject(res)
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response && response.status && response.status.toString().indexOf('2') < 0) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                console.log('断网处理')
            } else {
                return Promise.reject(error);
            }
        }
    }
);
