<script setup>
import { onMounted, ref } from 'vue'
import { useEditorStore } from '@/stores/editorStore.js'
import { useUserStore } from '@/stores/userStore.js'
import { Picture, Lollipop, Share } from '@element-plus/icons-vue'
import BlogShow from './components/BlogShow.vue'
import BlogEditor from './components/BlogEditor.vue'
import imgs from '@/assets/img/cover.png'
import { uploadBlogAPI } from '@/apis/blog'
import { uploadImgAPI } from '@/apis/file'
import { getBlogAPI } from '@/apis/blog'
import { transform } from '@/utils/transform'

const editorStore = useEditorStore()
const userStore = useUserStore()

//提交博客
const submit = () => {
    const blog = editorStore.getBlog()
    if (!blog.title || !blog.subtitle || !blog.content) {
        ElMessage({
            message: '请完善博客再点击提交',
            type: 'warning',
        })
    }
    else {
        //提交
        blog.name = userStore.name
        blog.auth_id = userStore.auth_id
        console.log('will submit', blog)
        uploadBlogAPI({ blog })
        ElMessage({
            message: '提交成功',
            type: 'success',
        })
    }
}
//上传图片
const uploadImg = (response, uploadFile, uploadFiles) => {
    console.log('上传图片成功', response)
    editorStore.cover = response.path
}
//更新信息
const updateBlog = async (id) => {
    const res = await getBlogAPI({ id })
    console.log(res.data[0])
    editorStore.setBlog(res.data[0])
}
onMounted(() => {
    //如果是修改博客，要读取信息
    if (!editorStore.isNew && editorStore.id.value != 0) {
        updateBlog(editorStore.id)
    }
    else {
        editorStore.isNew = true
    }
})


</script>

<template>
    <div class="background">
        <div class="title">
            标题：<el-input v-model="editorStore.title" placeholder="Please input" />
            副标题：<el-input v-model="editorStore.subtitle" placeholder="Please input" />
        </div>
        <el-image style="width: 250px; height: 140px" :src=editorStore.cover fit="cover" />
    </div>

    <div class="button">
        <el-button type="success" @click="submit">提交</el-button>
        <el-button type="primary" :icon="Picture" />
        <el-button type="primary" :icon="Lollipop" />
        <el-button type="primary" :icon="Share" />
        <el-upload ref="upload" name="image" class="upload-demo right" action="http://47.113.195.29:12006/blog/uploadImg"
            :limit="1" :on-success="uploadImg" :auto-upload="true">
            <template #trigger>
                <el-button type="primary">上传封面</el-button>
            </template>
        </el-upload>
    </div>
    <div class="background">
        <BlogEditor></BlogEditor>
        <BlogShow></BlogShow>
    </div>
</template>

<style scoped>
.background {
    display: flex;
    justify-content: space-between;
}

.title {
    padding: 10px 50px 0px 20px;
    line-height: 2;
}

.button {
    display: flex;
    padding: 10px 20px 0px 20px;
    line-height: 2;
}

.right {
    margin-left: auto;
}

.el-image {
    margin: 0 20px;
}
</style>