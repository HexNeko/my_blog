<script setup>
import { watch } from 'vue'
import { useEditorStore } from '@/stores/editorStore.js'
import { debounce } from '@/utils/debounce.js'
import { transform } from '@/utils/transform.js'

const editorStore = useEditorStore()

const change = () => {
    console.log('ok')
    //将md字符串转成网页格式
    editorStore.transContent = transform(editorStore.content)
}
//检测输入的变化，做防抖处理
watch(() => editorStore.content, debounce(change, 1000))

</script>

<template>
    <div class="show">
        <div v-html="editorStore.transContent"></div>
    </div>
</template>

<style scoped>
.show {
    width: 46%;
    margin: 10px 20px;
    padding: 10px;
    border: 1px solid #c8c9cc;
    border-radius: 4px;
}
</style>