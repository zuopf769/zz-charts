# 基本属性

## 增加标识元素的属性

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
