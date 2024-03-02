<script setup>
import { onMounted, ref } from 'vue'
import { getBlogAPI } from '@/apis/blog'
import { transform } from '@/utils/transform'
import { useRoute } from 'vue-router'

const blog = ref({})
const trans = ref('')
const route = useRoute()

const updateBlog = async () => {
    const res = await getBlogAPI({ id: route.params.id })
    blog.value = res.data[0]
    trans.value = transform(blog.value.content)
}

onMounted(() => {
    updateBlog()
})

</script>
<template>
    <el-card class="card" shadow="hover">
        <template #header>
            <h1>{{ blog.title }}</h1>
        </template>
        <div class="content">
            <h3>副标题: {{ blog.title }}</h3>
            <h5>作者：{{ blog.name }}</h5>
            <h5>时间：{{ blog.time }}</h5>
            <hr><br>
        </div>

        <div class="content" v-html=trans></div>
    </el-card>
</template>
<style scoped>
.content {
    line-height: 2;
}

.background {
    padding: 20px;
    width: 50%;
    margin: 0 auto;
}

.card {
    width: 100%;
    margin: 10px auto;
}

.cover {
    height: 100px;
    width: 160px;
    background-size: cover;
    background-repeat: no-repeat;
}

.content {
    margin: 0 20px;
}
</style>