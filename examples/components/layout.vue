<template>
  <div class="page">
    <div class="sidebar-content">
      <slot name="sidebar"></slot>
    </div>
    <div class="page-content">
      <div class="markdown-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="less">
@import '~examples/style/variables.less';

.page {
  min-height: 100%;
  max-height: 100vh;
  padding-top: @header-height;
  overflow: auto;
}

.sidebar-content {
  position: fixed;
  top: 0;
  width: @sidebar-width;
  height: 100%;
  box-sizing: border-box;
  border-right: @border;
  padding: @header-height 0 0 0;
  overflow: hidden;
  background: @color-white;
  z-index: @sidebar-index;
}

.page-content {
  height: 100%;
  margin-left: @sidebar-width + 15px;
}

.markdown-content {
  width: @content-width-percent;
  padding: 32px 0 20px 0;
  margin: 0 auto;
  box-sizing: content-box;
}

@media (min-width: 1300px) {
  .markdown-content {
    max-width: @content-width-960;
  }
}

@media (min-width: 1500px) {
  .markdown-content {
    max-width: @content-width-1100;
  }
}

@media (min-width: 1700px) {
  .markdown-content {
    max-width: @content-width-1300;
  }
}

@media (min-width: 1900px) {
  .markdown-content {
    max-width: @content-width-1200;
  }
}

.markdown-content {
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }
  h1 {
    font-size: 30px;
    position: relative;
    margin-bottom: 40px;
    margin-top: 32px;
    &:after {
      content: ' ';
      display: inline-block;
      height: 4px;
      width: 30px;
      background-color: @color-primary;
      left: 0;
      bottom: -8px;
      position: absolute;
    }
  }
  h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  h4,
  h5 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 12px;
  }
  .demo-table {
    p {
      margin: 10px 0px 5px 0px;
      text-align: left;
    }
  }
  pre > code {
    display: block;
    padding: 20px;
    background-color: #f8f9fc;
    color: @color-text-2;
  }

  code {
    background-color: #f8f9fc;
    border-radius: 2px;
    color: #e96900;
    font-size: 0.8rem;
    margin: 0 2px;
    padding: 3px 5px;
    white-space: pre-wrap;
  }

  blockquote {
    margin: 0;
    padding-left: 10px;
    border-left: 3px solid @color-line-2;
    margin-bottom: 40px;
    color: #969cae;
    line-height: 24px;
  }
  p + blockquote {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
    color: @color-blue;
  }

  ul > li {
    margin-bottom: 5px;
  }

  .table {
    width: 100%;
    // table-layout: fixed;
    border-collapse: collapse;
    margin-bottom: 45px;
    color: #333;
    th {
      text-align: left;
      padding: 20px 32px;
      line-height: 20px;
      border-bottom: @border;
      color: @color-text-4;
      font-weight: @font-weight-medium;
      white-space: nowrap;
    }
    td {
      padding: 20px 32px;
      line-height: 20px;
      border-bottom: @border;
      max-width: 200px;
    }
  }

  .vuep {
    margin-bottom: 10px;
  }
}
</style>
