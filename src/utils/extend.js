import { set, isArray, isObject } from 'lodash-es'

export default function (options, extend) {
  Object.keys(extend).forEach(attr => {
    const value = extend[attr]
    if (~attr.indexOf('.')) {
      // eg: a.b.c a[1].b
      set(options, attr, value)
    } else if (typeof value === 'function') {
      // 每个配置项都可以配置成回调函数，在回调函数进行逻辑处理返回最终的配置项
      options[attr] = value(options[attr])
    } else {
      // mixin extend value
      if (isArray(options[attr]) && isObject(options[attr][0])) {
        // eg: [{ xx: 1 }, { xx: 2 }]
        options[attr].forEach((option, index) => {
          options[attr][index] = Object.assign({}, option, value)
        })
      } else if (isObject(options[attr])) {
        // eg: { xx: 1, yy: 2 }
        options[attr] = Object.assign({}, options[attr], value)
      } else {
        options[attr] = value
      }
    }
  })
}
