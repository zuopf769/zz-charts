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
          name: '销售额',
          data: [1130, 2240, 3335, 4450, 2249, 5570]
        },
        {
          name: '补贴率',
          data: [1.1, 1.2, 1.3, 1.4, 1.5, 1.6]
        }
      ]
    }

    this.chartSettings = {
      smooth: true
    }
  }
}
</script>
