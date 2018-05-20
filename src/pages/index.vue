<template>
  <div class="event">
    <page-toolbox></page-toolbox>
    <event>
      <div class="blocks-area">
      </div>
    </event>
  </div>
</template>
<script>
  import editor from '../mixins/editorpage'
  export default {
    name: 'Events',
    mixins: [editor]
  }
</script>

