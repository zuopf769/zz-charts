import 'echarts/lib/chart/pie'

import HocEcharts from '@/components/HocEcharts.vue'
import { donut } from '../pie/chartHandler'

export default {
  name: 'UixDonutChart',
  props: {
    legendPosition: { type: String, default: 'right' }
  },
  mixins: [HocEcharts],
  created() {
    this.chartHandler = donut
  }
}
