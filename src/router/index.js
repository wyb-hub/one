import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('../admin'),
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        alias:'首页',
        component: () => import('../views/index/index'),
      },
      {
        path: '/goods-sort',
        name: 'goods-sort',
        alias:'分类',
        component: () => import('../views/goods-sort/goods-sort'),
        redirect:'/tuijiefenlei',
        children:[
             // 分类路由
            {
              path: '/tuijiefenlei',
              name: 'tuijiefenlei',
              alias:'推荐分类',
              component: () => import('../views/tuijiefenlei/tuijiefenlei.vue'),
            },
            {
              path: '/JDchaoshi',
              name: 'JDchaoshi',
              alias:'京东超市',
              component: () => import('../views/JDchaoshi/JDchaoshi.vue'),
            },
        ]
      },
      {
        path: '/car',
        name: 'car',
        alias:'购物车',
        component: () => import('../views/shop-car/car'),
      },
      {
        path: '/mine',
        name: 'mine',
        alias:'我的',
        component: () => import('../views/mine/mine'),
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
