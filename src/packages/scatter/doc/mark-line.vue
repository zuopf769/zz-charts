<template>
  <uix-scatter-chart :data="chartData" :settings="chartSettings" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        data: ['销售额', '补贴率']
      },
      measures: [
        {
          name: '当前城市',
          data: [[37062, 0.754, 252847810, 'United States', 1990]]
        },
        {
          name: '其他城市',
          data: [
            [28604, 0.77, 17096869, 'Australia', 1990],
            [31163, 0.774, 27662440, 'Canada', 1990],
            [1516, 0.68, 1154605773, 'China', 1990],
            [13670, 0.447, 10582082, 'Cuba', 1990],
            [28599, 0.75, 4986705, 'Finland', 1990],
            [29476, 0.671, 56943299, 'France', 1990],
            [31476, 0.754, 78958237, 'Germany', 1990],
            [28666, 0.781, 254830, 'Iceland', 1990],
            [1777, 0.577, 870601776, 'India', 1990],
            [29550, 0.791, 122249285, 'Japan', 1990],
            [2076, 0.679, 20194354, 'North Korea', 1990],
            [12087, 0.72, 42972254, 'South Korea', 1990],
            [24021, 0.754, 3397534, 'New Zealand', 1990],
            [43296, 0.568, 4240375, 'Norway', 1990],
            [10088, 0.308, 38195258, 'Poland', 1990],
            [19349, 0.196, 147568552, 'Russia', 1990],
            [10670, 0.73, 53994605, 'Turkey', 1990],
            [26424, 0.157, 57110117, 'United Kingdom', 1990]
          ]
        }
      ]
    }
    this.chartSettings = {
      dataType: ['en', 'percentage'],
      digit: [0, 1],
      itemStyle: {
        normal: {
          opacity: 0.8
        }
      },
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2
      }
    }
  }
}
</script>
