<template>
  <uix-donut-chart
    :data="chartData"
    :settings="chartSettings"
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

    this.dataMap = {
      APP: 40000,
      PC: 27800,
      M端: 22000,
      微信: 20200,
      手Q: 15600,
      小程序: 13600
    }
  },
  methods: {
    handlePieselectchanged(selected) {
      this.chartSettings.selectedDimension = selected.name
    }
  }
}
</script>
