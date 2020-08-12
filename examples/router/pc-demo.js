import PcDemo from '@examples/pages/pc-demo/index.vue'
import Test from '@examples/components/test.vue'
import components from '../../components'
console.log(components)

function loadWiki(component) {
  return () => import(`../wiki/pc-demo/${component}.md`)
}

function loadDocs(component) {
  return () => import(`../../src/packages/${component}/index.md`)
}

// 基础路由
let baseRoutes = [
  { path: 'started', component: loadWiki('getting-started') },
  { path: 'usage', component: Test },
  { path: 'options', component: Test }
]

// 图表路由
let compRoutes = Object.keys(components).reduce((routes, comp) => {
  routes.push({
    path: comp,
    component: loadDocs(comp)
  })
  return routes
}, [])

let routes = baseRoutes.concat(compRoutes)

export default [
  {
    name: 'pcDemo',
    path: '/pc-demo',
    component: PcDemo,
    children: routes
  }
]
