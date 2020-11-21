import { isArray } from 'lodash-es'
import { formatMeasure } from '@/utils'

const defaultDataType = ['normal', 'normal']
const defaultDigit = [0, 0]

function getScatterDataset(data) {
  const { measures } = data
  const dataset = []
  if (Array.isArray(measures) && measures.length) {
    measures.forEach(v => {
      dataset.push({
        source: v.data
      })
    })
  }

  return dataset
}

function getScatterTooltip(args) {
  let { data, settings, extra } = args
  let { xAxisName, yAxisName, dataType = defaultDataType, digit = defaultDigit } = settings
  let { tooltipFormatter } = extra

  if (!xAxisName) {
    xAxisName = getDimessionName(data, 0)
  }

  if (!yAxisName) {
    yAxisName = getDimessionName(data, 1)
  }
  return {
    trigger: 'item',
    confine: true,
    formatter(item) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      let tpl = []
      tpl.push(item.marker)
      tpl.push(`${item.seriesName}<br>`)
      tpl.push(`${xAxisName}: ${formatMeasure(dataType[0], item.value[0], digit[0])}<br>`)
      tpl.push(`${yAxisName}: ${formatMeasure(dataType[1], item.value[1], digit[1])}<br>`)
      return tpl.join(' ')
    }
  }
}

function getScatterLegend(args) {
  const { settings } = args
  const { legendType = 'scroll', legendPadding = 5, legendSelectedMode = true } = settings

  return {
    type: legendType,
    padding: legendPadding,
    selectedMode: legendSelectedMode
  }
}

// build label
function getScatterLabel(setLabel) {
  const { position = 'top', ...others } = setLabel
  const formatter = params => {
    const { value } = params
    return `${value[0]},${value[1]}`
  }
  return {
    position,
    formatter,
    ...others
  }
}

function getScatterSeries(args) {
  const { data, settings } = args
  const { label = {}, itemStyle = {}, ...others } = settings
  const series = []
  let markLine = {}
  if (settings.markLine) {
    markLine = {
      lineStyle: {
        normal: {
          type: 'solid',
          color: '#9ed9fd'
        }
      },
      data: [
        { xAxis: settings.markLine && settings.markLine[0] },
        { yAxis: settings.markLine && settings.markLine[1] }
      ],
      silent: true,
      symbol: 'none',
      animation: false
    }
  }

  data.measures.forEach(({ name }, i) => {
    // label数据类型调整为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置
    let setLabel = {}
    if (isArray(label)) {
      setLabel = label.filter(item => item.name === name)[0]
      if (setLabel === undefined) {
        setLabel = {}
      }
    } else {
      setLabel = label
    }

    // itemStyle为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置
    let setItemStyle = {}
    if (isArray(itemStyle)) {
      setItemStyle = itemStyle.find(item => item.name === name) || {}
    } else {
      setItemStyle = itemStyle
    }
    series[i] = {
      type: 'scatter',
      name,
      datasetIndex: i,
      label: getScatterLabel(setLabel),
      itemStyle: setItemStyle,
      ...others,
      markLine
    }
  })

  return series
}

function getDimessionName(data, index) {
  return (data.dimensions && data.dimensions.data && data.dimensions.data[index]) || ''
}
function getScatterXAxis(args) {
  const { data, settings } = args
  let {
    xAxisName,
    xAxisScale = false,
    xAxisMax,
    xAxisMin,
    xAxisNameLocation = 'middle',
    dataType = defaultDataType
  } = settings

  if (!xAxisName) {
    xAxisName = getDimessionName(data, 0)
  }
  return {
    min: xAxisMin,
    max: xAxisMax,
    scale: xAxisScale,
    name: xAxisName,
    nameLocation: xAxisNameLocation,
    nameTextStyle: {
      padding: [18, 0, 0, 0],
      color: '#999999',
      fontWeight: 600
    },
    axisLine: {
      lineStyle: {
        color: '#EEEEEE'
      }
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      color: '#666666',
      formatter(val) {
        // x轴数据格式化小数位取整
        return formatMeasure(dataType[0], val)
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#EEEEEE'
      }
    }
  }
}

function getScatterYAxis(args) {
  const { data, settings } = args
  let { yAxisName = '', yAxisScale = false, yAxisMax, yAxisMin, dataType = defaultDataType } = settings
  if (!yAxisName) {
    yAxisName = getDimessionName(data, 1)
  }
  return {
    min: yAxisMin,
    max: yAxisMax,
    scale: yAxisScale,
    name: yAxisName,
    axisLine: {
      lineStyle: {
        color: '#EEEEEE'
      }
    },
    nameTextStyle: {
      color: '#999999',
      fontWeight: 600
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      color: '#666666',
      formatter(val) {
        // y轴数据格式化小数位取整
        return formatMeasure(dataType[1], val)
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#EEEEEE'
      }
    }
  }
}

export const scatter = (data, settings, extra) => {
  const { legendVisible, tooltipVisible } = extra

  const dataset = getScatterDataset(data)

  const tooltip = tooltipVisible && getScatterTooltip({ data, settings, extra })

  const legend = legendVisible && getScatterLegend({ settings })

  const series = getScatterSeries({ data, settings })

  const xAxis = getScatterXAxis({ data, settings })

  const yAxis = getScatterYAxis({ data, settings })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    series,
    xAxis,
    yAxis
  }

  // console.log(JSON.stringify(options))

  return options
}
