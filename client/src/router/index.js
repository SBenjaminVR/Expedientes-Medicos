import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import patientList from '@/components/PatientList'
import core from '@/components/core'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        component: core,
        children: [
            {
                path: '',
                component: patientList,
            }

        ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
    ]
})