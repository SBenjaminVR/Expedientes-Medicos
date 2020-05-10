import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import core from '@/components/core'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        component: core,
        children: []
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
    ]
})