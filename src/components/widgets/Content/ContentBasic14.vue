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
            <div class="row align-items-center">
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <img alt="image" class="img-fluid" src="/static/imgs/colors_wide_1.jpg">
              </div>
              <div class="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
                <h1>Froala Blocks</h1>
                <p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a class="btn btn-round mt-4" href="https://www.froala.com">Download</a></p>
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
