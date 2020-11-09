<template>
  <uix-donut-chart
    :data="chartData"
    :settings="chartSettings"
    :height="340"
    :tooltip-formatter="tooltipFormatter"
    :log="true"
    :after-set-option="afterSetOption"
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
        selectedValue: 4011000,
        label: {
          show: false
        }
      }
    }
  },
  created() {
    this.chartData = {
      dimensions: {
        name: '品类',
        data: [
          '米面粮油',
          '肉禽水产（鲜）',
          '蔬菜水果',
          '肉禽水产（冷冻）',
          '冷冻饮品、饮料、酒',
          '调料干货',
          '鲜蛋及蛋制品',
          '速食熟食',
          '冷冻半成品',
          '休闲食品',
          '培烤食品',
          '日用百货',
          '包装物',
          '海报材料',
          '其他'
        ]
      },
      measures: [
        {
          name: 'PV',
          data: [40000, 27800, 22000, 20200, 15600, 13600, 100, 1100, 1700, 1200, 1300, 1600, 1400, 1600, 600]
        }
      ]
    }

    this.dataMap = {
      米面粮油: 40000,
      '肉禽水产（鲜）': 27800,
      '肉禽水产（冷冻）': 22000,
      '冷冻饮品、饮料、酒': 20200,
      调料干货: 15600,
      鲜蛋及蛋制品: 13600
    }
  },
  methods: {
    handlePieselectchanged(selected) {
      this.chartSettings.selectedValue = this.dataMap[selected.name]
    },
    tooltipFormatter(items) {
      console.log(items)
      return '22222'
    },
    afterSetOption(echarts) {
      console.log(echarts)
      console.log('xxx', echarts.getViewOfComponentModel())
    }
  }
}
</script>
