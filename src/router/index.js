import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import AuthorsList from '@/components/Authors/List'

Vue.use(Router)

export default new Router({
  mode: 'history', // gets rid of '#' in URLs
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/authors',
      name: 'Authors',
      component: AuthorsList
    }
  ]
})
