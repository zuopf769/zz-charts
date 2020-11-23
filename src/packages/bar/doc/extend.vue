<template>
  <uix-bar-chart :data="chartData" :extend="chartExtend" :height="340" />
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
        },
        {
          name: 'UV',
          data: [287, 707, 1756, 1822, 987, 432, 322]
        }
      ]
    }

    this.chartExtend = {
      series(v) {
        v.forEach(i => {
          i.barWidth = 10
        })
        return v
      },
      tooltip(v) {
        v.trigger = 'none'
        return v
      }
    }

    this.chartExtend = {
      series(v) {
        v.forEach(i => {
          i.barWidth = 10
        })
        return v
      },
      tooltip(v) {
        v.trigger = 'none'
        return v
      }
    }
  }
}
</script>
