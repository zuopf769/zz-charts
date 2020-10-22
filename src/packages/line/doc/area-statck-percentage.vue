<template>
  <uix-line-chart :data="chartData" :settings="chartSettings" :height="340" />
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
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        },
        {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        },
        {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }
      ]
    }
    this.chartSettings = {
      stack: {
        lang: ['Vue', 'React', 'Angular']
      },
      area: true,
      yAxisLabelType: 'percentage',
      percentage: true,
      tooltipFormatter: function (params) {
        let [tar] = params
        const tooltipContent = params
          .map(v => {
            return `${v.seriesName}：${(v.value[v.seriesIndex + 1] * 100).toFixed(2)} %`
          })
          .join('<br/>')
        return tar.name + '<br/>' + tooltipContent
      }
    }
  }
}
</script>
