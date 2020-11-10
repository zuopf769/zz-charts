<template>
  <uix-donut-chart
    :data="chartData"
    :settings="chartSettings"
    legend-position="top"
    :height="340"
    :log="true"
    @pieselectchanged="handlePieselectchanged"
  />
</template>

<script>
export default {
  data: function () {
    return {
      chartSettings: {
        hoverAnimation: false,
        selectedMode: 'single',
        selectedDimension: 'APP',
        label: {
          show: false
        }
      }
    }
  },
  created() {
    this.chartData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [
        {
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600]
        }
      ]
    }
  },
  methods: {
    handlePieselectchanged(selected) {
      this.chartSettings.selectedDimension = selected.name
    }
  }
}
</script>
