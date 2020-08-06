// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import 'codemirror/theme/material.css'
import DemoBlok from '@examples/components/demo-block'

Vue.use(Vuep, { theme: 'material' })
Vue.component('demo-block', DemoBlok)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
