<template>
  <uix-line-chart
    :data="chartData"
    :settings="chartSettings"
    :mark-line="markLine"
    :mark-point="markPoint"
    :legend-visible="false"
    :height="340"
  />
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
          name: '成本',
          data: [1523, 1223, 2123, 4123, 3123, 7123]
        },
        {
          name: '利润',
          data: [1212, 2233, 1335, 3223, 2249, 5570]
        }
      ]
    }

    this.chartSettings = {
      yAxisName: ['金额/元']
    }

    this.markLine = {
      data: [
        {
          name: '平均线',
          type: 'average'
        }
      ]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
  }
}
</script>
