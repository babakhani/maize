<template>
  <pre class="ltr">
    {{ pageData }}
  </pre>
</template>
<script>
export default {
  name: 'PagePreview',
  computed: {
    pageData () {
      return this.$store.state.main.page
    }
  }
}
</script>
