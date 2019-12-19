<template>
  <div>
    <img :src="'/icons/' + name + '.svg'" alt="">
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
