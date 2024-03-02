import request from "@/utils/http"


//上传文件
export const uploadImgAPI = ({ img }) => {
    const fd = new FormData()
    fd.append("image", img)
    console.log('fd', fd)
    return request({
        url: '/blog/uploadImg',
        method: 'POST',
        data: fd
    })
}