<template>
  <div :class="{'container': !fullWidth}">
    <div class="widget-block">
      <WidgetToolbox @toggleFullWidth="toggleFullWidth" @toggleEditMode="toggleEditMode"
                     @deleteWidget="deleteWidget"></WidgetToolbox>
      <BgEditable :editMode="editMode">
        <section class="fdb-block team-2">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-12">
                <text-editable tag="h1"
                               :editMode="editMode"
                               name="mainTitle"
                               @update="updateData"
                               :styles="widgetData.mainTitle.styles"
                               :text="widgetData.mainTitle.text">
                </text-editable>
                <text-editable tag="h2"
                               :editMode="editMode"
                               name="subtitle"
                               @update="updateData"
                               :styles="widgetData.subtitle.styles"
                               :text="widgetData.subtitle.text">
                  {{widgetData.subtitle.text}}
                </text-editable>
                <text-editable tag="h3"
                               :editMode="editMode"
                               name="subtitle1"
                               @update="updateData"
                               :styles="widgetData.subtitle1.styles"
                               :text="widgetData.subtitle1.text">
                  {{widgetData.subtitle.text}}
                </text-editable>
                <text-editable tag="p"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="widgetData.subtitle2.styles"
                               :text="widgetData.subtitle2.text">
                  {{widgetData.subtitle.text}}
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
      // TODO: merge widget data expect default pattern
      widgetData: {
        default() {
          return {
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
            }
          }
        },
        require: false
      }
    },
    methods: {
      updateData(e) {
        console.log('widget update method')
        console.log(e)
        console.log(this.uniqeKey)
        this.$store.dispatch('main/updateItemOfCurrentWidgetList', {
          key: this.uniqeKey, // index of this widget in cuurentWidgetList
          name: e.name, // name of editble part that his data must be update
          data: e
        })
      }
    }
  }
</script>
