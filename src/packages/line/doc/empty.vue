<template>
  <uix-line-chart
    :data="chartData"
    :settings="chartSettings"
    :loading="loading"
    :legend-visible="false"
    :height="340"
  />
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        dimensions: {
          name: 'Month',
          data: ['5月', '6月', '7月', '8月', '9月', '10月']
        },
        measures: []
      },
      chartSettings: {
        yAxisName: ['单位/个']
      },
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
