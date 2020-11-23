<template>
  <uix-line-chart
    :data="chartData"
    :settings="chartSettings"
    :legend-visible="false"
    :after-config="afterConfig"
    :height="340"
  />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Month',
        data: ['5月', '6月', '7月', '8月', '9月', '10月']
      },
      measures: [
        {
          name: '新客数',
          data: [11130, 2240, 1335, 4450, 2249, 5570]
        }
      ]
    }

    this.chartSettings = {
      yAxisName: ['单位/个']
    }
  },
  methods: {
    afterConfig(options) {
      options.tooltip.showDelay = 500
      return options
    }
  }
}
</script>
