<template>
  <uix-funnel-chart :data="chartData" :settings="chartSettings" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Week',
        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
      },
      measures: [
        {
          name: 'PV',
          data: [36000, 28000, 24000, 20000, 12000, 6000, 2000]
        },
        {
          name: 'UV',
          data: [28000, 22000, 18000, 14000, 8000, 4000, 2000]
        }
      ]
    }
    this.chartSettings = {
      symmetric: true
    }
  }
}
</script>
