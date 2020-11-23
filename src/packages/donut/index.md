# 环图

## 基础环形图

:::include(src="./doc/base.vue")
:::

## 选中环形扇区

:::include(src="./doc/selected.vue")
:::

## 环形选中值 formatter

:::include(src="./doc/selected-formatter.vue")
:::

## 设置半径

:::include(src="./doc/radius.vue")
:::

## 设置 legend 位置

:::include(src="./doc/legend-position.vue")
:::

## tooltipFormater

:::include(src="./doc/tooltip-formatter.vue")
:::

## settings 配置项

| 配置项            | 说明                                                           | 类型                                   | 可选值                  | 默认值    | 用法                                                                            |
| ----------------- | -------------------------------------------------------------- | -------------------------------------- | ----------------------- | --------- | ------------------------------------------------------------------------------- |
| selectedMode      | 选中模式                                                       | string，boolean, false                 | single, multiple, false | false     | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.selectedMode)   |
| selectedDimension | 选中的 dimension                                               | string                                 |                         |           |                                                                                 |
| hoverAnimation    | 是否开启 hover 在扇区上的放大动画效果                          | boolean                                |                         | true      | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.hoverAnimation) |
| radius            | 半径                                                           | number，string， Array.<number,string> |                         | [0,'70%'] | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.radius)         |
| center            | 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。 |                                        |                         |           | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.center)         |
| label             | 饼图图形上的文本标签                                           | object                                 |                         |           | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.label)          |
| labelLine         | 标签的视觉引导线样式                                           | object                                 |                         |           | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.labelLine)      |
| itemStyle         | 图形样式                                                       | object                                 |                         |           | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.itemStyle)      |
| roseType          | 显示为南丁格尔玫瑰图                                           | boolean, string                        | 'radius', 'area'        | false     | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.roseType)       |
| dataType          | 数据类型                                                       | normal，en、zh、percentage             |                         |           |                                                                                 |
| digit             | 设置数据小数点后保留的位数                                     | number                                 |                         | 0         |                                                                                 |
