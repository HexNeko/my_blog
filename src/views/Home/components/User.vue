<script setup>
import { getUserInfoAPI } from '@/apis/user'
import { ref, onMounted } from 'vue'

const userInfo = ref({})

const updateUserInfo = async () => {
    const res = await getUserInfoAPI({ id: 1 })
    console.log(res)
    userInfo.value = res.data[0]
}

onMounted(() => {
    updateUserInfo()
})
</script>

<template>
    <el-card class="infoCard" shadow="hover">
        <el-avatar :size="120" :src="userInfo.cover" />
        <div><el-text class="mx-2">{{ userInfo.name }}</el-text></div>
        <div><el-text class="mx-1">{{ userInfo.mail }}</el-text></div>
        <div><el-text class="mx-1">{{ userInfo.introduction }}</el-text></div>
    </el-card>
</template>

<style scoped>
.infoCard {
    margin: 20px auto;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: sticky;
    top: 80px;
}

.infoCard div {
    text-align: center;
    margin: 20px;
}

.mx-2 {
    font-size: 32px;
}

.mx-1 {
    font-size: 16px;
}
</style>