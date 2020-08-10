import 'echarts/lib/chart/line'

import HocEcharts from '@/components/HocEcharts.vue'
import { line } from './chartHandler'

export default {
  name: 'UixLineChart',
  mixins: [HocEcharts],
  created() {
    this.chartHandler = line
  }
}
