import { getDataset, getStackMap, formatMeasure } from '@/utils'
import { isArray } from 'lodash-es'

function getLineTooltip(settings, extra) {
  const {
    yAxisLabelType = ['normal', 'normal', 'normal'],
    yAxisLabelDigits = [0, 0, 0],
    secondMeaAxis = [],
    thirdMeaAxis = []
  } = settings

  let { tooltipFormatter } = extra
  return {
    trigger: 'axis',
    confine: true,
    formatter(items) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      let tpl = []
      const { name, axisValueLabel } = items[0]
      const title = name || axisValueLabel
      tpl.push(`${title}<br>`)
      items.forEach(({ seriesName, data, seriesIndex, marker }) => {
        let showData = null
        const itemData = isArray(data) ? data[seriesIndex + 1] : data
        let type = yAxisLabelType[0] || 'normal'
        let digit = yAxisLabelDigits[0] || 0
        if (~secondMeaAxis.indexOf(seriesName)) {
          type = yAxisLabelType[1] || 'normal'
          digit = yAxisLabelDigits[1] || 0
        }
        if (~thirdMeaAxis.indexOf(seriesName)) {
          type = yAxisLabelType[2] || 'normal'
          digit = yAxisLabelDigits[2] || 0
        }
        showData = formatMeasure(type, itemData, digit)
        tpl.push(marker)
        tpl.push(`${seriesName}: ${showData}`)
        tpl.push('<br>')
      })
      return tpl.join('')
    }
  }
}

function getLineLegend(args) {
  const { settings } = args
  const { legendType = 'scroll', legendPadding = 5, legendSelectedMode = true } = settings
  return {
    type: legendType,
    padding: legendPadding,
    selectedMode: legendSelectedMode
  }
}

function getLineDimAxis(args) {
  const { settings } = args
  const type = settings.xAxisType || 'category'
  return {
    type,
    boundaryGap: false,
    axisTick: {
      inside: true
    }
  }
}

function getLineMeaAxis(args) {
  const { settings } = args
  const {
    secondMeaAxis = [],
    thirdMeaAxis = [],
    yAxisScale = [],
    yAxisLabelType = [],
    yAxisName = [],
    yAxisInterval,
    yAxisMax,
    yAxisMin,
    percentage = false
  } = settings

  let meaAxisLength = secondMeaAxis.length ? 2 : 1
  meaAxisLength = secondMeaAxis.length && thirdMeaAxis.length ? 3 : meaAxisLength

  let yAxis = []
  for (let i = 0; i < meaAxisLength; i++) {
    let yAxisBase = {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      min: percentage ? 0 : null,
      max: percentage ? 1 : null
    }
    if (yAxisLabelType[i]) {
      yAxis[i] = Object.assign({}, yAxisBase, {
        axisLabel: {
          formatter: value => formatMeasure(yAxisLabelType[i], value)
        }
      })
    } else {
      yAxis[i] = Object.assign({}, yAxisBase)
    }
    yAxis[i]['name'] = yAxisName[i] || ''
    yAxis[i]['scale'] = yAxisScale[i] || false
    if (yAxisInterval) {
      yAxis[i]['interval'] = Number(yAxisInterval)
    }
    if (!percentage) {
      yAxis[i]['max'] = yAxisMax
      yAxis[i]['min'] = yAxisMin
    }
    if (i === 2) {
      yAxis[i]['offset'] = 60
    }
  }

  return yAxis
}

// build label
function getLineLabel(args) {
  let {
    label = {},
    yAxisLabelType = ['normal', 'normal', 'normal'],
    yAxisLabelDigits = [0, 0, 0],
    secondMeaAxis = [],
    thirdMeaAxis = []
  } = args
  const { position = 'top', ...others } = label

  const formatter = params => {
    const { value, seriesName, seriesIndex } = params
    let formatType = yAxisLabelType[0] || 'normal'
    let formatDigits = yAxisLabelDigits[0] || 0
    if (~secondMeaAxis.indexOf(seriesName)) {
      formatType = yAxisLabelType[1] || 'normal'
      formatDigits = yAxisLabelDigits[1] || 0
    }
    if (~thirdMeaAxis.indexOf(seriesName)) {
      formatType = yAxisLabelType[2] || 'normal'
      formatDigits = yAxisLabelDigits[2] || 0
    }
    // dataset formatter need shift the value
    value.shift()
    return formatMeasure(formatType, value[seriesIndex], formatDigits)
  }

  return {
    position,
    formatter,
    ...others
  }
}

function getLineStyle(args) {
  const { width = 2, ...others } = args
  return {
    width,
    ...others
  }
}

function getItemStyle(args) {
  const { borderColor = '#FFFFF', borderWidth = 1, ...others } = args
  return {
    borderColor,
    borderWidth,
    ...others
  }
}

function getLineSeries(args) {
  const { data, settings } = args
  const { measures } = data
  const {
    lineStyle = {},
    showSymbol = true,
    smooth = false,
    stack = null,
    step = null,
    symbol = 'circle',
    symbolSize = 6,
    itemStyle = {},
    area = false,
    areaStyle = {},
    secondMeaAxis = [],
    thirdMeaAxis = []
  } = settings
  const series = []
  const stackMap = stack && getStackMap(stack)

  measures.forEach(({ name }) => {
    let seriesItem = {
      type: 'line',
      name,
      label: getLineLabel(settings),
      lineStyle: getLineStyle(lineStyle),
      showSymbol,
      smooth,
      stack: stack && stackMap[name],
      step,
      symbol,
      symbolSize,
      itemStyle: getItemStyle(itemStyle)
    }

    if (area) {
      seriesItem.areaStyle = { normal: {} }
    }

    if (areaStyle[name]) {
      seriesItem.areaStyle = areaStyle[name]
    }

    if (secondMeaAxis.length && ~secondMeaAxis.indexOf(name)) {
      seriesItem.yAxisIndex = 1
    }

    if (thirdMeaAxis.length && ~thirdMeaAxis.indexOf(name)) {
      seriesItem.yAxisIndex = 2
    }

    series.push(seriesItem)
  })

  return series
}

export const line = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra

  extra.chartType = 'line'
  const dataset = !isEmptyData && getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getLineTooltip(settings, extra)

  const legend = legendVisible && getLineLegend({ settings })

  const xAxis = getLineDimAxis({ data, settings })

  const yAxis = getLineMeaAxis({ settings })

  const series = !isEmptyData && getLineSeries({ data, settings })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  return options
}
