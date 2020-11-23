import { cloneDeep, isNull, isEmpty, isUndefined, isArray, isObject, get } from 'lodash-es'
import { getType } from '@/utils'
import setExtend from '@/utils/extend'
import setMark from '@/utils/mark'
import { options, DEFAULT_THEME, DEFAULT_COLORS } from '@/constants'

// expose echartsLib to user
import echartsLib from 'echarts/lib/echarts'
// default echarts's component in VeCharts
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
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
    beforeConfig: { type: Function },
    afterConfig: { type: Function },
    afterSetOption: { type: Function },
    afterSetOptionOnce: { type: Function },
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
    markLine: [Object],
    markArea: [Object],
    markPoint: [Object],
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
    graphic: [Object, Array],
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
    selectedValueFormatter: { type: Function },
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
      handler(v) {
        if (v.type && this.chartLib) {
          this.chartHandler = this.chartLib[v.type]
          this.options = options
        }
        this.dataHandler(this.data)
      }
    }
  },
  methods: {
    dataHandler(data) {
      if (!this.chartHandler || (this.isEmptyData && this.isEmptySeries)) return
      const extra = {
        tooltipVisible: this.tooltipVisible,
        tooltipFormatter: this.tooltipFormatter,
        selectedValueFormatter: this.selectedValueFormatter,
        legendVisible: this.legendVisible,
        legendPosition: this.legendPosition,
        isEmptyData: this.isEmptyData,
        isEmptySeries: this.isEmptySeries,
        _once: this._once
      }
      // 对数据提前进行额外的处理，在数据转化为配置项开始前触发
      if (this.beforeConfig) {
        data = this.beforeConfig(data)
      }

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
      // color, 优先以组件如funnel给出的颜色为主
      options.color = options.color || this.chartColor

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
      let finalOptions = Object.assign(cloneDeep(this.options), options)

      // marks
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = finalOptions.series
        if (isArray(series)) {
          series.forEach(item => {
            setMark(item, marks)
          })
        } else if (isObject(series)) {
          setMark(series, marks)
        }
      }
      // change inited echarts settings
      if (this.extend) {
        setExtend(finalOptions, this.extend)
      }
      // 对生成好的echarts配置进行额外的处理，在数据转化为配置项结束后触发
      if (this.afterConfig) {
        finalOptions = this.afterConfig(finalOptions)
      }
      this.options = finalOptions

      this.$nextTick(() => {
        let echartsInstance = this.$refs.baseEcharts.chart
        if (this.afterSetOption) {
          this.afterSetOption(echartsInstance, this.options, echartsLib)
        }
        if (this.afterSetOptionOnce && !this._once['afterSetOptionOnce']) {
          this._once['afterSetOptionOnce'] = true
          this.afterSetOptionOnce(echartsInstance, this.options, echartsLib)
        }

        // 渲染完成事件，当渲染动画或者渐进渲染停止时触发
        echartsInstance.on('finished', () => {
          this.$emit('ready', this.echarts, options, echartsLib)
          if (!this._once['ready-once']) {
            this._once['ready-once'] = true
            this.$emit('ready-once', this.echarts, options, echartsLib)
          }
        })
      })

      if (this.log) {
        console.log(this.options)
      }
    },
    init() {
      if (this.data) {
        this.dataHandler(this.data)
      }
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
