<template>
  <div>
    <img :src="'/static/icons/' + name + '.svg'" alt="">
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
