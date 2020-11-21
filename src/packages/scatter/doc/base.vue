<template>
  <uix-scatter-chart :data="chartData" :settings="chartSettings" :legend-visible="false" :height="340" />
</template>

<script>
export default {
  created() {
    const randomData = []

    for (let i = 0; i < 50; i++) {
      randomData.push([this.rangeRandom(20, 200, 2), this.rangeRandom(10, 100, 2)])
    }
    this.chartData = {
      dimensions: {
        data: ['随机值X', '随机值Y']
      },
      measures: [
        {
          name: '随机分布数据',
          data: randomData
        }
      ]
    }

    this.chartSettings = {
      digit: [2, 2]
    }
  },
  methods: {
    // 根据指定范围生成随机数
    rangeRandom(min, max, precision) {
      return (Math.random() * (max - min) + min).toFixed(precision)
    }
  }
}
</script>
