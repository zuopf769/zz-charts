import { cloneDeep, isNull, isEmpty, isUndefined, get } from 'lodash-es'

import { getType } from '@/utils'
import setExtend from '@/utils/extend'
import { DEFAULT_THEME, DEFAULT_COLORS } from '@/constants'

// default echarts's component in VeCharts
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/dataset'

export default {
  props: {
    // uix-charts default options
    data: {
      type: [Object, Array],
      default() {
        return {}
      }
    },
    settings: {
      type: [Object, Array],
      default() {
        return {}
      }
    },
    // echarts default options
    title: Object,
    legend: Object,
    grid: Object,
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    polar: Object,
    radiusAxis: Object,
    angleAxis: Object,
    radar: [Object, Array],
    dataZoom: [Object, Array],
    visualMap: [Object, Array],
    tooltip: Object,
    axisPointer: Object,
    toolbox: Object,
    brush: Object,
    geo: Object,
    parallel: Object,
    parallelAxis: Array,
    singleAxis: Array,
    timeline: Object,
    graphic: Object,
    calendar: Object,
    dataset: Object,
    series: [Object, Array],
    color: Array,
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    animationThreshold: Number,
    animationDuration: [Number, Function],
    animationEasing: [String, Function],
    animationDelay: [Number, Function],
    animationDurationUpdate: [Number, Function],
    animationEasingUpdate: [String, Function],
    animationDelayUpdate: [String, Function],
    blendMode: String,
    hoverLayerThreshold: Number,
    useUTC: { type: Boolean, default: false },
    // uix-charts custom props
    tooltipVisible: { type: Boolean, default: true },
    tooltipFormatter: { type: Function },
    legendVisible: { type: Boolean, default: true },
    legendPosition: { type: String, default: 'bottom' },
    theme: Object,
    themeName: String,
    loading: { type: Boolean, default: false },
    emptyText: String,
    renderer: { type: String, default: 'canvas' },
    height: { type: Number, default: 400 },
    extend: Object,
    log: Boolean
  },
  data() {
    return {
      // echarts instance
      ec: null,
      initOptions: null
    }
  },
  computed: {
    chartColor() {
      return this.color || (this.theme && this.theme.color) || DEFAULT_COLORS
    },
    chartTheme() {
      return this.themeName || this.theme || DEFAULT_THEME
    },
    isEmptyData() {
      if (isNull(this.data) || isEmpty(this.data) || isUndefined(this.data)) {
        return true
      } else {
        if (Array.isArray(this.data)) {
          return false
        } else {
          const measures = get(this.data, 'measures')
          return measures.length === 0
        }
      }
    },
    isEmptySeries() {
      return isNull(this.series) || isEmpty(this.series) || isUndefined(this.series)
    },
    isHasData() {
      return !this.isEmptyData || !this.isEmptySeries
    },
    isHasParentStyle() {
      return this.loading || (this.isEmptyData && this.isEmptySeries)
    },
    parentStyle() {
      const parentStyle = this.isHasParentStyle ? { position: 'relative', height: `${this.height}px` } : {}
      return parentStyle
    }
  },
  watch: {
    data: {
      deep: true,
      handler(v) {
        if (v) {
          this.dataHandler(v)
        }
      }
    },
    settings: {
      deep: true,
      handler() {
        this.dataHandler(this.data)
      }
    },
    ec(val) {
      this.$emit('update:ec', val)
    }
  },
  methods: {
    dataHandler(data) {
      if (!this.chartHandler || (this.isEmptyData && this.isEmptySeries)) return
      const extra = {
        tooltipVisible: this.tooltipVisible,
        tooltipFormatter: this.tooltipFormatter,
        legendVisible: this.legendVisible,
        isEmptyData: this.isEmptyData,
        isEmptySeries: this.isEmptySeries,
        _once: this._once
      }
      if (this.beforeConfig) data = this.beforeConfig(data)

      const options = this.chartHandler(data, cloneDeep(this.settings), extra)

      if (options) {
        if (typeof options.then === 'function') {
          options.then(this.optionsHandler)
        } else {
          this.optionsHandler(options)
        }
      }
    },
    optionsHandler(options) {
      // color
      options.color = this.chartColor

      // handle legend
      if (this.legendPosition && options.legend) {
        options.legend[this.legendPosition] = 10
        if (~['left', 'right'].indexOf(this.legendPosition)) {
          options.legend.top = 'middle'
          options.legend.orient = 'vertical'
        }
      }
      const echartsSettings = [
        'title',
        'legend',
        'grid',
        'xAxis',
        'yAxis',
        'polar',
        'radiusAxis',
        'angleAxis',
        'radar',
        'dataZoom',
        'visualMap',
        'tooltip',
        'axisPointer',
        'toolbox',
        'brush',
        'geo',
        'parallel',
        'parallelAxis',
        'singleAxis',
        'timeline',
        'graphic',
        'calendar',
        'dataset',
        'series',
        'color',
        'backgroundColor',
        'textStyle',
        'animation',
        'animationThreshold',
        'animationDuration',
        'animationEasing',
        'animationDelay',
        'animationDurationUpdate',
        'animationEasingUpdate',
        'animationDelayUpdate',
        'blendMode',
        'hoverLayerThreshold',
        'useUTC'
      ]
      echartsSettings.forEach(setting => {
        if (this[setting]) options[setting] = this[setting]
      })
      if (this.animation) {
        Object.keys(this.animation).forEach(key => {
          options[key] = this.animation[key]
        })
      }
      // Merge options
      this.options = Object.assign(cloneDeep(this.options), options)
      // change inited echarts settings
      if (this.extend) setExtend(this.options, this.extend)
      if (this.log) console.log(this.options)
    },
    init() {
      if (this.data) this.dataHandler(this.data)
    },
    addWatchToProps() {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop)) {
          const opts = {}
          if (getType(prop) === '[object Object]') {
            opts.deep = true
          }
          this.$watch(
            prop,
            () => {
              this.dataHandler(this.data)
            },
            opts
          )
        }
      })
    }
  },
  created() {
    // init options
    this.initOptions = {
      renderer: this.renderer
    }
    this._once = {}
    this.addWatchToProps()
  },
  mounted() {
    this.init()
  }
}
