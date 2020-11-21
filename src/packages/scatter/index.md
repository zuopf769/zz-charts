# 散点图

## 基础散点图

:::include(src="./doc/base.vue")
:::

## 分组散点图

:::include(src="./doc/group.vue")
:::

## 分组散点图-设置 itemStyle

:::include(src="./doc/group-item-style.vue")
:::

## 象限散点图

:::include(src="./doc/mark-line.vue")
:::

## 象限散点图-设置 itemStyle

:::include(src="./doc/item-style.vue")
:::

## 象限散点图-设置 label

:::include(src="./doc/label.vue")
:::

## 象限散点图-设置 tooltipFormatter

:::include(src="./doc/tooltip-formatter.vue")
:::

## 气泡图

:::include(src="./doc/symbol-size.vue")
:::

## settings 配置项

| 配置项            | 说明                                                                                                        | 类型                       | 可选值                             | 默认值 | 用法                                                                            | 其他 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------- | ------ | ------------------------------------------------------------------------------- | ---- |
| data/dimensions   | 维度在散点图中的应用为设置 X-Y 轴；分别代表的维度名称，默认数组中第一个值映射 X 轴；数组中第二个值映射 Y 轴 | array                      |                                    |        | ['身高', '体重']                                                                | -    |
| data/measures     | 度量在散点图中的应用为设置 X-Y 轴维度所对应的数据，默认数组中第一个值映射 X 轴；数组中第二个值映射 Y 轴     | array                      |                                    |        |                                                                                 | 必填 |
| xAxisName         | x 坐标轴 name                                                                                               | string                     | 如果不配置就取 dimensions 的第一项 |        |                                                                                 |      |
| xAxisMin          | x 坐标轴刻度最小值                                                                                          | number、string、function   |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.min)                 |      |
| xAxisMax          | x 坐标轴刻度最大值                                                                                          | number、string、function   |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.max)                 |      |
| xAxisScale        | 是否是脱离 0 值比例                                                                                         | boolean                    |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.scale)               |      |
| xAxisNameLocation | x 坐标轴名称显示位置                                                                                        | string                     | start 、middle、end                | middle |                                                                                 |      | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.nameLocation) |  |
| yAxisName         | y 坐标轴 name                                                                                               | string                     | 如果不配置就取 dimensions 的第二项 |        |                                                                                 |      |
| yAxisMin          | y 坐标轴刻度最小值                                                                                          | number、string、function   |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.min)                 |      |
| yAxisMax          | y 坐标轴刻度最大值                                                                                          | number、string、function   |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.max)                 |      |
| yAxisScale        | 是否是脱离 0 值比例                                                                                         | boolean                    |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.scale)               |      |
| symbolSize        | 标记的大小                                                                                                  | number, array, Function    |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-scatter.symbolSize) |      |
| itemStyle         | temStyle 为对象或者数组，Object 类型为全部数据维度添加配置，Array 类型根据每项 name 名字去修改配置          | object、array              |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-scatter.itemStyle)  |      |
| label             | label 为对象或者数组，Object 类型为全部数据维度添加配置，Array 类型根据每项 name 名字去修改配置             | object、array              |                                    |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-scatter.label)      |      |
| dataType          | 数据类型                                                                                                    | normal，en、zh、percentage |                                    | normal |                                                                                 |      |
| digit             | 设置数据小数点后保留的位数                                                                                  | number                     |                                    | 0      |                                                                                 |      |
