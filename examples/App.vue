<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
// 需要单独引入的模块
import 'echarts/lib/component/title'
import 'echarts/lib/component/markArea'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/visualMap'

import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="less">
@import '~normalize.css/normalize';
@import '~examples/style/common';
</style>
