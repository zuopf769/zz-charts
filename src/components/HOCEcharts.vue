<template>
  <div class="uix-charts-parent" :style="parentStyle">
    <base-echarts
      v-if="isHasData"
      :init-options="initOptions"
      :options="options"
      :auto-resize="true"
      :theme="theme"
      :chart-height="height"
      :ec.sync="ec"
      v-on="$listeners"
    />
    <slot v-if="!isHasData && !loading">
      <empty-data :empty-text="emptyText" />
    </slot>
    <loading-chart v-if="loading" />
  </div>
</template>

<script>
import BaseEcharts from '@/components/BaseEcharts.vue'
import EmptyData from '@/components/EmptyData.vue'
import LoadingChart from '@/components/LoadingChart.vue'
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
