<template>
  <div class="event">
    <page-toolbox></page-toolbox>
    <br>
    <div class="blocks-area">
      <team></team>
    </div>
  </div>
</template>
<script>
  import editor from '../mixins/editorpage'
  export default {
    name: 'Events',
    mixins: [editor]
  }
</script>

