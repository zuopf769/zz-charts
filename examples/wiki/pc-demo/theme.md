# 样式

[echarts 中的样式设置有四种方案](https://echarts.apache.org/zh/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E6%A0%B7%E5%BC%8F%E7%AE%80%E4%BB%8B)，可以改变图形元素或者文字的颜色、明暗、大小等。

- 颜色主题（Theme）
- 调色盘
- 直接样式设置（itemStyle、lineStyle、areaStyle、label、...）
- [视觉映射（visualMap）](https://echarts.apache.org/zh/tutorial.html#%E6%95%B0%E6%8D%AE%E7%9A%84%E8%A7%86%E8%A7%89%E6%98%A0%E5%B0%84)

上面这几种方式的功能范畴可能会有交叉（即同一种细节的效果可能可以用不同的方式实现），但是他们各有各的场景偏好。

## 更换主题

支持 `Object` 格式的主题，可以通过 [echarts 主题构建工具](https://echarts.apache.org/zh/theme-builder/) 生成，下例为 `walden` 主题的应用

:::include(src="../../../src/packages/bar/doc/theme.vue")
:::

## 更换配色

:::include(src="../../../src/packages/pie/doc/theme-color.vue")
:::

## 设置视觉映射组件

:::include(src="../../../src/packages/line/doc/visual-map.vue")
:::
