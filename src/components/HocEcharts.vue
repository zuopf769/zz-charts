<template>
  <div class="uix-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      ref="baseEcharts"
      :init-options="initOptions"
      :options="options"
      :autoresize="true"
      :theme="chartTheme"
      :chart-height="height"
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
      <empty-data :empty-text="emptyText" />
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
import BaseEcharts from './BaseEcharts.vue'
import EmptyData from './EmptyData.vue'
import LoadingChart from './LoadingChart.vue'
import Core from '@/mixins/core'
import { options } from '@/constants'
export default {
  components: {
    BaseEcharts,
    EmptyData,
    LoadingChart
  },
  mixins: [Core],
  data() {
    return {
      options,
      initOptions: {
        renderer: 'canvas'
      }
    }
  }
}
</script>
