<template>
  <vuep :template="template" />
</template>
<script>
export default {
  name: 'DemoBlock',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  computed: {
    template() {
      return unescape(this.code)
    }
  }
}
</script>
