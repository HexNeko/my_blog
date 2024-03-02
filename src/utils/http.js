import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

// 创建axios实例
const request = axios.create({
    baseURL: 'http://47.113.195.29:12006',
    timeout: 5000
})

// axios请求拦截器
// httpInstance.interceptors.request.use(config => {
//     //拿到token
//     const userStore = useUserStore()
//     const token = userStore.userInfo.token
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// }, e => Promise.reject(e))

// axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
    //统一错误提示
    ElMessage({
        type: 'warning',
        message: '出错：' + e.response.data.message
    })
    return Promise.reject(e)
})


export default request