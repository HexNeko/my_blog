import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/views/Admin/AdminIndex.vue'
import User from '@/views/Admin/components/User.vue'
import BlogList from '@/views/Admin/components/BlogList.vue'
import Editor from '@/views/Editor/EditorIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import BlogListShow from '@/views/Blog/BlogList.vue'
import BlogShow from '@/views/Blog/BlogShow.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            //name: 'admin',
            component: Admin,
            children: [
                {
                    path: '/admin/bloglist',
                    //name: 'bloglist',
                    component: BlogList,
                },
                {
                    path: '/admin/user',
                    //name: 'user',
                    component: User,
                },
                {
                    path: '/admin/editor',
                    //name: 'editor',
                    component: Editor,
                },
            ]
        },
        {
            path: '/',
            //name: 'home',
            component: Home,
            children: [
                {
                    path: '/bloglist',
                    //name: 'bloglistshow',
                    component: BlogListShow,
                },
                {
                    path: '/blog/:id',
                    //name: 'blogshow',
                    component: BlogShow,
                },
            ]
        }
    ],
    //路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router