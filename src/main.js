import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

Vue.use(VueRouter)



/*new Vue({
  el: '#app',
  VueRouter,
  render: h => h(App)
})*/


// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

import firstcomponent from './component/firstcomponent.vue'

import erik_first from './component/erik_first.vue'

//需要把自定义标签的组件放在这里，这样其他.vue文件就可以使用这个标签OK
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

/*const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})*/


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    },
     {
      path: '/firstC',
      component: firstcomponent
    }
    ,
     {
      path: '/erik_first',
      component: erik_first
    }
  ]
})


const app = new Vue({
router,
render: h => h(App)
}).$mount('#app')







