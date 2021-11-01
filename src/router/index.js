import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase/compat";


const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Home')

  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Categories')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/History')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Record')
  },
  {
    path: '/detail-record/:id',
    name: 'detail-record',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/DetailRecord')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }

})

export default router
