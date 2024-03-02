<script setup>
import { useScroll } from '@vueuse/core'
import { watch, ref } from 'vue';
const headImg = [
    { id: 1, url: 'http://47.113.195.29:12006/assets/1.png' },
    { id: 2, url: 'http://47.113.195.29:12006/assets/2.png' },
    { id: 3, url: 'http://47.113.195.29:12006/assets/3.png' },
    { id: 4, url: 'http://47.113.195.29:12006/assets/4.png' },
]

const { y } = useScroll(window)
const opacityHead = ref('opacity: 0%')
watch(y, () => {
    if (y > 400) return
    opacityHead.value = `opacity: ${y.value/4}%`
    console.log(y.value)
})


</script>

<template>
    <el-card class="headCard" shadow="always" :style=opacityHead>Welcom to my blog!</el-card>
    <div class="block">
        <el-carousel height="250px">
            <el-carousel-item v-for="item in headImg" :key="item.id">
                <el-image class="headImg" :key="item.id" :src="item.url" :fit="'contain'" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
.block {
    position: relative;
}

.headImg {
    width: 100%;
}

.headCard {
    z-index: 500;
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: #409EFF;
}

.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>