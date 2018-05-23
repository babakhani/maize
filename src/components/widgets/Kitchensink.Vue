<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox
        :editMode="editMode"
        @moveUp="moveUp"
        @moveDown="moveDown"
        @toggleFullWidth="toggleFullWidth"
        @toggleEditMode="toggleEditMode"
        @deleteWidget="deleteWidget"></WidgetToolbox>

      <BgEditable
        name="bg"
        @update="updateData"
        :editMode="editMode"
        :styles="data.bg.styles">
        <section class="fdb-block team-2">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <div class="row justify-content-center">
                  <div class="col-3 col-xs-5">
                    <VideoEditable :editMode="editMode"
                                   name="video1"
                                   @update="updateData"
                                   :styles="data.video1.styles"
                                   :src="data.video1.src"
                    ></VideoEditable>
                  </div>
                  <div class="col-3 col-xs-5">
                    <VideoEditable :editMode="editMode"
                                   name="video2"
                                   @update="updateData"
                                   :styles="data.video2.styles"
                                   :src="data.video2.src"
                    ></VideoEditable>
                  </div>
                </div>

                <div class="row justify-content-center m-5">
                  <div class="col-3 col-xs-5">
                    <ImageEditable :editMode="editMode"
                                   name="image1"
                                   @update="updateData"
                                   :styles="data.image1.styles"
                                   :src="data.image1.src"
                    ></ImageEditable>
                  </div>
                  <div class="col-3 col-xs-5">
                    <ImageEditable :editMode="editMode"
                                   name="image2"
                                   @update="updateData"
                                   :styles="data.image2.styles"
                                   :src="data.image2.src"
                    ></ImageEditable>
                  </div>
                </div>

              </div>
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
                <text-editable tag="h4"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                </text-editable>
                <text-editable tag="h5"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                </text-editable>
                <text-editable tag="h6"
                               :editMode="editMode"
                               name="subtitle2"
                               @update="updateData"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
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
    name: 'Kitchensink',
    mixins: [widgetMixin],
    props: {
      data: {
        default() {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            image1: {
              styles: {},
              src: '/static/imgs/colors_wide_1.jpg'
            },
            image2: {
              styles: {},
              src: '/static/imgs/colors_wide_1.jpg'
            },
            video1: {
              styles: {},
              src: '/static/imgs/colors_wide_1.jpg'
            },
            video2: {
              styles: {},
              src: '/static/imgs/colors_wide_1.jpg'
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
