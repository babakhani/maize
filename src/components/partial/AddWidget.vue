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

<style lang="scss" >
.add-widget-box {

  margin: 1em;

  .add-widget-box--card {
    margin-bottom: 5.5em;
  }

  .editor-page-preview-mode & {
    display: none;
  }

  .add-widget-box--main {
    border-radius: 30px;
    width: 20em;
    height: 20em;
    cursor: pointer;
    background: rgba($primary-color, 0.03);
    position: relative;
    border: 0;

    &:hover {
      background: rgba($primary-color, 0.07);
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
        width: 1.5em;
        height: 1.5em;
        border: 2px solid $primary-color;
        border-radius: 100%;
        box-shadow: 0 2px 4px 0 rgba($primary-color, 0.5);
        font-size: 5em;
        &:hover {
          border-color: $primary-color;
        }
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
}
</style>
