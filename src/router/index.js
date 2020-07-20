import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/home.vue'
import signup from '@/components/signup.vue'

import signin from '@/components/signin.vue'
import createArticle from "@/components/createArticle.vue"

import Blog from "@/components/Blog.vue"
import admin from "@/components/users/admin.vue"

import store from "@/store/index"

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: home
  },

  {

    path:"/users/admin",
    name:"admin",
    component:admin,
    beforeEnter(to,from,next){
      // console.log(store.dispatch("getUsers"))
      store.dispatch("getUsers")
      next(true)
    }


  },



  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {

    path:"/createArticle",
    name:"createArticle",
    component:createArticle

  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },

  {
    path: '/signin',
    name: 'signin',
    component: signin
  },

  {
    path:"/articles/:id",
    name:"Blog",
    component:Blog
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
