import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import sd from '@/page/student'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/b'
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/b',
      name: 'test',
      component: test,
    },
    {
      path: '/studenttest',
      name: 'studenttest',
      component: sd,
    }
  ]
})
