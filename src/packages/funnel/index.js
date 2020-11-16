import 'echarts/lib/chart/funnel'

import HocEcharts from '@/components/HocEcharts.vue'
import { funnel } from './chartHandler'

export default {
  name: 'UixFunnelChart',
  props: {},
  mixins: [HocEcharts],
  created() {
    this.chartHandler = funnel
  }
}
