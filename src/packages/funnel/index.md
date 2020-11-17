# 漏斗图

## 基础漏斗图

:::include(src="./doc/base.vue")
:::

## 金字塔图

:::include(src="./doc/ascending.vue")
:::

## 方头漏斗图

:::include(src="./doc/squareTip.vue")
:::

## 不同对齐方式的漏斗图

:::include(src="./doc/funnelAlign.vue")
:::

## 对比漏斗图

:::include(src="./doc/contrast.vue")
:::

## 对称漏斗图

:::include(src="./doc/symmetric.vue")
:::


## 排序漏斗图

:::include(src="./doc/sort.vue")
:::

## 更换主题漏斗图

:::include(src="./doc/colorTheme.vue")
:::

## 自定义样式漏斗图

:::include(src="./doc/style.vue")
:::

| 字段          | 取值类型                                                     | 含义                                                         | 是否必需值 | 默认值       |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- | ------------ |
| labelPosition | string                                                       | 标签在漏斗图的位置，参见[文档](https://echarts.apache.org/zh/option.html#series-funnel.label.position) | 否         | right        |
| squareTip     | boolean                                                      | 漏斗底部是否为矩形，默认为三角形                             | 否         | false        |
| sort          | ‘ascending’\|‘descending’\|'none'\|Function                  | 数据显示顺序，可参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.sort) | 否         | 'descending' |
| funnelAlign   | 'left' \| 'right'\| 'center'                                 | 图形对齐方式                                                 | 否         | center       |
| contrast      | boolean                                                      | 对比图例                                                     | 否         | false        |
| symmetric     | boolean                                                      | 对称图例                                                     | 否         | false        |
| label         | object                                                       | 设置文本标签样式，内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.label) | 否         |              |
| labelLine     | object                                                       | 设置标签的视觉引导线样式，内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.labelLine) | 否         |              |
| itemStyle     | object                                                       | 设置图形样式，内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.itemStyle) | 否         |              |
| colorTheme    | 'main'\|'blue'\|'green'\|'yellow'\|'red' \| 'cyan' \| 'purple' | 主题颜色                                                     | 否         | 'main'       |
| color         | Array\|'string'                                              | 图形颜色数组，内容参考[文档](https://echarts.apache.org/zh/option.html#color) | 否         |              |

