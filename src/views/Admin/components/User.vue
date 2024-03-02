<script lang="ts" setup>
import { ref } from 'vue'


const form = ref({
    name: 'shigure',
    imgSrc: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    authority: '管理员',
    date: '2000-01-01',
    tel: '10086',
    mail: '10086@qq.com',
    desc: '一去二三里',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<template>
    <el-avatar shape="square" :size="200" :src="form.imgSrc" />
    <div style="width: 600px">
        <el-form :model="form" label-width="120px">
            <el-form-item label="昵称：" placeholder="please input name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="权限：">
                <el-select v-model="form.authority" placeholder="please select">
                    <el-option label="管理员" value=1 />
                    <el-option label="副管理员" value=2 />
                </el-select>
            </el-form-item>
            <el-form-item label="生日：" placeholder="please select">
                <el-col :span="11">
                    <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="电话：" placeholder="please input telephone">
                <el-input v-model="form.tel" />
            </el-form-item>
            <el-form-item label="邮箱：" placeholder="please input email">
                <el-input v-model="form.mail" />
            </el-form-item>
            <el-form-item label="介绍：" placeholder="please input description">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style>
.el-avatar {
    margin: 30px 75px;
}
</style>
