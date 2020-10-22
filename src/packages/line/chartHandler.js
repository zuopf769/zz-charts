import { getDataset, getStackMap, formatMeasure } from '@/utils'

function getLineTooltip(settings) {
  const { tooltipFormatter } = settings
  return {
    trigger: 'axis',
    formatter: tooltipFormatter
  }
}

function getLineLegend(args) {
  const { settings } = args
  const { legendType = 'plain', legendPadding = 5, selectedMode = false } = settings
  return {
    type: legendType,
    padding: legendPadding,
    selectedMode
  }
}

function getLineDimAxis(args) {
  const { settings } = args
  const type = settings.dimAxisType || 'category'
  return {
    type,
    boundaryGap: false,
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: '#585A7D'
      }
    }
  }
}

function getLineMeaAxis(args) {
  const { settings } = args
  const {
    yAxisScale,
    yAxisLabelType,
    yAxisLabelDigits,
    yAxisName,
    yAxisInterval,
    yAxisMax,
    yAxisMin,
    percentage = false
  } = settings

  let axisValue = {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      formatter: value => formatMeasure(yAxisLabelType, value, yAxisLabelDigits)
    },
    min: percentage ? 0 : null,
    max: percentage ? 1 : null
  }
  if (yAxisName) axisValue['name'] = yAxisName
  if (yAxisInterval) axisValue['interval'] = Number(yAxisInterval)
  if (yAxisMax) axisValue['max'] = yAxisMax
  if (yAxisMin) axisValue['min'] = yAxisMin
  return axisValue
}

// build label
function getLineLabel(args) {
  const { position = 'top', formatType = 'currency', formatDigits = 0, ...others } = args
  const formatter = params => {
    const { value, seriesIndex } = params

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

function getLineSeries(args) {
  const { data, settings } = args
  const { measures } = data
  const {
    label = {},
    lineStyle = {},
    showSymbol = true,
    smooth = false,
    stack = null,
    step = null,
    symbol = 'emptyCircle',
    symbolSize = 4,
    itemStyle = {},
    area = false,
    areaStyle = {},
    ...others
  } = settings
  const series = []
  const stackMap = stack && getStackMap(stack)

  measures.forEach(({ name }) => {
    let seriesItem = {
      type: 'line',
      name,
      label: getLineLabel(label),
      lineStyle: getLineStyle(lineStyle),
      showSymbol,
      smooth,
      stack: stack && stackMap[name],
      step,
      symbol,
      symbolSize,
      itemStyle: itemStyle[name] ? itemStyle[name] : {},
      ...others
    }

    if (area) seriesItem.areaStyle = { normal: {} }
    if (areaStyle[name]) seriesItem.areaStyle = areaStyle[name]

    series.push(seriesItem)
  })

  return series
}

function getGrid({ grid = {} }) {
  return {
    right: 10,
    bottom: 10,
    left: 10,
    containLabel: true,
    ...grid
  }
}

export const line = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra

  extra.chartType = 'line'
  const dataset = !isEmptyData && getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getLineTooltip(settings)

  const legend = legendVisible && getLineLegend({ settings })

  const xAxis = getLineDimAxis({ data, settings })

  const yAxis = getLineMeaAxis({ settings })

  const series = !isEmptyData && getLineSeries({ data, settings })

  const grid = getGrid(settings)

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series,
    grid
  }

  return options
}
