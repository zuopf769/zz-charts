<template>
  <uix-line-chart
    :data="chartData"
    :settings="chartSettings"
    :grid="grid"
    :visual-map="visualMap"
    :legend-visible="false"
    :height="340"
  />
</template>

<script>
// 使用前需先引入对应模块
// import 'echarts/lib/component/visualMap'
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Month',
        data: ['5月', '6月', '7月', '8月', '9月', '10月']
      },
      measures: [
        {
          name: '成本',
          data: [15, 12, 21, 41, 31, 71]
        },
        {
          name: '利润',
          data: [12, 25, 10, 31, 30, 51]
        }
      ]
    }

    this.grid = {
      right: 90
    }

    this.visualMap = [
      {
        type: 'piecewise',
        splitNumber: 5,
        min: 0,
        max: 60,
        right: 0,
        top: '50%'
      }
    ]

    this.chartSettings = {
      yAxisName: ['金额/元']
    }
  }
}
</script>
