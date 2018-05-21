import Vue from 'vue'
import Router from 'vue-router'
import Lists from '@/components/Lists'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ListsView',
    component: Lists
  },
  {
    path: '/list/:listId',
    name: 'ListView',
    component: List}]
})
