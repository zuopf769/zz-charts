import { getDataset, formatMeasure } from '@/utils'

const pieRadius = [0, '70%']
const donutRadius = ['50%', '70%']
const pieOffsetY = '50%'
// 环形图中心显示标签
const donutLabel = {
  normal: {
    show: false,
    position: 'center'
  },
  emphasis: {
    show: true,
    fontSize: 20,
    color: '#222222'
  }
}

function getPieDataset(data, settings, extra) {
  const dataset = []
  extra.chartType = 'pie'
  // 环形饼图
  if (data.length > 1) {
    for (let element of data) {
      dataset.push(getDataset(element, settings, extra))
    }
  } else {
    dataset.push(getDataset(data, settings, extra))
  }
  return dataset
}

function getPieTooltip(settings, extra, isDonut) {
  const { dataType = 'normal', digit = 0 } = settings
  let { tooltipFormatter } = extra

  return {
    trigger: 'item',
    confine: true,
    formatter(item) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      let tpl = []
      tpl.push(item.marker)
      tpl.push(`${item.name}:`)
      tpl.push(formatMeasure(dataType, isDonut ? item.value : item.value[1], digit))
      tpl.push(`(${item.percent}%)`)
      return tpl.join(' ')
    }
  }
}

function getPieLegend(args) {
  const { settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings
  return {
    type: legendType,
    padding: legendPadding
  }
}

function getPieSeries(args) {
  const { data, settings, isDonut } = args

  let series = []

  if (data.length === undefined) {
    series = handleData(data, settings, isDonut)
  } else if (data.length === 1) {
    series = handleData(data[0], settings, isDonut)
  } else {
    // 一般是配置两项
    for (let index in data) {
      if (Object.prototype.hasOwnProperty.call(data, index)) {
        series.push(handleData(data[index], settings[index], isDonut, index)[0])
      }
    }
  }
  return series
}

function handleData(data, settings, isDonut, datasetIndex = 0) {
  const series = []
  const { dimensions, measures } = data
  const {
    selectedMode = false,
    hoverAnimation = true,
    roseType = false,
    offsetY = pieOffsetY,
    radius = isDonut ? donutRadius : pieRadius,
    label = isDonut ? donutLabel : {},
    labelLine,
    itemStyle,
    ...others
  } = settings
  measures.forEach(({ name, data = [] }) => {
    let seriesItem = {
      type: 'pie',
      name,
      selectedMode,
      hoverAnimation,
      roseType,
      center: ['50%', offsetY],
      radius,
      datasetIndex,
      ...others
    }

    if (isDonut) {
      let { selectedValue = 0 } = settings
      seriesItem.data = data.map((value, index) => {
        let selected = selectedValue === value
        return {
          name: dimensions.data[index],
          value: value,
          selected
        }
      })
    }
    if (label) {
      seriesItem.label = label
    }
    if (labelLine) {
      seriesItem.labelLine = labelLine
    }
    if (itemStyle) {
      seriesItem.itemStyle = itemStyle
    }
    series.push(seriesItem)
  })
  return series
}

function getGraphic(settings) {
  let { selectedValue } = settings
  return {
    type: 'text',
    z: 100,
    left: 'center',
    top: 'middle',
    style: {
      fill: '#222222',
      text: selectedValue,
      font: '20px Microsoft YaHei'
    }
  }
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getPieDataset(data, settings, extra)

  const tooltip = tooltipVisible && getPieTooltip(settings, extra, isDonut)

  const legend = legendVisible && getPieLegend({ settings })

  const series = getPieSeries({ data, settings, isDonut })

  const graphic = isDonut && getGraphic(settings)

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    graphic,
    series
  }

  // console.log(JSON.stringify(options))
  return options
}

export const donut = (data, settings, extra) => {
  return pie(data, settings, extra, true)
}
