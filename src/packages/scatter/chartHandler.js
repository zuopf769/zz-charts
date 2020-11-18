function getScatterDataset(data) {
  const dataset = []
  const { measures } = data

  if (Array.isArray(measures)) {
    measures.forEach(v => {
      dataset.push({
        ['source']: v.data
      })
    })
  } else {
    return
  }

  return dataset
}

function getScatterLegend(args) {
  const { settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings

  return {
    type: legendType,
    padding: legendPadding
  }
}

// build label
function getScatterLabel(setLabel) {
  const { position = 'top', ...others } = setLabel
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
    if (label instanceof Array) {
      setLabel = label.filter(item => item.name === name)[0]
      if (setLabel === undefined) {
        setLabel = {}
      }
    } else {
      setLabel = label
    }

    // itemStyle为对象或者数组，Object类型为全部数据维度添加配置，Array类型根据每项name名字去修改配置
    let setItemStyle = {}
    if (itemStyle instanceof Array) {
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

function getScatterXAxis(args) {
  const { settings } = args
  const { xAxisScale = false, xAxisMax, xAxisMin } = settings
  return {
    min: xAxisMin,
    max: xAxisMax,
    scale: xAxisScale,
    name: settings.dimensions && settings.dimensions[0],
    nameLocation: 'middle',
    nameTextStyle: {
      padding: [8, 0, 0, 0]
    },
    axisLine: {
      lineStyle: {
        color: '#EEEEEE'
      }
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      color: '#666666'
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
  const { settings } = args
  const { yAxisScale = false, yAxisMax, yAxisMin } = settings

  return {
    min: yAxisMin,
    max: yAxisMax,
    scale: yAxisScale,
    name: settings.dimensions && settings.dimensions[1],
    axisLine: {
      lineStyle: {
        color: '#EEEEEE'
      }
    },
    axisLabel: {
      margin: 10,
      fontWeight: 400,
      color: '#666666'
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
  const { legendVisible } = extra

  const dataset = getScatterDataset(data)

  const legend = legendVisible && getScatterLegend({ settings })

  const series = getScatterSeries({ data, settings })

  const xAxis = getScatterXAxis({ settings })

  const yAxis = getScatterYAxis({ settings })

  // build echarts options
  const options = {
    dataset,
    legend,
    series,
    xAxis,
    yAxis
  }

  // console.log(JSON.stringify(options))

  return options
}
