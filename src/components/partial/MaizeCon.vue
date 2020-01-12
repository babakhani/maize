<template>
  <div>
    <img :src="'/maize/demo/icons/' + name + '.svg'" alt="">
  </div>
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
