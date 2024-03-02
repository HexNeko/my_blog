import { defineStore } from "pinia"
import { ref } from 'vue'


export const useEditorStore = defineStore('editor', () => {
    const id = ref(0)
    const content = ref('')
    const transContent = ref('')
    const title = ref('')
    const subtitle = ref('')
    const isNew = ref(true)
    const cover = ref('')
    //导入blog
    const setBlog = (blog) => {
        title.value = blog.title
        subtitle.value = blog.subtitle
        content.value = blog.content
        cover.value = blog.cover
    }
    //导出blog
    const getBlog = () => {
        console.log(title.value)
        return {
            title: title.value,
            subtitle: subtitle.value,
            content: content.value,
            cover: cover.value
        }
    }
    return {
        id,
        title,
        subtitle,
        content,
        transContent,
        isNew,
        cover,
        setBlog,
        getBlog
    }
})