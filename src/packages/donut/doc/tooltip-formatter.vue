<template>
  <uix-donut-chart
    :data="chartData"
    :settings="chartSettings"
    :height="340"
    :tooltip-formatter="tooltipFormatter"
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
        selectedDimension: '米面粮油',
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

    this.showValArr = ['4276', '41.23%', '15.42%']
  },
  methods: {
    handlePieselectchanged(selected) {
      this.chartSettings.selectedDimension = selected.name
    },
    tooltipFormatter(item) {
      let tpl = []
      let { marker, name } = item
      tpl.push(`${marker}${name}<br>`)
      tpl.push(`销售额：${this.showValArr[0]}<br>`)
      tpl.push(`客户覆盖：${this.showValArr[1]}<br>`)
      tpl.push(`综合毛利率（考核）：${this.showValArr[1]}<br>`)
      return tpl.join('')
    }
  }
}
</script>
