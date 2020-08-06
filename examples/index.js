// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import 'codemirror/theme/neo.css'

Vue.use(Vuep, { theme: 'neo' })
// or Vue.component('Vuep', Vuep)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
