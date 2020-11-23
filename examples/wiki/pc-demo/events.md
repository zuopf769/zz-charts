# 事件处理

## 监听事件

:::include(src="../../../src/packages/pie/doc/events.vue")
:::

## 用法示例对比

### Echarts

```javascript
myChart.on('click', function (params) {
  console.log(params)
})

myChart.on('onPieselected', function (params) {
  console.log(params)
})
```

### UixChart

```html
<uix-pie-chart :data="chartData" :settings="lineSettings" @click="onClick" @pieselectchanged="onPieselectchanged" />
```

```javascript
methods: {
  onClick (params) {
    console.log(params)
  },
  onPieselected (params) {
    console.log(params)
  }
}
```

## 事件列表

`UixCharts` 支持 `Echarts` 所有事件的绑定；事件列表参见[Echarts events](https://echarts.apache.org/zh/api.html#events)
