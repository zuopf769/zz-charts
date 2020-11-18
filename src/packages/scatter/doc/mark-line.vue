<template>
  <uix-scatter-chart :data="chartData" :settings="chartSettings" :log="true" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        data: ['综合毛利率', '补贴率']
      },
      measures: [
        {
          name: '其他城市',
          data: [[37062, 75.4, 252847810, 'United States', 1990]]
        },
        {
          name: '当前城市',
          data: [
            [28604, 77, 17096869, 'Australia', 1990],
            [31163, 77.4, 27662440, 'Canada', 1990],
            [1516, 68, 1154605773, 'China', 1990],
            [13670, 44.7, 10582082, 'Cuba', 1990],
            [28599, 75, 4986705, 'Finland', 1990],
            [29476, 67.1, 56943299, 'France', 1990],
            [31476, 75.4, 78958237, 'Germany', 1990],
            [28666, 78.1, 254830, 'Iceland', 1990],
            [1777, 57.7, 870601776, 'India', 1990],
            [29550, 79.1, 122249285, 'Japan', 1990],
            [2076, 67.9, 20194354, 'North Korea', 1990],
            [12087, 72, 42972254, 'South Korea', 1990],
            [24021, 75.4, 3397534, 'New Zealand', 1990],
            [43296, 56.8, 4240375, 'Norway', 1990],
            [10088, 30.8, 38195258, 'Poland', 1990],
            [19349, 19.6, 147568552, 'Russia', 1990],
            [10670, 7.3, 53994605, 'Turkey', 1990],
            [26424, 15.7, 57110117, 'United Kingdom', 1990]
          ]
        }
      ]
    }
    this.chartSettings = {
      itemStyle: {
        normal: {
          opacity: 0.8
        }
      },
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2
      },
      markLine: [25000, 40]
    }
  }
}
</script>
