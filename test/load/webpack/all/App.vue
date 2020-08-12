<template>
  <div id="app">
    <div class="chart-container">
      <uix-line-chart :data="chartData" :loading="loading"></uix-line-chart>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loading: true
    }
  },
  created: function () {
    this.chartData = null

    this.chartSettings = {
      smooth: true,
      yAxisName: '单位:个'
    }

    this.title = {
      text: '新客数',
      textStyle: {
        fontSize: 14
      }
    }

    setTimeout(() => {
      this.loading = false
      this.chartData = {
        dimensions: {
          name: 'Month',
          data: ['5月', '6月', '7月', '8月', '9月', '10月']
        },
        measures: [
          {
            name: '新客数',
            data: [1130, 2240, 3335, 4450, 2249, 5570]
          }
        ]
      }
    }, 2000)
  }
}
</script>

<style>
.chart-container {
  padding: 20px;
  width: 500px;
}
</style>
