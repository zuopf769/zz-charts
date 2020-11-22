<template>
  <uix-pie-chart :data="chartData" :color="color" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [
        {
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }
      ]
    }

    this.color = ['#207722', '#68b133', '#a9de83', '#f63629', '#f66258', '#ffc0af']
  }
}
</script>
