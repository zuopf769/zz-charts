export const options = {
  grid: {
    right: 10,
    left: 10,
    containLabel: true
  },
  series: []
}

export const contrastColor = '#666666'
export const titleColor = '#999999'
export const splitLineColor = '#eeeeee'
export const labelColor = '#333333'
export const labelLineColor = '#cccccc'

export const DEFAULT_THEME = {
  grid: {
    right: 10,
    left: 10,
    containLabel: true
  },
  legend: {
    textStyle: {
      color: contrastColor
    }
  },
  pie: {
    itemStyle: {
      borderType: 'solid',
      borderWidth: '2',
      borderColor: '#ffffff'
    },
    label: {
      color: labelColor,
      fontSize: 13
    },
    labelLine: {
      length: 10,
      length2: 5,
      lineStyle: {
        color: labelLineColor
      }
    }
  }
}

export const itemPoint = color => {
  return [
    '<span style="',
    `background-color:${color};`,
    'display: inline-block;',
    'width: 10px;',
    'height: 10px;',
    'border-radius: 50%;',
    'margin-right:2px;',
    '"></span>'
  ].join('')
}

export const DEFAULT_COLORS = [
  '#3969FE',
  '#00BD6B',
  '#FFC300',
  '#1056CC',
  '#007A45',
  '#997500',
  '#00B9D8',
  '#FF8305',
  '#F238D3',
  '#00859F',
  '#994100',
  '#903299',
  '#73BD00',
  '#F7258E',
  '#7E26F0',
  '#385C00',
  '#A11864',
  '#50248A'
]

export const waterfallConfig = {
  secondaryMeasure: {
    normal: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    },
    emphasis: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    }
  }
}
