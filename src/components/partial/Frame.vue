<template>
  <iframe src=""
          frameborder="0"></iframe>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'frame',
//    render(h) {
//      return  h('iframe', {
//        on: { load: this.renderChildren }
//      })
//    },
    beforeUpdate() {
      console.log('beforeUpdate frame coponent')
      //freezing to prevent unnessessary Reactifiation of vNodes
      this.iApp.children = Object.freeze(this.$slots.default)
    },
    mounted() {
      this.renderChildren()
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
