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

:::include(src="./doc/area-stack.vue")
:::

## 百分比堆叠面积图

:::include(src="./doc/area-statck-percentage.vue")
:::

## 阶梯折线图

:::include(src="./doc/stack.vue")
:::

## 数据标签

:::include(src="./doc/series-label.vue")
:::

## markArea

:::include(src="./doc/markArea.vue")
:::

## settings 配置项

| 配置项    | 说明             | 类型    | 可选值     | 用法                                                             | 其他                                                   |
| --------- | ---------------- | ------- | ---------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| smooth    | 是否平滑曲线显示 | Boolean | true/false | false                                                            | -                                                      |
| yAxisName | 左右侧坐标轴标题 | Array   | -          | 参见[文档](https://echarts.apache.org/zh/option.html#yAxis.name) | 依次表示左边第一个轴、右边第一个轴、右边第二个轴的名称 |
