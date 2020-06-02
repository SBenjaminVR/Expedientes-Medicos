import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import patientList from '@/components/PatientList'
import visitsList from '@/components/VisitsList'
import visit from '@/components/Visit'
import patient from '@/components/Patient'
import core from '@/components/core'

Vue.use(Router)

const router = new Router({
    routes: [
        {
        path: '/',
        redirect: '/login',
        component: core,
        children: [
            {
                path: '/patientsList',
                component: patientList,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/visitsList/:id',
                component: visitsList,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/visit/:id/:visitId',
                component: visit,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/patient/:id',
                component: patient,
                meta: {
                    requiresAuth: true
                }
            },
        ]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                requiresAuth: false
            }
        },
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (!auth.loggedIn()) {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         } 
//         else {
//             next()
//         }
//     } 
//     else {
//         next() // make sure to always call next()!
//     }
// })

export default router