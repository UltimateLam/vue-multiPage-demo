import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/view1'
    },{
        path: '/view1',
        component: () => import('./views/view1')
    },{
        path: '/view2',
        component: () => import('./views/view2')
    }]
})