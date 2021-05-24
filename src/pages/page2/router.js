import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/view3'
    }, {
        path: '/view3',
        component: () => import('./views/view3')
    }, {
        path: '/view4',
        component: () => import('./views/view4')
    }]
})