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
      const head = this.$el.contentDocument.head
      console.log('frame head')
      console.log(head)
      head.innerHTML = `
<meta charset="utf-8">
<title>maize</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
`
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
