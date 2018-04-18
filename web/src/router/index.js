import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
// import HelloWorld from '@/components/HelloWorld'
import HeaderComponent from '../components/header/headerComponent.vue'
import GoodsListComponent from '../components/goodsList/goodsListComponent.vue'



Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/head',
      name: 'head',
      component: HeaderComponent
    },
    {
      path: '/goodslist',
      name: 'goodsList',
      component: GoodsListComponent
    }
  ]
})
