<template>
  <layout>
    <template v-slot:sidebar>
      <sidebar :navs="navs" />
    </template>
  </layout>
</template>

<script>
import Layout from '@examples/components/layout'
import Sidebar from '@examples/components/sidebar'
import navConfig from '@examples/pages/pc-demo/nav.config.json'

export default {
  name: 'PcDemo',
  components: {
    Layout,
    Sidebar,
  },
  data: function () {
    return {
      navs: navConfig,
    }
  },
}
</script>
