<template>
  <div class="add-widget-box w-100 mx-0">
    <b-row class="justify-content-center add-widget-box--card">
      <b-col
        cols="12"
        md="6"
        lg="4">
        <b-card
          @click="goToAddWidgetMode"
          class="add-widget-box--main container">
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AddWidgetBigButton',
  methods: {
    goToAddWidgetMode() {
      this.$store.dispatch('layout/setAddWidgetMode', true)
    }
  }
}
</script>
