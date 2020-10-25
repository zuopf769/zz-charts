<template>
  <uix-line-chart :data="chartData" :settings="chartSettings" :extend="chartExtend" :height="340" />
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
          data: [1393, 3530, 2923, 1723, 3792, 4593]
        },
        {
          name: '合作客户数',
          data: [1093, 3230, 2623, 1423, 3492, 4292]
        },
        {
          name: '综合毛利率',
          data: [0.32, 0.26, 0.76, 0.49, 0.32, 0.78]
        },
        {
          name: '补贴率',
          data: [0.032, 0.026, 0.076, 0.049, 0.032, 0.078]
        }
      ]
    }

    this.chartSettings = {
      yAxisName: ['金额/万', '比率', '数值'],
      yAxisLabelType: ['normal', 'percentage', 'normal'],
      secondMeaAxis: ['综合毛利率', '补贴率'],
      thirdMeaAxis: ['合作客户数']
    }

    this.chartExtend = {
      grid: {
        right: 60
      }
    }
  }
}
</script>
