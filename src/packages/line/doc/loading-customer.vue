<template>
  <uix-line-chart
    class="custom-loading"
    :data="chartData"
    :settings="chartSettings"
    :loading="loading"
    :legend-visible="false"
    :height="340"
  />
</template>

<style>
.custom-loading .uix-charts-loading-mask {
  background-color: rgba(0, 0, 0, 0.8);
}
.custom-loading .uix-charts-loading-mask .path {
  stroke: #f35352;
}
</style>

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
  }
}
</script>
