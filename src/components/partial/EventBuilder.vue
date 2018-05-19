<template>
  <div class="event-builder">
    <div class="container">
     <app-header></app-header>
      <div class="main-body">

      </div>
    </div>
  </div>
</template>

<script>
  import PageToolbox from './PageToolbox.vue'
  export default {
    name: 'EventBuilder',
    components: {
          'app-header': PageToolbox
      },
    data () {
      return {
      }
    }
  }
</script>
