<template>
  <uix-pie-chart :data="chartData" :settings="chartSettings" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [
        {
          name: 'PV',
          data: [40186, 27895, 22170, 20258, 15600, 13613]
        }
      ]
    }

    this.chartSettings = {
      dataType: function (value, numeral) {
        return numeral(value).format('0.0a')
      },
      hoverAnimation: false,
      selectedMode: 'single'
    }
  }
}
</script>
