<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/header.vue'
console.log('xxx', Header)
export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style lang="less">
@import '~normalize.css/normalize';
@import '~examples/style/common';
</style>
