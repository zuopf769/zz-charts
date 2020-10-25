<template>
  <uix-line-chart :data="chartData" :settings="chartSettings" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Month',
        data: ['5月', '6月', '7月', '8月', '9月', '10月']
      },
      measures: [
        {
          name: '访问用户',
          data: [1393, 15300, 2923, 1723, 3792, 4593]
        },
        {
          name: '下单用户',
          data: [1093, 3230, 2623, 1423, 3492, 4292]
        },
        {
          name: '下单率',
          data: [0.32, 0.26, 0.76, 0.49, 0.323, 0.78]
        }
      ]
    }

    this.chartSettings = {
      yAxisName: ['数值', '比率'],
      yAxisLabelType: ['normal', 'percentage'],
      secondMeaAxis: ['下单率']
    }
  }
}
</script>
