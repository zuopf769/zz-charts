import { getDataset } from '@/utils'

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
  const {
    data: { measures },
    settings
  } = args
  const type = settings.dimAxisType || 'category'
  const hasBar = !!measures.find(item => (settings.showBar || []).includes(item.name))
  return {
    type,
    boundaryGap: hasBar,
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
  const { yAxisScale, yAxisName, yAxisInterval, yAxisMax, yAxisMin, percentage = false } = settings

  let axisValue = {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
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
  const { position = 'top', ...others } = args
  const formatter = params => {
    const { value, seriesIndex } = params

    // dataset formatter need shift the value
    value.shift()
    return value[seriesIndex]
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
    showBar = [],
    showSymbol = true,
    smooth = false,
    stack = null,
    step = null,
    symbol = 'emptyCircle',
    symbolSize = 4,
    ...others
  } = settings
  const series = []

  measures.forEach(({ name }) => {
    series.push({
      type: showBar.includes(name) ? 'bar' : 'line',
      name,
      label: getLineLabel(label),
      lineStyle: getLineStyle(lineStyle),
      showSymbol,
      smooth,
      stack,
      step,
      symbol,
      symbolSize,
      ...others
    })
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
