const { escapeHTML, escapeDoubleCurlyBrace } = require('./util')

module.exports = vueSourceDocLoader

function vueSourceDocLoader(source) {
  const filePath = this.resource.split('?')[0]
  const pathList = filePath.split('/')
  if (pathList.includes('doc') && !pathList.includes('demo.vue')) {
    try {
      let list = source.split('</template>')
      if (list.length < 2) {
        return source
      }
      let result = `
<template>
  <demo-block :code="tooltip"></demo-block>
</template>
<script>
let code = ${JSON.stringify(escape(source))};
export default {
	data: () => ({
    tooltip: code
	})
}
</script>
`
      return result
    } catch (e) {
      return source
    }
  }

  return source
}
