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

        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <h1>Froala Design Blocks</h1>

                <div class="row text-left pt-4">
                  <div class="col-12 col-md-6">
                    <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place far far away.</p>
                  </div>
                  <div class="col-12 col-md-6">
                    <p class="text-h3">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.</p>
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
    name: 'ContentBasic7',
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
            mainTitle: {
              styles: {},
              text: 'Content title'
            },
            secondTitle: {
              styles: {},
              text: 'Link 2',
              src: 'Lorem ipsum dolor sit amet, has sonet perpetua ex, ad lorem nulla verterem sed. Eos assum sonet ocurreret ad, at munere soluta euismod duo, id has dolorum omnesque iracundia. In usu legere laboramus. Ullum quidam causae cu sed, doming persius eu nec. Fugit definitionem in mea, ut nec equidem nostrum dissentiunt.\n'
            }, image: {
              styles: {}, src: '/static/imgs/colors_wide_1.jpg'
            }
          }
        },
        require: false
      }
    }
  }
</script>
