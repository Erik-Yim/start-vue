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
    }
  ]
})


const app = new Vue({
router,
render: h => h(App)
}).$mount('#app')







