import request from "@/utils/http"

//获取个人信息
export const getUserInfoAPI = ({ id }) => {
    return request({
        url: '/blog/getUserInfo?id=' + `${id}`,
        method: 'GET',
    })
}
