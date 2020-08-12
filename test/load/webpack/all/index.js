import Vue from 'vue'
import App from './App'
import UixCharts from '../../../../lib/uix-charts.common.js'
import '../../../../lib/uix-charts.css'

Vue.use(UixCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
