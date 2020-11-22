<template>
  <uix-line-chart :data="chartData" :settings="chartSettings" :loading="loading" :legend-visible="false" :height="340">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <span>没有数据😂</span>
    </div>
  </uix-line-chart>
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
