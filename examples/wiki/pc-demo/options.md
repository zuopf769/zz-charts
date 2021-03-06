# 基本属性

## 自有属性

图表自身的属性，例如用于设置折线图数据类型的 `yAxisLabelType`, 是否展示为面积图的 `area`，这样的属性被置于 `settings` 内，每种图表的自有属性不完全相同，具体参数请参考各自图表文档中的配置项。

## 公有属性

所有图表都具有的属性，例如 `data`、`settings`、`width`, `height` 等。

```
<uix-line-chart :data="chartData" width="100px" :events="chartEvents"></<uix-line-chart>
```

### 基本属性

| 配置项                 | 说明                                   | 类型     | 可选值                   | 默认值  | 用法                                                                     |
| ---------------------- | -------------------------------------- | -------- | ------------------------ | ------- | ------------------------------------------------------------------------ |
| data                   | 数据                                   | object   |                          |         | 参见数据页                                                               |
| settings               | 配置项                                 | object   |                          |         |                                                                          |
| height                 | 高度                                   | string   |                          | 400px   |                                                                          |
| tooltip\-visible       | 是否显示提示框                         | boolean  |                          | true    |                                                                          |
| tooltipFormatter       | 提示框自定义器                         | function |                          |         |                                                                          |
| selectedValueFormatter | 选中的值的自定义器，适用于环形图       | function |                          |         |                                                                          |
| legendVisible          | 是否显示图例                           | boolean  |                          |         |                                                                          |
| legendPosition         | 图例的位置                             | string   | top、right、bottom、left | botttom |                                                                          |
| theme                  | 主题                                   | object   |                          |         | [参见文档](https://echarts.apache.org/zh/api.html#echarts.init)          |
| themeName              | 主题名称                               | string   |                          |         | [参见文档](https://echarts.apache.org/zh/api.html#echarts.registerTheme) |
| renderer               | 渲染器                                 | string   | canvas、svg              |         | [参见文档](https://echarts.apache.org/zh/api.html#echarts.init)          |
| log                    | 在控制台打印内部生成的 echarts options | boolean  |                          | false   |                                                                          |

### 增加标识元素的属性

标识元素包括：markLine、markArea、markPoint，每个种类的图对应的使用方式略有不同， 可以参考 echarts 文档中实现。需要注意的是，设置的标识元素会被增加到每一个指标上，例如一个 单维度多指标折线图，两条线都会显示对应的标识元素，如果设置只在一个指标线上显示，可以使用 extend 属性，直接为 series 设置 mark\* 来自由配置。

| 配置项     | 简介     | 类型   |
| ---------- | -------- | ------ |
| mark-line  | 标线     | object |
| mark-area  | 标点     | object |
| mark-point | 标志区域 | object |

使用时需先引入对应的组件

```
markLine -> echarts/lib/component/markLine
markPoint -> echarts/lib/component/markPoint
markArea -> echarts/lib/component/markArea
```

### 状态属性

加载状态可以在父组件中通过切换下面的属性实现；暂无数据状态自动判断数据项是否为空，可以通过 slot 和 emptyText 两种方案自定义空状态文案

| 配置项    | 简介         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| loading   | 加载状态     | boolean | false  |
| emptyText | 数据为空文案 | string  |        |

使用时需先引入样式

```javascript
import '@xgfe/uix-charts/lib/uix-charts.css'
```

### 钩子函数

共有属性中的钩子函数用于在配置项生成过程中进行调整以及获取实例。

| 配置项                | 说明                                                                | 类型                                 |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------ |
| before-config         | 对数据提前进行额外的处理，在数据转换为配置项开始前触发              | 参数为 data,返回值为表格数据         |
| after-config          | 对生成好的 echarts 配置进行额外的处理，在数据转化为配置项结束后触发 | 参数为 options,返回值为 echarts 配置 |
| after-set-option      | 生成图表之后获取 echarts 实例                                       | 参数为 echarts 实例                  |
| after-set-option-once | 生成图表之后获取 echarts 实例(只执行一次)                           | 参数为 echarts 实例                  |

### extend 属性

为了能够更方便的设置属性配置项等，可以通过 `extend` 属性实现对已配置好的内部属性进行单独的设置， `extend` 为对象类型，对象内的属性可以是函数，也可以对象，也可以是其他类型的值

- 当属性为函数时，设置的是函数的返回值
- 当属性为对象时，如果在 `options` 中对应的属性为对象(eg: tooltip)或包含对象的数组(eg: series)， 对应的配置会被合并，否则将直接覆盖对应的配置

### echarts options 属性

与 echarts 配置项对应的属性也被加到了组件上，用于直接覆盖 options 原有的对应属性，使用方式可参考[文档](https://echarts.apache.org/zh/option.html#title)

```javascript
grid: [object, array],
colors: array,
visualMap: [object, array],
dataZoom: [object, array],
toolbox: [object, array],
title: object,
legend: [object, array],
xAxis: [object, array],
yAxis: [object, array],
radar: object,
tooltip: object,
axisPointer: object,
brush: [object, array],
geo: object,
timeline: [object, array],
graphic: [object, array],
series: [object, array],
backgroundColor: [object, string],
textStyle: object,
animation: object
```

如果某属性加上去之后没有生效，很可能是没有引入相应的模块，模块的位置可以参考此[文件](https://github.com/apache/incubator-echarts/blob/4.8.0/index.js)

### 事件

渲染成功后会通过事件传递给父组件。

| 配置项     | 简介                                     |
| ---------- | ---------------------------------------- |
| ready      | 图表渲染完成后触发，每次渲染都会触发一次 |
| ready-once | 只会在首次渲染完成后触发                 |
