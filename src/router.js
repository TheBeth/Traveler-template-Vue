import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Contact from './views/contact'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
  ],
})
