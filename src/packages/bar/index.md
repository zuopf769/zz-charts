# 柱状图

## 基础柱状图

:::include(src="./doc/base.vue")
:::

## 基础条形图

:::include(src="./doc/simpleBar.vue")
:::

## 分组柱状图

> 多个度量构成分组柱状图，用于展示各个分类下的不同分组

:::include(src="./doc/group.vue")
:::

## 双Y轴柱状图

> 有两个Y轴的柱状图，用于不同的数值类型

:::include(src="./doc/multiY-two.vue")
:::

## 三Y轴柱状图

> 有三个Y轴的柱状图，用于不同的数值类型

:::include(src="./doc/multiY-three.vue")
:::

## 堆叠柱状图

> 配置需要堆叠的度量，下例为将不同分组下的 PV、UV 堆叠

:::include(src="./doc/stack.vue")
:::

## 全局设置数据标签

:::include(src="./doc/simpleLabel.vue")
:::

## 为每一项单独设置数据标签

:::include(src="./doc/individualLabel.vue")
:::

## settings 配置项

| 配置项           | 说明                                                           | 类型    | 可选值                     | 默认值   | 用法                                                                        | 其他                                                                  |
| ---------------- | -------------------------------------------------------------- | ------- | -------------------------- | -------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| direction        | 柱状图/条形图柱子朝向                                            | string | row, column               | column   | 默认 column 为垂直柱子（柱状图)；row 为水平柱子（条形图）
| xAxisType        | 横轴的数据类型                                                 | string  | category、value、time、log | category | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.type)            | -                                                                     |
| yAxisName        | 左右坐标轴标题                                                 | array   | -                          | -        | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.name)            | 依次表示左边第一个轴、右边第一个轴、右边第二个轴的名称 最多支持 3Y 轴 |
| yAxisLabelType   | 左右坐标轴数据类型                                             | array   | normal，en、zh、percentage | normal   | normal 千分位、en 英文数字规则、zh 中文数字规则、percentage  百分比         | 依次表示左边第一个轴、右边第一个轴、右边第二个轴的名称 最多支持 3Y 轴 |
| yAxisLabelDigits | 设置 Y 轴  标签格式化后保留几位小数，配合 yAxisLabelType 使用  | Array  | 0~20                       | 均为0        | -                                                                           | -                                                                     |
| yAxisScale       | 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度  | boolean | true/false                 | false    | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.scale)           | -                                                                     |
| secondMeaAxis    | 用于展示双 Y 轴，指定哪些度量（至少一个）作为第二个 Y 轴       | Array   | -                          | -        | -                                                                           | -                                                                     |
| thirdMeaAxis     | 用于展示三 Y 轴，指定哪些度量（至少一个）作为第三个 Y 轴       | Array   | -                          | -        | -                                                                           | -                                                                     |
| stack             | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况                         | Object | -                 | -    | 指定哪些度量堆叠展示，例如: 指定PV与UV以sum堆叠，双向柱状图必填                                                                             |  -                                                                  |
| percentage       | 是否是百分比堆叠面积图，通常结合 area、yAxisLabelType 一起使用 | boolean | true/false                 | false    | -                                                                           | -                                                                     |
| label            | 设置图形上的文本标签(object形式为统一设置，Array形式可以为每一个系列单独设置                                           | object/Array  | -                          | -        | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.label)     | -                                                                     | - |
