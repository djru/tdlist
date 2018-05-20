import Vue from 'vue'
import Router from 'vue-router'
import ToDos from '@/components/ToDos'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ToDosView',
    component: ToDos
  }]
})
