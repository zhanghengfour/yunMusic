// 封装功能函数
import config from "./config";

export default (url, data = {}, method = 'GET') => {
    // resolve和reject是用于改promise的状态
    return new Promise((resolve, reject) => {
        // 初始化Promise实例的状态为pending
        wx.request({
            url: config.host + url,
            data,
            method,
            success: (res) => {
                resolve(res.data)
            },
            fail: (error) => {
                reject(error)
            }
        })
    })

}