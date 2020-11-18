import 'echarts/lib/chart/scatter'

import HocEcharts from '@/components/HocEcharts.vue'
import { scatter } from './chartHandler'

export default {
  name: 'UixScatterChart',
  mixins: [HocEcharts],
  created() {
    this.chartHandler = scatter
  }
}
