<template>
  <iframe
    :srcdoc="srcdoc"
    @load="onLoad"
    frameborder="0"></iframe>
</template>

<script>
import Vue from 'vue'
import i18n from '@/i18n'
import Head from '../../service/head'
export default {
  name: 'Iframe',
  beforeUpdate () {
    if (this.iApp) {
      this.iApp.children = Object.freeze(this.$slots.default)
    }
  },
  data () {
    return {
      srcdoc: null,
      showMeTimeout: null
    }
  },
  props: {
    srcdocEnabled: {
      default: null
    }
  },
  methods: {
    onLoad (e) {
      this.$emit('onload', e)
      this.renderChildren()
    },
    renderChildren () {
      const children = this.$slots.default
      if (this.$el.contentDocument) {
        const body = this.$el.contentDocument.body
        const head = this.$el.contentDocument.head
        head.innerHTML = Head(this.$store.getters['main/settings'])
        if (this.srcdocEnabled) {
          this.srcdoc = head.innerHTML
        }
        const el = document.createElement('DIV')
        body.appendChild(el)
        const iApp = new Vue({
          name: 'iApp',
          i18n,
          data: { children: Object.freeze(children) },
          render (h) {
            return h('div', this.children)
          }
        })
        iApp.$mount(el)
        this.iApp = iApp
      }
    }
  }
}
</script>
