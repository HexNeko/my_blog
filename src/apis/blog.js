import request from "@/utils/http"

//上传博客
export const uploadBlogAPI = ({ blog }) => {
    return request({
        url: '/blog/uploadBlog',
        method: 'POST',
        data: blog
    })
}

//读取博客
export const getBlogAPI = ({ id }) => {
    return request({
        url: '/blog/getBlog?id=' + `${id}`,
        method: 'GET',
    })
}


//读取博客列表
export const getBlogListAPI = () => {
    return request({
        url: '/blog/getBlogList',
        method: 'GET',
    })
}