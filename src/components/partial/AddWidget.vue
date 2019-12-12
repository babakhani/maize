<template>
  <div 
    @click="goToAddWidgetMode"
    class="add-widget-box w-100 mx-0">
    <!--TODO: bita fix class name-->
    <b-row class="justify-content-center">
      <b-col
         cols="12"
         md="6"
         lg="4">
        <b-card class="add-widget-box--main container">
          <div class="add-widget-box--main--details">
            <div class="center-center">
              <button 
                 class="btn btn-add-widget">
                <icon name="plus"></icon>
              </button>
              <p class="text-add-widget">
              {{ $t('add_widget') }}
              </p>
            </div>
          </div>
          <!-- Modal Component -->
          <b-modal id="modal1"
            title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'TeamWidget1',
    methods: {
      goToAddWidgetMode() {
        console.log('goToAddWidgetMode')
        this.$store.dispatch('layout/setAddWidgetMode', true)
      }
    }
  }
</script>
