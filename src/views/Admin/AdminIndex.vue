<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, UserFilled, Setting } from '@element-plus/icons-vue'
import User from './components/User.vue'
import router from '@/router';

</script>

<template>
    <div class="common-layout">
        <el-container style="height: 1080px">
            <el-header>Welcome</el-header>
            <el-container>
                <el-card class="box-card">
                    <el-aside width="200px">
                        <el-scrollbar>
                            <el-menu :default-openeds="['1', '2']">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                            <UserFilled />
                                        </el-icon>用户
                                    </template>
                                    <el-menu-item-group>
                                        <template #title>修改信息或管理用户</template>
                                        <el-menu-item index="2-1" @click="router.push('/admin/user')">个人信息</el-menu-item>
                                        <el-menu-item index="2-2" @click="router.push('/admin/user')">用户管理</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>
                                        <el-icon><icon-menu /></el-icon>博客
                                    </template>
                                    <el-menu-item-group title="Group 2">
                                        <template #title>新增博客或管理博客</template>
                                        <el-menu-item index="2-3" @click="router.push('/admin/editor')">新增博客</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="2-4">
                                        <template #title>管理博客</template>
                                        <el-menu-item index="2-4-1" @click="router.push('/admin/bloglist')">博客列表</el-menu-item>
                                        <el-menu-item index="2-4-1">新增分类</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                                <el-sub-menu index="3">
                                    <template #title>
                                        <el-icon>
                                            <setting />
                                        </el-icon>系统配置
                                    </template>
                                    <el-menu-item-group>
                                        <template #title>Group 1</template>
                                        <el-menu-item index="3-1">Option 1</el-menu-item>
                                        <el-menu-item index="3-2">Option 2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group 2">
                                        <el-menu-item index="3-3">Option 3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="3-4">
                                        <template #title>Option 4</template>
                                        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                            </el-menu>
                        </el-scrollbar>
                    </el-aside>
                </el-card>
                <el-main>
                    <el-card class="box-card">
                        <RouterView></RouterView>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<style scoped>
.el-header {
    position: relative;
    background-color: #409EFF;
    border-radius: 5px 5px 0 0;
    color: var(--el-text-color-primary);
}

.el-aside {
    color: var(--el-text-color-primary);
    background: #a0cfff;
}

.el-menu {
    border-right: none;
}

.el-main {
    padding: 0;
    background-color: #ecf5ff;
}

.toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.el-main .box-card {
    margin: 10px auto;
    width: 97%;
}
</style>
