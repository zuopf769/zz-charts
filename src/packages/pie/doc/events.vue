<template>
  <uix-pie-chart
    :title="title"
    :data="chartData"
    :settings="chartSettins"
    :height="340"
    @pieselectchanged="onPieselectchanged"
  />
</template>

<script>
export default {
  data() {
    return {
      title: { text: '选中的维度是：' },
      chartData: {
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
      },
      chartSettins: {
        selectedMode: 'single'
      }
    }
  },
  methods: {
    onPieselectchanged: function (params) {
      this.title.text = `选中的维度是：${params.name}`
    }
  }
}
</script>
