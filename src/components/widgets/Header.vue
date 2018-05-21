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
    name: 'Header',
    mixins: [widgetMixin],
    props: {
      data: {
        default() {
          return {
            mainTitle: {
              text: 'HI i am header Widget default text',
              styles: {}
            }
          }
        },
        require: false
      }
    },
    methods: {
      updateData(e) {
        this.$store.dispatch('main/updateItemOfCurrentWidgetList', {
          key: this.uniqeKey, // index of this widget in cuurentWidgetList
          name: e.name, // name of editble part that his data must be update
          data: e
        })
      }
    }
  }
</script>
