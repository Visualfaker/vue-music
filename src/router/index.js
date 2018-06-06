import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'  //路由测试
import Recommend from 'components/recommend/l-recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
