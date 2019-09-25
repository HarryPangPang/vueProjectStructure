import axios from 'axios';
import QS from 'qs';
// let reGenerateData = response=>{
//     if(response){
//         return {
//             status:response.status || '',
//             data:response.data|| '',
//             msg:response.statusText || ''
//         }
//     }
// }
export default {
    
    /**
     * get 请求
     * @param url 接口路由
     * @param auth 是否需要带登录信息
     * @returns {AxiosPromise<any>}
     */
    get(url, auth = false) {
        if (auth) {
            return axios.get(url, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.get(url);
        }
    },

    /**
     * post 请求
     *
     * @param url 接口路由
     * @param data 接口参数
     * @param auth 是否需要带登录信息
     * @returns {AxiosPromise<any>}
     */
    post(url, data, auth = false) {
        if (auth) {
            return axios.post(url,QS.stringify(data), {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.post(url, QS.stringify(data));
        }
    },

    /**
     * put请求
     * @param url 接口路由
     * @param data 接口参数
     * @param auth 是否需要带登录信息
     * @returns {AxiosPromise<any>}
     */
    put(url, data, auth = false) {
        if (auth) {
            return axios.put(url, data, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.put(url, data);
        }
    },

    /**
     * 删除
     * @param url 接口路由
     * @param auth 是否需要带登录信息
     * @returns {AxiosPromise}
     */
    del(url, auth = false) {
        if (auth) {
            return axios.delete(url, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.delete(url);
        }
    },

    /**
     * 上传文件
     * @param url 接口路由
     * @param file 接口文件
     * @param auth 是否需要带登录信息
     */
    uploader(url, file, auth = false) {
        let param = new FormData();
        param.append('file', file)
        if (auth) {
            return axios.post(url, param, {headers: {Authorization: 'Your back-end user authenticates information'}})
        } else {
            return axios.post(url, param)
        }
    },
}