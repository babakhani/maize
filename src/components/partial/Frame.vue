<template>
  <iframe src=""
          frameborder="0"></iframe>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'frame',
  beforeUpdate() {
    if (this.iApp) {
      this.iApp.children = Object.freeze(this.$slots.default)
    }
  },
  mounted() {
    setTimeout( () => {
      this.renderChildren()
    }, 0)
  },
  methods: {
    renderChildren() {
      const children = this.$slots.default
      const body = this.$el.contentDocument.body
      const el = document.createElement('DIV') // we will mount or nested app to this element
      body.appendChild(el)
      const iApp = new Vue({
        name: 'iApp',
        //freezing to prevent unnessessary Reactifiation of vNodes
        data: { children: Object.freeze(children) },
        render(h) {
          return h('div', this.children)
        },
      })
      iApp.$mount(el) // mount into iframe
      this.iApp = iApp // cache instance for later updates
    }
  }
}
</script>
