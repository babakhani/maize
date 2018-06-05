<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        :editMode="editMode"
        :styles="data.bg.styles">
        <section class="fdb-block team-2">
          <div class="container">
            <div class="row text-center">

              <div class="col-12">
                <div class="row justify-content-center">
                  <div class="col-5 col-xs-5">

                    <PlayerEditable name="player"
                                    :editMode="editMode"
                                    :styles="data.player.styles"
                                    :src="data.player.src">

                    </PlayerEditable>

                  </div>
                </div>
              </div>


              <div class="col-12 mt-4">
                <div class="row justify-content-center">
                  <div class="col-3 col-xs-5">
                    <VideoEditable name="video1"
                                   :editMode="editMode"
                                   :styles="data.video1.styles"
                                   :src="data.video1.src"
                    ></VideoEditable>
                  </div>
                  <div class="col-3 col-xs-5">
                    <VideoEditable name="video2"
                                   :editMode="editMode"
                                   :styles="data.video2.styles"
                                   :src="data.video2.src"
                    ></VideoEditable>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row justify-content-center mt-5">
                  <div class="col-3 col-xs-5">
                    <ImageEditable name="image1"
                                   :editMode="editMode"
                                   :styles="data.image1.styles"
                                   :src="data.image1.src"
                    ></ImageEditable>
                  </div>
                  <div class="col-3 col-xs-5">
                    <ImageEditable name="image2"
                                   :editMode="editMode"
                                   :styles="data.image2.styles"
                                   :src="data.image2.src"
                    ></ImageEditable>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <text-editable tag="h1"
                               name="mainTitle"
                               :editMode="editMode"
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text">
                </text-editable>
                <text-editable tag="h2"
                               name="subtitle"
                               :editMode="editMode"
                               :styles="data.subtitle.styles"
                               :text="data.subtitle.text">
                </text-editable>
                <text-editable tag="h3"
                               name="subtitle1"
                               :editMode="editMode"
                               :styles="data.subtitle1.styles"
                               :text="data.subtitle1.text">
                </text-editable>
                <text-editable tag="h4"
                               name="subtitle2"
                               :editMode="editMode"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                </text-editable>
                <text-editable tag="h5"
                               name="subtitle2"
                               :editMode="editMode"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                </text-editable>
                <text-editable tag="h6"
                               name="subtitle2"
                               :editMode="editMode"
                               :styles="data.subtitle2.styles"
                               :text="data.subtitle2.text">
                </text-editable>
                <text-editable tag="p"
                               name="subtitle2"
                               :editMode="editMode"
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
    mounted () {
      console.log(this.$children)
    },
    props: {
      data: {
        default () {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            image1: {
              styles: {},
              src: 'http://via.placeholder.com/150x114'
            },
            image2: {
              styles: {},
              src: 'http://via.placeholder.com/150x114'
            },
            video1: {
              styles: {},
              src: 'http://via.placeholder.com/150x114'
            },
            video2: {
              styles: {},
              src: 'http://via.placeholder.com/150x114'
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
            },
            player: {
              styles: {},
              src: 'http://tamasha.com/embed/GmKVW'
            }
          }
        },
        require: false
      }
    }
  }
</script>
