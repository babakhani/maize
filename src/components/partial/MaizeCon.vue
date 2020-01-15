<template>
  <img 
  :src="'/icons/' + name + '.svg'" 
  :alt="name">
</template>

<script>
export default {
  name: 'MaizeCon',
  props: {
    name: {
      default: ''
    }
  }
}
</script>
