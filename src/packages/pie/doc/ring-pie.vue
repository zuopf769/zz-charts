<template>
  <uix-pie-chart :data="chartData" :settings="chartSettings" :log="true" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = [
      {
        dimensions: {
          name: '渠道',
          data: ['移动端', 'PC端']
        },
        measures: [
          {
            name: 'PV',
            data: [150000, 90000]
          }
        ]
      },
      {
        dimensions: {
          name: '渠道',
          data: ['APP', 'M端', '微信', '手Q', '小程序', 'PC']
        },
        measures: [
          {
            name: 'PV',
            data: [40000, 30000, 20000, 50000, 10000, 90000]
          }
        ]
      }
    ]
    this.chartSettings = [
      {
        selectedMode: 'single',
        radius: [0, '30%'],
        labelLine: {
          show: false
        },
        label: {
          position: 'inner',
          color: '#fff'
        }
      },
      {
        selectedMode: 'single',
        radius: ['40%', '55%']
      }
    ]
  }
}
</script>
