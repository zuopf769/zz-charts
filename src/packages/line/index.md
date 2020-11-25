# 折线图

## 基础折线图

基础折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。

:::include(src="./doc/base.vue")
:::

## 折线图设置-平滑曲线

:::include(src="./doc/smooth.vue")
:::

## 多条折线图

:::include(src="./doc/multi.vue")
:::

## 双 Y 轴折线图

:::include(src="./doc/multi-y.vue")
:::

## 三 Y 轴折线图

:::include(src="./doc/multi-y-third.vue")
:::

## Y 轴格式化

:::include(src="./doc/label-type-y-zh.vue")
:::

## tooltipFormater

:::include(src="./doc/tooltip-formatter.vue")
:::

## 区域折线图

:::include(src="./doc/area.vue")
:::

## 堆叠面积图

后一个系列的值会在前一个系列的值上相加

:::include(src="./doc/area-stack.vue")
:::

## 百分比堆叠面积图

:::include(src="./doc/area-statck-percentage.vue")
:::

## 阶梯折线图

:::include(src="./doc/step.vue")
:::

## 数据标签

:::include(src="./doc/series-label.vue")
:::

## echarts style 配置

:::include(src="./doc/echarts-style.vue")
:::

## settings 配置项

| 配置项           | 说明                                                           | 类型    | 可选值                     | 默认值   | 用法                                                                        | 其他                                                                  |
| ---------------- | -------------------------------------------------------------- | ------- | -------------------------- | -------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| smooth           | 是否平滑曲线显示                                               | boolean | true/false                 | false    | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.type)            | -                                                                     |
| xAxisType        | 横轴的数据类型                                                 | string  | category、value、time、log | category | 参见[文档](https://echarts.apache.org/zh/option.html#xAxis.type)            | -                                                                     |
| yAxisName        | 左右坐标轴标题                                                 | array   | -                          | -        | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.name)            | 依次表示左边第一个轴、右边第一个轴、右边第二个轴的名称 最多支持 3Y 轴 |
| yAxisLabelType   | 左右坐标轴数据类型                                             | array   | normal，en、zh、percentage | normal   | normal 千分位、en 英文数字规则、zh 中文数字规则、percentage  百分比         | 依次表示左边第一个轴、右边第一个轴、右边第二个轴的名称 最多支持 3Y 轴 |
| yAxisLabelDigits | 设置 Y 轴  标签格式化后保留几位小数，配合 yAxisLabelType 使用  | Array   | 0~20                       | 都是 0   | -                                                                           | -                                                                     |
| yAxisScale       | 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度  | boolean | true/false                 | false    | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.scale)           | -                                                                     |
| secondMeaAxis    | 用于展示双 Y 轴，指定哪些度量（至少一个）作为第二个 Y 轴       | Array   | -                          | -        | -                                                                           | -                                                                     |
| thirdMeaAxis     | 用于展示三 Y 轴，指定哪些度量（至少一个）作为第三个 Y 轴       | Array   | -                          | -        | -                                                                           | -                                                                     |
| area             | 是否展示为区域/面积图                                          | boolean | true/false                 | false    | -                                                                           | -                                                                     |
| areaStyle        | 面积图样式                                                     | object  | -                          | -        | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.areaStyle) | -                                                                     |
| percentage       | 是否是百分比堆叠面积图，通常结合 area、yAxisLabelType 一起使用 | boolean | true/false                 | false    | -                                                                           | -                                                                     |
| step             | 是否是阶梯线图。可以设置为 true 显示成阶梯线图                 | string  | start、middle、end         | -        | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.step)      | -                                                                     | - |
| label            | 设置图形上的文本标签                                           | object  | -                          | -        | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.label)     | -                                                                     | - |
