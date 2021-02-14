<template>
  <div class="w-100 mx-0 my-5">
    <b-row class="justify-content-center">
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
    goToAddWidgetMode () {
      this.$store.dispatch('layout/setAddWidgetMode', true)
    }
  }
}
</script>

<style scoped lang="scss" >
.add-widget-box--main {
  border-radius: 15px;
  width: 10em;
  height: 10em;
  cursor: pointer;
  position: relative;
  border: 0;

  &:hover {
    border: 1px solid $primary-color;
  }

  .add-widget-box--main--details {
    text-align: center;
    top: 2em;
    left: 2em;
    right: 2em;
    bottom: 2em;
    position: absolute;
    .center-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .btn-add-widget {
      position: relative;
      cursor: pointer;
      width: 1em;
      height: 1em;
      margin: .3em 1em 0 1em;
      border-radius: 100%;
      box-shadow: 0 2px 4px 0 rgba($primary-color, 0.5);
      font-size: 5em;
      .fa-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50% );
        color: $primary-color;
      }
    }
    .text-add-widget {
      font-size: 16px;
      border-color: $primary-color;
      margin-top: 15px;
      font-weight: normal;
    }
  }
}
</style>
