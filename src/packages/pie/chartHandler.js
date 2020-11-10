import { getDataset, formatMeasure } from '@/utils'

const pieRadius = [0, '70%']
const donutRadius = ['50%', '70%']
const pieCenter = ['40%', '50%']
const pieCenter2 = ['50%', '50%']

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

function getDefaultCenter(extra) {
  let { legendPosition } = extra
  let defaultCenter = pieCenter
  if (~['top', 'bottom'].indexOf(legendPosition)) {
    defaultCenter = pieCenter2
  }
  return defaultCenter
}

function getPieDataset(args) {
  let { data, settings, extra } = args
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

function getPieTooltip(args) {
  let { settings, extra, isDonut } = args
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
  const { data, settings, isDonut } = args
  const { legendType = 'scroll', legendPadding = 5 } = settings
  let legend = {
    type: legendType,
    padding: legendPadding
  }

  if (isDonut) {
    const { dimensions } = data
    legend.data = dimensions.data
  }
  return legend
}

// 环形图中央的label是一个label显示在中央的pie
function getCenterLabelSeriesItem(args) {
  let { settings, extra } = args
  const { dataType = 'normal', digit = 0, selectedDimension } = settings
  let { selectedValue, selectedValueFormatter } = extra
  let center = getDefaultCenter(extra)

  return {
    name: 'label',
    type: 'pie',
    radius: [0, center[0]],
    center,
    label: {
      normal: {
        position: 'center',
        fontSize: 20,
        fontWeight: 'bolder',
        color: '#222222',
        formatter() {
          if (selectedValueFormatter) {
            return selectedValueFormatter.apply(null, [{ selectedDimension, selectedValue }])
          }
          return formatMeasure(dataType, selectedValue, digit)
        }
      }
    },
    itemStyle: {
      opacity: 0
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    silent: true,
    data: [{ value: 25, name: selectedValue }]
  }
}

function getPieSeries(args) {
  const { data, settings, extra, isDonut } = args

  let series = []

  if (data.length === undefined) {
    series = handleData(data, settings, extra, isDonut)
  } else if (data.length === 1) {
    series = handleData(data[0], settings, extra, isDonut)
  } else {
    // 一般是配置两项
    for (let index in data) {
      if (Object.prototype.hasOwnProperty.call(data, index)) {
        series.push(handleData(data[index], settings[index], extra, isDonut, index)[0])
      }
    }
  }
  return series
}

function handleData(data, settings, extra, isDonut, datasetIndex = 0) {
  const series = []
  const { dimensions, measures } = data
  const {
    selectedMode = false,
    selectedDimension,
    hoverAnimation = true,
    roseType = false,
    center = getDefaultCenter(extra),
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
      center,
      radius,
      datasetIndex,
      ...others
    }

    if (isDonut && selectedMode && selectedDimension) {
      seriesItem.data = data.map((value, index) => {
        let dimension = dimensions.data[index]
        let selected = dimension === selectedDimension
        if (selected) extra.selectedValue = value
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

  if (isDonut && selectedMode && selectedDimension) {
    series.push(getCenterLabelSeriesItem({ settings, extra }))
  }
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getPieDataset({ data, settings, extra })

  const tooltip = tooltipVisible && getPieTooltip({ settings, extra, isDonut })

  const legend = legendVisible && getPieLegend({ data, settings, isDonut })

  const series = getPieSeries({ data, settings, extra, isDonut })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    series
  }

  // console.log(JSON.stringify(options))
  return options
}

export const donut = (data, settings, extra) => {
  return pie(data, settings, extra, true)
}
