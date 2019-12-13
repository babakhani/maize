<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="row justify-content-center pb-5">
                  <div class="col-12 col-lg-8 text-center">
                    <TextEditable tag="h1"
                                   name="mainTitle"
                                   :editMode="editMode"
                                   :styles="data.mainTitle.styles"
                                   :text="data.mainTitle.text"/>

                  </div>
                </div>
                <div class="row justify-content-center pb-5">
                  <div class="col-12 col-lg-8 text-center">
                    <!--<img alt="image" class="img-fluid" src="./imgs/colors_wide_1.jpg">-->
                    <PlayerEditable name="player"
                                    :editMode="editMode"
                                    :styles="data.player.styles"
                                    :src="data.player.src"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'player_1',
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
              styles: {
                width: '80%',
                height: '300px'
              },
              src: ''
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
