<template>
  <uix-line-chart :data="chartData" :height="340" v-bind="options" />
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
          name: '销售额',
          data: [1130, 2240, 3335, 4450, 2249, 5570]
        },
        {
          name: '补贴率',
          data: [1.1, 3.2, 2.3, 1.4, 5.5, 3.6]
        }
      ]
    }

    this.options = {
      yAxis: [
        {
          type: 'value',
          name: '单位：万'
        },
        {
          type: 'value',
          name: '单位：%'
        }
      ],
      series: [
        { type: 'line', smooth: true },
        { type: 'line', smooth: true, yAxisIndex: 1 }
      ]
    }
  }
}
</script>
