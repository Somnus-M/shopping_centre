import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            meta:{
                isShow:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isShow:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isShow:false
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                isShow:true
            }
        }

    ],
    // mode:"history"
})


export default router