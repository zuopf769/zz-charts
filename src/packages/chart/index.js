import 'echarts/lib/chart/line'

import HocEcharts from '@/components/HocEcharts.vue'
import { line } from '../line/chartHandler'
import { bar } from '../bar/chartHandler'
import { pie, donut } from '../pie/chartHandler'

export default {
  name: 'UixChart',
  mixins: [HocEcharts],
  created() {
    this.chartLib = {
      line,
      pie,
      bar,
      donut
    }
    this.chartHandler = this.chartLib[this.settings.type]
  }
}
