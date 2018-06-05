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
            <div class="row justify-content-end">
              <div class="col col-sm-10 col-md-8 text-left">
                <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="https://www.froala.com">World of Grammar</a>.</p>
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
    name: 'ContentBasic5',
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
