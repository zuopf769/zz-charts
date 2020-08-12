import 'echarts/lib/chart/pie'

import HocEcharts from '@/components/HocEcharts.vue'
import { pie } from './chartHandler'

export default {
  name: 'UixPieChart',
  mixins: [HocEcharts],
  created() {
    this.chartHandler = pie
  }
}
