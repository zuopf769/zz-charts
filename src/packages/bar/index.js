import 'echarts/lib/chart/bar'

import HocEcharts from '@/components/HocEcharts.vue'
import { bar } from './chartHandler'

export default {
  name: 'UixBarChart',
  mixins: [HocEcharts],
  created() {
    this.chartHandler = bar
  }
}
