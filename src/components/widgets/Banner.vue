<template>
  <div :class="{'container': !fullWidth}">

    <h1>Banner {{uniqeKey}}</h1>

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
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text">
                </text-editable>
                <text-editable tag="h2"
                               :editMode="editMode"
                               name="subtitle"
                               @update="updateData"
                               :styles="data.subtitle.styles"
                               :text="data.subtitle.text">
                  {{data.subtitle.text}}
                </text-editable>
                <text-editable tag="h3"
                               :editMode="editMode"
                               name="subtitle1"
                               @update="updateData"
                               :styles="data.subtitle1.styles"
                               :text="data.subtitle1.text">
                  {{data.subtitle.text}}
                </text-editable>
                <text-editable tag="p"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                  {{data.subtitle.text}}
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
