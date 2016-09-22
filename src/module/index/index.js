import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Detail from 'components/topicDetail'
import App from 'components/App'
import TopicList from './ZolShopIndex'
import ShopDetail from '../detail/ShopDetail'
/* eslint-disable no-new
 import Detail from 'components/topicDetail'
 import TopicList from './components/Cnodejs'
 components: {
 TopicList: TopicList
 }
  */
Vue.use(VueResource)
Vue.use(VueRouter)
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
  saveScrollPosition: true
})
// 定义路由规则
router.map({
  '/': {
    component: TopicList
  },
  '/list': {
    component: TopicList
  },
  '/topicId/:topicId': {
    component: Detail
  },
  '/detail/:goodsId': {
    component: ShopDetail
  }

})

// 现在我们可以启动应用了！
router.start(App, '#another-app')
// new Vue({
//   el: 'body',
//   components: { App }
// })
