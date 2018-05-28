<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <BgEditable
        name="bg"
        :editMode="editMode"
        :styles="data.bg.styles">

        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="row justify-content-center pb-5">
                  <div class="col-12 col-lg-8 text-center">
                    <text-editable tag="h1"
                                   name="mainTitle"
                                   :editMode="editMode"
                                   :styles="data.mainTitle.styles"
                                   :text="data.mainTitle.text"></text-editable>

                  </div>
                </div>
                <div class="row justify-content-center pb-5">
                  <div class="col-12 col-lg-8 text-center">
                    <!--<img alt="image" class="img-fluid" src="./imgs/colors_wide_1.jpg">-->
                    <PlayerEditable name="player"
                                    :editMode="editMode"
                                    :styles="data.player.styles"
                                    :src="data.player.src">

                    </PlayerEditable>
                  </div>
                </div>
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
        default () {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            bg: {
              styles: {}
            },
            player: {
              styles: {},
              src: 'http://tamasha.com/embed/GmKVW'
            },
            mainTitle: {
              styles: {},
              text: 'this is widget default title'
            }
          }
        },
        require: false
      }
    }
  }
</script>
