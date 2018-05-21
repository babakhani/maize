<template>
  <div class="add-widget-box">
    <!--TODO: bita fix class name-->
    <div class="event-body container">
      <div class="event-body--main">

        <div class="center-center">
          <button @click="goToAddWidgetMode" class="btn btn-add-widget">
            +
          </button>
          <p class="text-add-widget">اضافه کردن بخش</p>
        </div>

      </div>

      <!-- Modal Component -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamWidget1',
    methods: {
      goToAddWidgetMode() {
        console.log('goToAddWidgetMode')
        this.$store.dispatch('main/setAddWidgetMode', true)
      }
    }
  }
</script>
