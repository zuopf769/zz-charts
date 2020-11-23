# 饼图

## 基础饼图

:::include(src="./doc/base.vue")
:::

## 选中饼图扇区

:::include(src="./doc/selected.vue")
:::

## 设置饼图半径

:::include(src="./doc/radius.vue")
:::

## 设置 legend 位置

:::include(src="./doc/legend-position.vue")
:::

## 设置 label

:::include(src="./doc/label.vue")
:::

## 设置数据类型

:::include(src="./doc/data-type.vue")
:::

## 环饼图

:::include(src="./doc/ring-pie.vue")
:::

## 南丁格尔玫瑰图-半径模式

扇区圆心角展现数据的百分比，半径展现数据的大小。
:::include(src="./doc/rose-type.vue")
:::

## 南丁格尔玫瑰图-面积模式

所有扇区圆心角相同，仅通过半径展现数据大小。
:::include(src="./doc/rose-type-area.vue")
:::

## settings 配置项

| 配置项         | 说明                                                           | 类型                           | 可选值                  | 默认值 | 用法                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------ | ----------------------- | ------ | ------------------------------------------------------------------------------- |
| selectedMode   | 选中模式                                                       | string，boolean, false         | single, multiple, false | false  | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.selectedMode)   |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果                          | boolean                        |                         | true   | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.hoverAnimation) |
| radius         | 半径                                                           | number，string， Array.<number | string>                 |        | [0,'70%']                                                                       | 参见\[文档\]\(https://echarts.apache.org/zh/option.html#series-pie.radius) |
| center         | 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。 |                                |                         |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.center)         |
| label          | 饼图图形上的文本标签                                           | object                         |                         |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.label)          |
| labelLine      | 标签的视觉引导线样式                                           | object                         |                         |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.labelLine)      |
| itemStyle      | 图形样式                                                       | object                         |                         |        | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.itemStyle)      |
| roseType       | 显示为南丁格尔玫瑰图                                           | boolean, string                | 'radius', 'area'        | false  | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.roseType)       |
| dataType       | 数据类型                                                       | normal，en、zh、percentage     |                         |        |                                                                                 |
| digit          | 设置数据小数点后保留的位数                                     | number                         |                         | 0      |                                                                                 |
