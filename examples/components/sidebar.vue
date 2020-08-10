<template>
  <div class="sidebar">
    <ul class="sidebar-nav">
      <li v-for="(group, index) in navs" :key="index" class="sidebar-nav-item">
        <div class="sidebar-bar-nav-content">
          <div v-if="group.name" class="sidebar-nav-item-text">
            {{ group.name }}
          </div>
          <ul v-if="group.children" class="sidebar-nest-nav">
            <li v-for="item in group.children" :key="item.path" class="sidebar-nest-nav-item">
              <router-link
                :to="{
                  path: `${item.path}`,
                  query: $route.query
                }"
              >
                {{ item.cnName }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    navs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
@import '~examples/style/variables.less';

.sidebar {
  height: 100%;
  overflow: auto;

  .sidebar-nav {
    padding: @sidebar-padding;
    font-size: 14px;
    list-style: none;
    white-space: nowrap;
    margin: 0;

    a {
      color: @text-color;
      text-decoration: none;
      font-weight: @font-weight-medium;
      transition: padding-left 0.5s ease;
      &:hover {
        color: @color-primary;
      }
    }
  }

  .sidebar-nav-item-text {
    padding: 12px 0px;
    color: @text-color;
    font-weight: @font-weight-medium;
    font-size: @font-size-main;
  }

  .sidebar-nest-nav {
    padding: 0;
    .router-link-exact-active {
      color: @color-primary;
      display: inline-block;
      padding-left: 14px;
      position: relative;
      box-sizing: content-box;

      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 3px;
        height: 100%;
        background: @color-primary;
        bottom: -5px;
        left: 0;
        top: 0;
      }
    }
  }
  .sidebar-nest-nav-item {
    padding: 12px 0 12px 12px;
    color: @text-annotate-color;
  }
}
</style>
