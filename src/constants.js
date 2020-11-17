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
    },
    pageIconSize: 8
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

const COLOR_FAMEYLY_BLUE = [
  '#002F80',
  '#003B9F',
  '#0046C0',
  '#0053DE',
  '#146BFE',
  '#3B83FE',
  '#629CFE',
  '#89B5FF',
  '#B0CDFF',
  '#D8E6FF',
  '#F0F5FF'
]

const COLOR_FAMEYLY_GREEN = [
  '#00331D',
  '#004A2A',
  '#006137',
  '#007844',
  '#008F51',
  '#00A75E',
  '#00BD6B',
  '#30CE89',
  '#68DEAB',
  '#A7EFD0',
  '#EFFFF8'
]

const COLOR_FAMEYLY_YELLOW = [
  '#8F5300',
  '#A96900',
  '#C18100',
  '#DA9900',
  '#EEB000',
  '#FFC300',
  '#FFD420',
  '#FFE149',
  '#FFEC78',
  '#FFF5AD',
  '#FFFAE0'
]

const COLOR_FAMEYLY_RED = [
  '#801500',
  '#971600',
  '#AF1700',
  '#C72310',
  '#DE3223',
  '#F64539',
  '#FA645C',
  '#FD8581',
  '#FFA8A6',
  '#FFCBCB',
  '#FFF0F0'
]

const COLOR_FAMEYLY_CYAN = [
  '#0061A4',
  '#006FAD',
  '#007CB5',
  '#008ABE',
  '#0099C7',
  '#00AACF',
  '#00B9D8',
  '#40D3E4',
  '#8BEAF0',
  '#BCF5F9',
  '#E6FDFF'
]

const COLOR_FAMEYLY_PURPLE = [
  '#2E0066',
  '#3A0082',
  '#46009D',
  '#5200BE',
  '#650ED4',
  '#7E26F0',
  '#944CF3',
  '#AB73F6',
  '#C39BF9',
  '#DCC4FC',
  '#F5EFEF'
]

export const COLOR_FAMILIES = {
  main: COLOR_FAMEYLY_BLUE,
  subs: [COLOR_FAMEYLY_GREEN, COLOR_FAMEYLY_YELLOW, COLOR_FAMEYLY_RED, COLOR_FAMEYLY_CYAN, COLOR_FAMEYLY_PURPLE],
  blue: COLOR_FAMEYLY_BLUE,
  green: COLOR_FAMEYLY_GREEN,
  yellow: COLOR_FAMEYLY_YELLOW,
  red: COLOR_FAMEYLY_RED,
  cyan: COLOR_FAMEYLY_CYAN,
  purple: COLOR_FAMEYLY_PURPLE
}

export const COLOR_FAMEYLIES_NAMES = ['blue', 'green', 'yellow', 'red', 'cyan', 'purple']

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
