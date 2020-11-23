# 如何使用

## 介绍

`uix-charts` 是基于 `Vue2.x` 和 `echarts4.x` 构建封装的图表组件库，用以解决繁杂的 `ECharts` 配置项以及数据转化带来的烦恼。`uix-charts` 生成一个 `ECharts` 图表时，用户只需关心**数据**与**配置项**，甚至无需配置项，即可生成一个默认的图表，使用 `uix-charts` 助你快捷、高效地构建图表。

## 通过 npm 安装

```JavaScript
npm i @xgfe/uix-charts echarts -S
```

## 引入 UixCharts

安装完成后，即可使用 `import` 或 `require` 使用。

```
import Vue from 'vue'
import UixCharts from '@xgfe/uix-charts'
import '@xgfe/uix-charts/lib/uix-charts.css'

Vue.use(UixCharts)

```

目前支持的图表列表如下：
| 图表 | 组件 |
| ---- | ---- |
| 折线图 | UixLineChart |
| 柱状图 | UixBarChart |
| 饼图 | UixPieChart |
| 环形图 | UixDonutChart |
| 漏斗图 | UixFunnelChart |
| 散点图 | UixScatterChart |

## 创建图表

```
<uix-bar-chart :data="chartData" />
```

```
export default {
  created () {
    this.chartData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [{
        name: 'PV',
        data: [256, 767, 1356, 2087, 803, 582, 432]
      }, {
        name: 'UV',
        data: [287, 707, 1756, 1822, 987, 432, 322]
      }]
    }
  }
}
```
