<template>
  <div>
    <button @click="changeType">切换图形类型</button>
    <uix-chart :data="chartData" :settings="chartSettings" :legend-visible="false" :log="true" :height="340" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeArr: ['line', 'pie', 'bar'],
      index: 0,
      chartData: {
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
      },
      chartSettings: {
        type: 'line'
      }
    }
  },
  methods: {
    changeType() {
      this.index++
      if (this.index >= this.typeArr.length) {
        this.index = 0
      }
      this.chartSettings = { type: this.typeArr[this.index] }
    }
  }
}
</script>
