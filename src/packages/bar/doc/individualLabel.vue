<template>
  <uix-bar-chart :data="chartData" :height="340" :settings="chartSettings" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.']
      },
      measures: [
        {
          name: '销售额',
          data: [1393, 3530, 2923, 1723]
        },
        {
          name: '访问用户',
          data: [1393, 15300, 2923, 1723]
        },
        {
          name: '下单用户',
          data: [1093, 3230, 2623, 1423]
        },
        {
          name: '下单率',
          data: [0.32, 0.26, 0.76, 0.49]
        }
      ]
    }
    this.chartSettings = {
      showLine: ['下单率'],
      yAxisName: ['金额/万', '数值', '比率'],
      yAxisLabelType: ['normal', 'normal', 'percentage'],
      secondMeaAxis: ['销售额'],
      thirdMeaAxis: ['下单率'],
      label: [
        {
          name: '访问用户',
          config: {
            show: true
          }
        },
        {
          name: '下单率',
          config: {
            show: true,
            fontWeight: 'bold'
          }
        }
      ]
    }
  }
}
</script>
