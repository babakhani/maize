<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox @toggleFullWidth="toggleFullWidth" @toggleEditMode="toggleEditMode"
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
                               name="mainHeader"
                               @update="updateData"
                               :styles="data.mainHeader.styles"
                               :text="data.mainHeader.text">
                </text-editable>
                <text-editable tag="h2"
                               :editMode="editMode"
                               name="subHeader"
                               @update="updateData"
                               :styles="data.subHeader.styles"
                               :text="data.subHeader.text">
                </text-editable>
              </div>
            </div>
            <div class="row-50"></div>
            <div class="row text-center justify-content-center">
              <div class="col-sm-3 m-sm-auto">



                <ImageEditable :editMode="editMode"
                               name="image1"
                               @update="updateData"
                               :styles="data.image1.styles"
                               :src="data.image1.src"
                ></ImageEditable>


                <text-editable tag="p"
                               :editMode="editMode"
                               name="imageCaption1"
                               @update="updateData"
                               :styles="data.imageCaption1.styles"
                               :text="data.imageCaption1.text">
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
    name: 'TeamWidget',
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
            mainHeader: {
              text: 'HI i am team Widget header from Default text',
              styles: {}
            },
            imageCaption1: {
              text: 'HI i am team Widget header from Default text',
              styles: {}
            },
            subHeader: {
              text: 'this is image caption',
              styles: {}
            },
            image1: {
              styles: {},
              src: '/static/imgs/img_round.svg'
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

