<template>
  <transition name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'FadeTransition'
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
