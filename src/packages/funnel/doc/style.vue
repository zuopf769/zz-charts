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
          data: [256, 767, 1356, 2087, 803, 582, 432]
        }
      ]
    }
    this.chartSettings = {
      label: {
        formatter: '{c} ({d})'
      },
      labelLine: {
        lineStyle: {
          color: '#ffaaaa'
        }
      },
      itemStyle: {
        borderColor: '#FccF00',
        borderWidth: 2
      }
    }
  }
}
</script>
