import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main'

Vue.use(Router)

const routes =  [
    {
      path: '/',
      name: 'home',
      component: main,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    // }
  ]
const router = new Router({
    routes
})
// 登录路由检查
router.beforeEach((to, from, next) => {
  if (!!to.meta.requiresAuth) {
    next('/login');
    return;
  }
  next();
});
router.afterEach((to, from) => {
});
export default router
