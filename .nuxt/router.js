import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5dfb90a3 = () => interopDefault(import('../admin/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _c794bd4e = () => interopDefault(import('../admin/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _d75824e8 = () => interopDefault(import('../admin/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _5dfb90a3,
    name: "login"
  }, {
    path: "/register",
    component: _c794bd4e,
    name: "register"
  }, {
    path: "/",
    component: _d75824e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
