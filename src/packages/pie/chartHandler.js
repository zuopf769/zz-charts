import { getDataset } from '@/utils'

function getPieDataset(data, settings, extra) {
  const dataset = []
  extra.chartType = 'pie'
  if (data.length > 1) {
    for (let element of data) {
      dataset.push(getDataset(element, settings, extra))
    }
  } else {
    dataset.push(getDataset(data, settings, extra))
  }
  return dataset
}

function getPieTooltip() {
  return {
    trigger: 'item'
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
  const { measures } = data
  const { offsetY, radius = isDonut ? ['50%', '70%'] : [0, '75%'], selectedMode = false, ...others } = settings

  measures.forEach(({ name }) => {
    series.push({
      type: 'pie',
      name,
      selectedMode,
      center: offsetY ? ['50%', offsetY] : ['50%', '50%'],
      radius,
      datasetIndex,
      ...others
    })
  })
  return series
}

export const pie = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  const dataset = getPieDataset(data, settings, extra)

  const tooltip = tooltipVisible && getPieTooltip()

  const legend = legendVisible && getPieLegend({ settings })

  const series = getPieSeries({ data, settings, isDonut })

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
