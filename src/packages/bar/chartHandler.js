import { options, waterfallConfig } from '@/constants'
import { getDataset, getStackMap } from '@/utils'

// build tooltip
function getBarTooltip(settings) {
  const { tooltipFormatter } = settings
  return {
    trigger: 'axis',
    // 坐标轴指示器，坐标轴触发有效
    axisPointer: {
      // 默认为直线，可选为：'line' | 'shadow'
      type: 'shadow'
    },
    formatter: tooltipFormatter
  }
}

// build legend
function getBarLegend(data, settings) {
  const { measures } = data
  const { legendType, legendPadding, waterfall } = settings
  let result = {
    type: legendType || 'scroll',
    padding: legendPadding || 5
  }

  // 当配置项填入waterfall,瀑布图默认将图例去除secondaryMeasure
  if (waterfall && waterfall === true) {
    result['data'] = measures.filter(({ name }) => {
      if (name !== 'secondaryMeasure') {
        return name
      }
    })
  }
  return result
}

// build grid
function getBarGrid(isBar) {
  const BarGrid = {
    right: 30,
    bottom: 10,
    left: 30,
    containLabel: true
  }
  return isBar ? BarGrid : options.grid
}

// build dimension Axis
function getBarDimAxis(settings) {
  const { dimAxisType } = settings

  const axisItem = {
    type: dimAxisType,
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400
    }
  }
  const disAxis = []
  disAxis.push(axisItem)
  return disAxis
}

// build measure axis
function getBarMeaAxis(settings) {
  const { meaAxisType, yAxisScale = false, percentage = false, yAxisName, yAxisInterval, yAxisMax, yAxisMin } = settings

  const meaAxisBase = {
    type: 'value',
    scale: yAxisScale,
    axisTick: {
      show: false
    },
    min: percentage ? 0 : null,
    max: percentage ? 1 : null
  }

  const meaAxis = []
  meaAxisType.forEach((type, i) => {
    const axisLabel = {
      margin: 10,
      fontWeight: 400
    }
    const axisItem = {
      ...meaAxisBase,
      axisLabel
    }
    if (yAxisName && yAxisName.length) {
      axisItem['name'] = yAxisName[i]
    }
    if (yAxisInterval && yAxisInterval.length && yAxisInterval[i]) {
      // 容错处理，当第二个值为空时，不设置interval
      axisItem['interval'] = Number(yAxisInterval[i])
    }
    // 当开启百分比模式时，轴最大和最小刻度设置无效
    if (percentage === false && yAxisMax && yAxisMax.length) {
      axisItem['max'] = yAxisMax[i]
    }
    if (percentage === false && yAxisMin && yAxisMin.length) {
      axisItem['min'] = yAxisMin[i]
    }
    meaAxis.push(axisItem)
  })
  return meaAxis
}

// build label
function getBarLabel(setLabel, isBar) {
  const { position = isBar ? 'right' : 'top', ...others } = setLabel
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

// build series
function getBarSeries(data, settings, isBar) {
  const { measures } = data
  const { label = {}, showLine = [], stack = null, secondMeaAxis = [], itemStyle = {}, waterfall, ...others } = settings

  const axisIndexName = isBar ? 'xAxisIndex' : 'yAxisIndex'
  const series = []
  const stackMap = stack && getStackMap(stack)

  measures.forEach(({ name }) => {
    // label数据类型调整为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置
    let setLabel = {}
    if (label instanceof Array) {
      setLabel = label.filter(item => item.name === name)[0]
      if (setLabel === undefined) {
        setLabel = {}
      }
    } else {
      setLabel = label
    }
    // ------------end-----------
    const type = showLine.includes(name) ? 'line' : 'bar'
    const seriesItem = {
      type,
      name,
      label: getBarLabel(setLabel, isBar),
      stack: stack && stackMap[name],
      [axisIndexName]: secondMeaAxis.includes(name) ? '1' : '0',
      itemStyle: itemStyle[name] ? itemStyle[name] : {},
      ...others
    }

    // 当配置项填入waterfall,瀑布图默认将secondaryMeasure图设置透明
    if (waterfall && waterfall === true && name === 'secondaryMeasure') {
      seriesItem['itemStyle'] = waterfallConfig[name]
    }
    series.push(seriesItem)
  })
  return series
}

export const bar = (data, settings, extra) => {
  const { tooltipVisible, legendVisible, isEmptyData } = extra
  const {
    direction = 'column',
    secondMeaAxis = null,
    yAxisLabelType,
    yAxisLabelDigits = 0,
    yAxisName,
    xAxisLabelType,
    xAxisLabelDigits = 0,
    xAxisName
  } = settings

  /*
   * 默认柱状图isBar = false，isBar = true时为条形图
   * direction = column时为柱状图，xAxis.type = 'category'
   * direction = row时为条形图，yAxis.type = 'category'
   */
  const isBar = direction !== 'column' && direction === 'row'

  const defaultMeaAxisType = secondMeaAxis !== null ? ['normal', 'normal'] : ['normal']

  /*
   * meaAxis对应measures的轴，dimAxis对应dimensions的轴
   * AxisLabelType，设置轴的标签格式化规则
   * AxisLabelDigits，设置轴标签格式化后保留几位小数
   */
  settings.meaAxisType = (isBar ? xAxisLabelType : yAxisLabelType) || defaultMeaAxisType
  settings.meaAxisDigits = isBar ? xAxisLabelDigits : yAxisLabelDigits
  settings.meaAxisName = (isBar ? xAxisName : yAxisName) || []
  settings.dimAxisType = (isBar ? yAxisLabelType : xAxisLabelType) || 'category'
  settings.dimAxisDigits = isBar ? yAxisLabelDigits : xAxisLabelDigits
  settings.dimAxisName = (isBar ? yAxisName : xAxisName) || ''

  // 如果设置了双Y轴secondMeaAxis，meaAxisType却设置两个，将双Y轴统一设置 meaAxisType
  if (defaultMeaAxisType.length > settings.meaAxisType.length) {
    settings.meaAxisType = defaultMeaAxisType.fill(settings.meaAxisType[0])
  }

  extra.chartType = 'bar'
  const dataset = !isEmptyData && getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getBarTooltip(settings)

  const legend = legendVisible && getBarLegend(data, settings)

  const grid = getBarGrid(isBar)

  const xAxis = isBar ? getBarMeaAxis(settings) : getBarDimAxis(settings)

  const yAxis = isBar ? getBarDimAxis(settings) : getBarMeaAxis(settings)

  const series = getBarSeries(data, settings, isBar)

  // build echarts options
  const chartsOptions = {
    grid,
    dataset,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  // console.log(chartsOptions)

  return chartsOptions
}
