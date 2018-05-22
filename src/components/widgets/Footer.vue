<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox @toggleFullWidth="toggleFullWidth"
                     @toggleEditMode="toggleEditMode"
                     @deleteWidget="deleteWidget">
      </WidgetToolbox>
      <BgEditable
        name="bg"
        @update="updateData"
        :editMode="editMode"
        :styles="data.bg.styles">

        <section class="fdb-block team-2">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-12">
                <text-editable tag="h1"
                               :editMode="editMode"
                               name="mainTitle"
                               @update="updateData"
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text">
                </text-editable>
              </div>
            </div>
          </div>
        </section>

      </BgEditable>
    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer',
    mixins: [widgetMixin],
    props: {
      data: {
        default() {
          return {
            // general widget config
            config: {
              fullWidth: true
              // sticky: false
            },
            mainTitle: {
              text: 'Hi i am footer Widget default text',
              styles: {}
            },
            bg: {
              styles: {}
            }
          }
        },
        require: false
      }
    }
  }
</script>
