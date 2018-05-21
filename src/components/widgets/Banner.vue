<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox @toggleFullWidth="toggleFullWidth"
                     @toggleEditMode="toggleEditMode"
                     @deleteWidget="deleteWidget"></WidgetToolbox>

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
                <text-editable tag="h2"
                               :editMode="editMode"
                               name="subtitle"
                               @update="updateData"
                               :styles="data.subtitle.styles"
                               :text="data.subtitle.text">
                </text-editable>
                <text-editable tag="h3"
                               :editMode="editMode"
                               name="subtitle1"
                               @update="updateData"
                               :styles="data.subtitle1.styles"
                               :text="data.subtitle1.text">
                </text-editable>
                <text-editable tag="p"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
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
    name: 'Banner',
    mixins: [widgetMixin],
    props: {
      data: {
        default() {
          return {

            // general widget config
            config: {
              fullWidth: true
            },

            // Editable parts config that can be used in editable components
            mainTitle: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle1: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle2: {
              text: 'HI i am banner Widget from store',
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
