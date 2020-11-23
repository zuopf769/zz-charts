import UixChart from './packages/chart'
import UixLineChart from './packages/line'
import UixBarChart from './packages/bar'
import UixPieChart from './packages/pie'
import UixDonutChart from './packages/donut'
import UixFunnelChart from './packages/funnel'
import UixScatterChart from './packages/scatter'

const components = [UixChart, UixLineChart, UixBarChart, UixPieChart, UixDonutChart, UixFunnelChart, UixScatterChart]

const install = Vue => {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

export default {
  install,
  UixChart,
  UixLineChart,
  UixBarChart,
  UixPieChart,
  UixDonutChart,
  UixFunnelChart,
  UixScatterChart
}
