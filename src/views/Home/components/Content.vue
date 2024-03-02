<script setup>
import router from '@/router';

const toHome = () => {
    router.push('/bloglist')
}

</script>

<template>
    <div class="background">
        <el-card class="navgation" shadow="hover">
            <el-button @click="toHome">首页</el-button>
            <el-button @click="toHome">博客</el-button>
            <el-button @click="toHome">说说</el-button>
            <el-button @click="toHome">相册</el-button>
            <el-button @click="toHome">留言板</el-button>
            <el-button type="primary" circle />
            <el-button type="success" circle />
            <el-button type="warning" circle />
            <el-button type="danger" circle />
        </el-card>
        <RouterView></RouterView>
        <!-- <BlogList></BlogList> -->
    </div>
</template>

<style scoped>
.navgation {
    display: flex;
    justify-content: space-between;
}

.background {
    padding: 20px;
    width: 600px;
}
</style>