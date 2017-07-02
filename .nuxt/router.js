'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _6937b9cb = () => import('/Users/cain/Code/open-source/hackathon-starter-api/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _497fdf06 = () => import('/Users/cain/Code/open-source/hackathon-starter-api/pages/about.vue' /* webpackChunkName: "pages/about" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _6937b9cb,
			name: "index"
		},
		{
			path: "/about",
			component: _497fdf06,
			name: "about"
		}
  ]
})
