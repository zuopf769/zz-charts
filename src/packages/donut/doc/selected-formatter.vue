<template>
  <uix-donut-chart
    :data="chartData"
    :settings="chartSettings"
    :selected-value-formatter="selectedValueFormatter"
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
      APP: '4,0000',
      PC: '27,800',
      M端: '22,000',
      微信: '20,200',
      手Q: '15,600',
      小程序: '13,600'
    }
  },
  methods: {
    handlePieselectchanged(selected) {
      this.chartSettings.selectedDimension = selected.name
    },
    selectedValueFormatter(selected) {
      let { selectedDimension, selectedValue } = selected
      return [selectedDimension, selectedValue].join('\n')
    }
  }
}
</script>
