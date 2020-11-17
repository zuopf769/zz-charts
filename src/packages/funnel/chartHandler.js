import { getDataset, getColors } from '@/utils'
import { COLOR_FAMEYLIES_NAMES } from '@/constants'

function getFunnelColor({ data, settings }) {
  let { color, colorTheme = 'main' } = settings
  if (color && Array.isArray(color) && color.length != 0) {
    return color
  }
  if (!COLOR_FAMEYLIES_NAMES.includes(colorTheme) && colorTheme !== 'main') {
    console.log(colorTheme in COLOR_FAMEYLIES_NAMES)
    colorTheme = 'main'
  }
  return getColors(
    data.measures.map(a => a.data.length).reduce((a, b) => a + b),
    colorTheme
  )
}

function getFunnelTooltip({ extra }) {
  let { tooltipFormatter } = extra
  let tooltip = {
    trigger: 'item'
  }
  if (tooltipFormatter) {
    tooltip.formatter = tooltipFormatter
  }
  return tooltip
}

function getFunnelLegend(args) {
  const { settings } = args
  const { legendType = 'scroll', legendPadding = 5 } = settings
  return {
    type: legendType,
    padding: legendPadding
  }
}

function getFunnelSeries(args) {
  const { data, settings } = args
  const { dimensions, measures } = data
  const dimName = dimensions && `${dimensions.name}`
  const {
    funnelAlign = 'center',
    contrast = false,
    symmetric = false,
    labelPosition = 'outside',
    squareTip = false,
    funnelLabel,
    ...others
  } = settings

  const getMaxSize = measures => {
    if (measures.length > 2) {
      console.warn(`data.measures.length is more then 2 in [Contrastive funnel chart]. Please use 2 measures`, this)
      return
    }
    let maxSize = ''
    if (measures.length > 1) {
      const quotient = measures.reduce((prev, next) => {
        return Math.round(
          (Math.min(Math.max(...prev.data), Math.max(...next.data)) * 100) /
            Math.max(Math.max(...prev.data), Math.max(...next.data))
        )
      })
      maxSize = `${quotient}%`
    }
    return maxSize
  }

  const getMin = (measures, idx) => {
    return squareTip ? Math.min(...measures[idx].data) : 0
  }

  const getMax = (measures, idx) => {
    return Math.max(...measures[idx].data)
  }

  const getMinSize = (measures, idx) => {
    let minSize = '0%'
    if (squareTip) {
      minSize = `${Math.round((100 * getMin(measures, idx)) / getMax(measures, idx))}%`
    }
    return minSize
  }

  const getX = (symmetric, idx) => {
    return symmetric ? (idx === 0 ? '10%' : '50%') : '10%'
  }

  const getAlign = (symmetric, idx) => {
    return symmetric ? (idx === 0 ? 'right' : 'left') : funnelAlign
  }

  const getLabel = (settings, idx) => {
    const { contrast, symmetric, funnelLabel } = settings
    if (funnelLabel) {
      // label is array
      if (Array.isArray(funnelLabel)) {
        return funnelLabel[idx]
      } else {
        return funnelLabel
      }
    }
    let label = {
      normal: {
        position: labelPosition
      }
    }

    if (contrast) {
      const contrastLabel = {
        normal: {
          position: 'inside',
          formatter: params => {
            const maxValue = measures.reduce((prev, next) => {
              return Math.max(Math.max(...prev.data), Math.max(...next.data))
            })
            const [, , mea2] = params.value
            return `${Math.round((mea2 / maxValue) * 100, 2)}%`
          }
        },
        emphasis: {
          position: 'inside',
          formatter: params => {
            const maxValue = measures.reduce((prev, next) => {
              return Math.max(Math.max(...prev.data), Math.max(...next.data))
            })
            const [dimName, , mea2] = params.value
            return `${dimName} ${Math.round((mea2 / maxValue) * 100, 2)}%`
          }
        }
      }

      label = idx === 0 ? label : contrastLabel
    }

    if (symmetric) {
      const rightLabel = {
        normal: {
          position: labelPosition !== 'outside' ? labelPosition : 'left'
        }
      }

      const leftLabel = {
        normal: {
          position: labelPosition !== 'outside' ? labelPosition : 'right'
        }
      }
      label = idx === 0 ? rightLabel : leftLabel
    }

    return label
  }

  const getEncode = (dimName, meaName) => {
    return {
      itemName: dimName,
      value: meaName
    }
  }

  const series = []
  measures.forEach(({ name }, idx) => {
    series.push({
      type: 'funnel',
      name,
      funnelAlign: getAlign(symmetric, idx),
      width: symmetric ? '40%' : '80%',
      x: getX(symmetric, idx),
      min: getMin(measures, idx),
      minSize: getMinSize(measures, idx),
      maxSize: !contrast || idx === 0 ? '100%' : getMaxSize(measures),
      label: getLabel({ contrast, symmetric, funnelLabel }, idx),
      encode: getEncode(dimName, name),
      ...others
    })
  })
  return series
}

export const funnel = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  extra.chartType = 'funnel'
  const dataset = getDataset(data, settings, extra)

  const color = getFunnelColor({ data, settings, extra })

  const tooltip = tooltipVisible && getFunnelTooltip({ extra })

  const legend = legendVisible && getFunnelLegend({ settings })

  const series = getFunnelSeries({ data, settings })

  // build echarts options
  const options = {
    color,
    dataset,
    tooltip,
    legend,
    series
  }

  console.log(options)

  return options
}
