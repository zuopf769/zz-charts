import PcDemo from '@examples/pages/pc-demo/index.vue'
import components from '../../components'

function loadWiki(component) {
  return () => import(`../wiki/pc-demo/${component}.md`)
}

function loadDocs(component) {
  return () => import(`../../src/packages/${component}/index.md`)
}

// 基础路由
let baseRoutes = [
  { path: 'started', component: loadWiki('getting-started') },
  { path: 'options', component: loadWiki('options') },
  { path: 'data', component: loadWiki('data') },
  { path: 'theme', component: loadWiki('theme') },
  { path: 'contributing', component: loadWiki('contributing') },
  { path: 'events', component: loadWiki('events') },
  { path: 'change-type', component: loadWiki('change-type') },
  { path: 'props-demo1', component: loadWiki('props-1') },
  { path: 'props-demo2', component: loadWiki('props-2') }
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
