<script setup>
import { onMounted, ref } from 'vue'
import { getBlogListAPI } from '@/apis/blog'
import router from '@/router';

const blogList = ref([])

const updateBlogList = async () => {
    const res = await getBlogListAPI()
    blogList.value = res.data
}

onMounted(() => {
    updateBlogList()
})

const blogShow = (id) => {
    router.push(`/blog/${id}`)
}

</script>
<template>
    <div v-for="item in blogList" :key="item.id">
        <el-card class="card" shadow="hover" @click="blogShow(item.id)">
            <template #header>{{ item.title }}</template>
            <div style="display: flex;">
                <div class="cover" :style="{ backgroundImage: 'url(' + item.cover + ')' }"></div>
                <div class="content">
                    <p><el-text class="mx-1" size="large">作者：{{ item.name }}</el-text></p>
                    <p><el-text class="mx-1">副标题:{{ item.subtitle }}</el-text></p>
                    <p><el-text class="mx-1" size="small">{{ item.time }}</el-text></p>
                </div>
            </div>
        </el-card>
    </div>
</template>
<style scoped>
p {
    margin: 10px;
}

.background {
    padding: 20px;
    width: 50%;
    margin: 0 auto;
}

.card {
    width: 100%;
    height: 200px;
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