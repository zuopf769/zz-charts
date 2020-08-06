import Vue from 'vue'
import Router from 'vue-router'
import pcDemo from '@examples/router/pc-demo'
import explain from '@examples/router/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pc-demo/started',
    },
    ...pcDemo,
    ...explain,
  ],
})
