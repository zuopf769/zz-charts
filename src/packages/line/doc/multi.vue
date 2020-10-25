<template>
  <uix-line-chart :data="chartData" :height="340" />
</template>

<script>
export default {
  created() {
    this.chartData = {
      dimensions: {
        name: 'Day',
        data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06']
      },
      measures: [
        {
          name: '当前合作客户数',
          data: [1130, 2340, 3335, 4450, 2249, 3570]
        },
        {
          name: '上月同期合作客户数',
          data: [1121, 3190, 3135, 3450, 3249, 3870]
        }
      ]
    }
  }
}
</script>
