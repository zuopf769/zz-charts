# 介绍

`uix-charts` 是基于 `Vue2.x` 和 `echarts4.x` 构建封装的图表组件库，用以解决繁杂的 `ECharts` 配置项以及数据转化带来的烦恼。`VeCharts` 生成一个 `ECharts` 图表时，用户只需关心**数据**与**配置项**，甚至无需配置项，即可生成一个默认的图表，使用 `VeCharts` 助你快捷、高效地构建图表。

```JavaScript
npm i @zz/zz-ui
```

<div class="code">
	<vuep :template="tooltip"></vuep>
</div>

<script>
const tooltip =  `
<template>
  <div>test</div>
</template>
<script>
module.exports = {
  data () {
    return {
      chartData: {
        title: '预算使用情况饼线图',
        type: 'line',
        columns: ['date', 'budget'],
        rows: [
          { 'date': '2020-01-01', 'budget': 1393, 'percent': 440 },
          { 'date': '2020-01-02', 'budget': 353, 'percent': 330  },
          { 'date': '2020-01-03', 'budget': 530, 'percent': 230  },
          { 'date': '2020-01-04', 'budget': 1530, 'percent': 103  },
          { 'date': '2020-01-05', 'budget': 230, 'percent': 630  },
          { 'date': '2020-01-06', 'budget': 253, 'percent': 900  },
          { 'date': '2020-01-07', 'budget': 753, 'percent': 109  }
        ],
        legendType: 2,
        tooltip: {
            backgroundColor: 'green'
        }
      }
    }
  }
}
<\/script>
`;
export default {
	data: () => ({
        tooltip
	})
}
</script>
