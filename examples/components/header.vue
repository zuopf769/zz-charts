<template>
  <header class="header">
    <div class="header-nav">
      <ul class="nav-list clearfix">
        <li class="nav-list-item">
          <router-link to="/explain">图表指南</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/pc-demo/started">图表组件</router-link>
        </li>
        <li class="nav-list-item">
          <a target="_blank" href="http://dev.sankuai.com/code/repo-detail/B2BWM/xgfe-vue-charts">仓库地址</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
@import '~examples/style/variables.less';

.header {
  display: block;
  background-color: @color-white;
  overflow: hidden;
  position: fixed;
  border-bottom: @border;
  width: 100%;
  background: transparent;
  z-index: @header-index;
  min-width: @min-width;
  box-shadow: @header-box-shadow;

  .nav-list {
    float: right;
  }

  .header-nav {
    width: 100%;
    padding: @header-padding;
    height: @header-height;
    background: @color-white;
  }
}

.nav-list-item {
  float: left;
  padding: 10px 25px;
  line-height: 20px;
  > a {
    text-decoration: none;
    text-align: right;
  }
  .router-link-active {
    font-weight: 600;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background: @color-blue;
      margin-right: 4px;
    }
  }
}
</style>
