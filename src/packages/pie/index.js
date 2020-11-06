import 'echarts/lib/chart/pie'

import HocEcharts from '@/components/HocEcharts.vue'
import { pie } from './chartHandler'

export default {
  name: 'UixPieChart',
  props: {
    legendPosition: { type: String, default: 'right' }
  },
  mixins: [HocEcharts],
  created() {
    this.chartHandler = pie
  }
}
