import PcDemo from '@examples/pages/pc-demo/index.vue'
import Test from '@examples/components/test.vue'

function loadWiki(component) {
  return () => import(`../wiki/pc-demo/${component}.md`)
}

export default [
  {
    name: 'pcDemo',
    path: '/pc-demo',
    component: PcDemo,
    children: [
      { path: 'started', component: loadWiki('getting-started') },
      { path: 'usage', component: Test },
      { path: 'options', component: Test },
    ],
  },
]
