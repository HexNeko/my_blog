<script setup>
import { ref } from 'vue'
import { useEditorStore } from '@/stores/editorStore.js'
import BlogShow from './BlogShow.vue'


const editorStore = useEditorStore()


</script>

<template>
    <div class="editor">
        <el-input v-model="editorStore.content" :rows="25" type="textarea" placeholder="Please input" />
    </div>
</template>

<style scoped>
.editor {
    width: 46%;
    margin: 10px 20px;
}
</style>