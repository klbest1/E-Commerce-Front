import Request from '@/js_sdk/luch-request/luch-request/index.js'
import config from '@/config/serverConfig.js'

const http = new Request();
http.config.baseURL = config.httpBaseURL
const requestMethods = {
    post:function(url){
        return async function postRequest(param){
                    let options = {
                    params: { token: '05161ec0-055b-11ea-acd3-7b90f1eac841'}, /* 会加在url上 */
                    header: {}, /* 会与全局header合并，如有同名属性，局部覆盖全局 */
                    dataType: 'json',
                    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
                    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
                    // #ifndef MP-ALIPAY || APP-PLUS
                    responseType: 'text',
                    // #endif
                    // #ifdef MP-ALIPAY || MP-WEIXIN
                    timeout: 30000, // 仅微信小程序（2.10.0）、支付宝小程序支持
                    // #endif
                    // #ifdef APP-PLUS
                    sslVerify: true, // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
                    // #endif
                    // #ifdef H5
                    withCredentials: false, // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
                    // #endif
                    // 返回当前请求的task, options。请勿在此处修改options。非必填
                    getTask: (task, options) => {
                         // setTimeout(() => {
                         //   task.abort()
                         // }, 500)
                    }
                }
                
                return http.post(url,param,options)
             }
    },
     get:function (url){
        return async function getRequest(param){
                    let options = 
                    {
                        params: {...param}, /* 会加在url上 */
                        header: {}, /* 会与全局header合并，如有同名属性，局部覆盖全局 */
                        dataType: 'json',
                        // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
                        custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
                        // #ifndef MP-ALIPAY || APP-PLUS
                        responseType: 'text',
                        // #endif
                        // #ifdef MP-ALIPAY || MP-WEIXIN
                        timeout: 30000, // 仅微信小程序（2.10.0）、支付宝小程序支持
                        // #endif
                        // #ifdef APP-PLUS
                        sslVerify: true, // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
                        // #endif
                        // #ifdef H5
                        withCredentials: false, // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
                        // #endif
                        // 返回当前请求的task, options。请勿在此处修改options。非必填
                        getTask: (task, options) => {
                             // setTimeout(() => {
                             //   task.abort()
                             // }, 500)
                        },
                        //validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
                    	//	return statusCode >= 200 && statusCode < 300
                    	//}
                    }   
                return http.get(url,options)
             }
     }
}

 export const withRequest = apiArrays =>{
    const servicesMap = {}
    apiArrays.map( ({name,url,method}) =>{
         let requestMethod = requestMethods[method.toLowerCase()](url)
         servicesMap[name] = requestMethod
    })
    return servicesMap
}
