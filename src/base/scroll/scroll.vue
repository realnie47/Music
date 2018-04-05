<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  mounted () {
    this._initScroll()
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
}
</script>

<style lang="stylus">

</style>
