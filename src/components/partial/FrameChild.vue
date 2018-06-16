<script>
  import Vue from 'vue'
  export default {
    template: `<div>
      <slot/>
    </div>`,
    props: ['title'],
    methods: {
      log () {
        this._.debounce(function() {
          console.log('resize!')
        }, 200)
      }
    },
    mounted() {
      this.$nextTick(() => {
        const doc = this.$el.ownerDocument
        const win = doc.defaultView
        win.addEventListener('resize', this.log)
      })
    },
    beforeDestroy() {
      const doc = this.$el.ownerDocument
      const win = doc.defaultView
      win.removeEventListener('resize', this.log)
    }
  }
</script>
