<template>
  <uix-line-chart
    :data="chartData"
    :settings="chartSettings"
    :extend="chartExtend"
    :tooltip-formatter="tooltipFormatter"
    :height="340"
    :log="true"
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
          name: '销售额',
          data: [1393, 3530, 2923, 1723, 3792, 4593]
        },
        {
          name: '合作客户数',
          data: [1093, 3230, 2623, 1423, 3492, 4292]
        },
        {
          name: '综合毛利率',
          data: [32, 26, 76, 49, 32, 78]
        },
        {
          name: '补贴率',
          data: [3.2, 2.6, 7.6, 4.9, 3.2, 7.8]
        }
      ]
    }

    this.chartSettings = {
      yAxisName: ['金额/万', '比率', '数值'],
      secondMeaAxis: ['综合毛利率', '补贴率'],
      thirdMeaAxis: ['合作客户数']
    }

    this.chartExtend = {
      grid: {
        right: 60
      },
      'yAxis[1].axisLabel.formatter': '{value}%'
    }

    this.showValArr = [
      ['1,393', '3,530', '2,923', '1,723', '3,792', '4,593'],
      ['1,093', '3,230', '2,623', '1,423', '3,492', '4,292'],
      ['32%', '26%', '76%', '49%', '32%', '78%'],
      ['0.32%', '0.26%', '0.76%', '0.49%', '0.32%', '0.78%']
    ]

    this.tooltipFormatter = items => {
      let tpl = []
      const { name, axisValueLabel } = items[0]
      const title = name || axisValueLabel
      tpl.push(`${title}<br>`)
      items.forEach(({ seriesName, seriesIndex, dataIndex, marker }) => {
        let showValue = null
        showValue = this.showValArr[seriesIndex][dataIndex]
        tpl.push(marker)
        tpl.push(`${seriesName}: ${showValue}`)
        tpl.push('<br>')
      })
      return tpl.join('')
    }
  }
}
</script>
