<template>
  <iframe
          @load="onLoad"
          frameborder="0"></iframe>
</template>

<script>
import Vue from 'vue'
import i18n from '@/i18n'
import Head from '../../service/head'
export default {
  name: 'frame',
  beforeUpdate () {
    if (this.iApp) {
      this.iApp.children = Object.freeze(this.$slots.default)
    }
  },
  methods: {
    onLoad (e) {
      setTimeout(() => {
        this.renderChildren()
      }, 0)
      this.$emit('onload', e)
    },
    renderChildren () {
      console.log('frame renderChildren ---')
      const children = this.$slots.default
      if (this.$el.contentDocument) {
        const body = this.$el.contentDocument.body
        const head = this.$el.contentDocument.head
        head.innerHTML = Head(this.$store.getters['main/settings'])
        const el = document.createElement('DIV') // we will mount or nested app to this element
        body.appendChild(el)
        const iApp = new Vue({
          name: 'iApp',
          // freezing to prevent unnessessary Reactifiation of vNodes
          i18n,
          data: { children: Object.freeze(children) },
          render (h) {
            return h('div', this.children)
          }
        })
        iApp.$mount(el) // mount into iframe
        this.iApp = iApp // cache instance for later updates
      }
    }
  }
}
</script>
