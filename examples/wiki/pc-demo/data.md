# 数据

`uix-charts` 的数据设计采用数据分析的基础概念，用**维度**和**度量**的组合提供需要可视化的数据。`uix-charts` 接收的数据格式为普通的对象，分为 `dimensions` 维度与 `measures` 度量。

例如：

```javascript
{
  dimensions: {
    name: '月份',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  measures: [{
    name: '蒸发量',
    data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
  }, {
    name: '降水量',
    data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3]
  }]
}
```

## 什么是维度与度量？

### 维度

维度确定如何对可视化内容数据分组，通常呈现在条形图的 X 轴上或饼图的切片上，例如时间、区域、产品类型等。

### 度量

度量是在可视化中使用的计算，结果为具体的参考数值，通常呈现在条形图的 Y 轴上或表格的列中。度量通过由聚合函数（例如 Sum 或 Max）组成的与一个或多个字段组合的表达式创建，例如蒸发量、降水量、销售额等。

### 映射 ECharts

按照柱状图示例，柱状图的 X 轴为维度，Y 轴为度量。

#### 维度

##### ECharts 配置 xAxis

```javascript
xAxis: [
  {
    type: 'category',
    name: '月份',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }
]
```

##### UixCharts 配置 data.dimensions

```javascript
data: {
  dimensions: {
    name: '月份'
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }
}
```

#### 度量

##### ECharts 配置 series

```javascript
series: [
  {
    name: '蒸发量',
    type: 'bar',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
  },
  {
    name: '降水量',
    type: 'bar',
    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
  }
]
```

##### UixCharts 配置 data.measures

```javascript
data: {
  measures: [
    {
      name: '蒸发量',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name: '降水量',
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    }
  ]
}
```

## 设置数据格式

- 大部分情况下，我们需要对数据进行一些格式化，每种图表组件对数据格式的设置方式略有不同。
- 基本的数据格式有 'normal' （千分位）、'en' （kmb)、'zh'(亿万千)、 percentage' （百分比格式）；
- 为了支持更多未知的情况，格式的设置也支持使用回调函数的方式
- 回调函数也会返回 numeral， 所以可以使用 numeral 的格式来配置显示，具体的格式支持和插件扩展写法可以参考 [numeral 文档](http://numeraljs.com/)；

### 折线图、柱状图使用数组类型 yAxisLabelType 及小数点位（digit）

:::include(src="../../../src/packages/line/doc/label-type-y-zh.vue")
:::

### 饼图、环形图、漏斗图使用字符串类型 dataType 及小数点位（digit）

:::include(src="../../../src/packages/pie/doc/data-type.vue")
:::

### 散点图使用数组类型分别表示 X 轴和 Y 轴的数据类型（dataType）及小数点位（digit）

:::include(src="../../../src/packages/scatter/doc/data-type.vue")
:::

### 使用回调函数

:::include(src="../../../src/packages/pie/doc/data-type-function.vue")
:::

### 使用回调函数-numeral

:::include(src="../../../src/packages/pie/doc/data-type-numeral.vue")
:::
