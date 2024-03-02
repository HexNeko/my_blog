<script setup>
import HeadBar from './components/HeadBar.vue'
import Content from './components/Content.vue'
import User from './components/User.vue'
</script>

<template>
    <HeadBar></HeadBar>
    <div class="main">
        <el-card class="infoCard" shadow="hover"></el-card>
        <Content></Content>
        <User></User>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    justify-content: center;
}

.infoCard {
    margin: 20px 10px;
    width: 300px;
    height: 400px;
}
</style>