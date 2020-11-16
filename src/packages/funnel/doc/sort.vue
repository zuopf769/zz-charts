<template>
  <uix-funnel-chart :data="chartData" :settings="chartSettings" :height="340" />
</template>

<script>
export default {
  created() {
    const data = {
      Mon: 256,
      Tue: 767,
      Wed: 1356,
      Thu: 2087,
      Fri: 803,
      Sat: 582,
      Sun: 432
    }
    let values = Object.values(data)
    this.chartData = {
      dimensions: {
        name: 'Week',
        data: Object.keys(data).map(item => `${item}.`)
      },
      measures: [
        {
          name: 'PV',
          data: values
        }
      ]
    }
    this.chartSettings = {
      sort: (a, b) => values[b] - values[a]
    }
  }
}
</script>
