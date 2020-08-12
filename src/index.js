import UixLineChart from './packages/line'
import UixBarChart from './packages/bar'
import UixPieChart from './packages/pie'

const components = [UixLineChart, UixBarChart, UixPieChart]

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
  UixLineChart,
  UixBarChart,
  UixPieChart
}
