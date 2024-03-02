<script setup>
import { onMounted, ref } from 'vue'
import { getBlogListAPI } from '@/apis/blog'
import { useEditorStore } from '@/stores/editorStore.js'
import router from '@/router';


const editorStore = useEditorStore()
const blogList = ref([])

const updateBlogList = async () => {
    const res = await getBlogListAPI()
    blogList.value = res.data
}

onMounted(() => {
    updateBlogList()
})

const blogShow = (id) => {
    router.push(`/home/blog/${id}`)
}
const changeBlog = (index) => {
    //保存要修改的博客信息
    editorStore.id = blogList.value[index].id
    editorStore.isNew = false
    router.push('/admin/editor')
}
const deleteBlog = (index) => {
    console.log('change', blogList.value[index])
}


</script>


<template>
    <el-table :data="blogList" style="width: 100%">
        <el-table-column prop="title" label="标题" width="400" />
        <el-table-column prop="subtitle" label="副标题" width="400" />
        <el-table-column prop="name" label="作者" width="200" />
        <el-table-column prop="time" label="日期" width="200" />
        <el-table-column fixed="right" label="操作" width="300">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="changeBlog(scope.$index)">修改</el-button>
                <el-button link type="primary" size="small" @click="deleteBlog(scope.$index)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

