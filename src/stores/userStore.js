import { defineStore } from "pinia"
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    const name = ref('Zzz')
    const auth_id = ref(1)
    const authority = ref(1)
    const key = ref('UI5GxdKnerIKbLQMCxpwZtX0t9hc9fMr')
    const cover = ref('')
    const birthday = ref('')
    const tel = ref('')
    const mail = ref('')
    const introduction = ref('')
    return {
        name,
        auth_id,
        key,
        authority,
        cover,
        birthday,
        tel,
        mail,
        introduction
    }
})