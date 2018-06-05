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

        <section class="fdb-block pb-0">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <img alt="image" class="fdb-icon" src="/static/imgs/img_square_1.svg"/>
                <h1>Design Blocks</h1>
                <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
                <img alt="image" class="img-fluid br-0" src="/static/imgs/img_tall.png">
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
    name: 'ContentBasic10',
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
