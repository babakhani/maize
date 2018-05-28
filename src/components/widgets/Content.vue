<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <BgEditable
        name="bg"
        :editMode="editMode"
        :styles="data.bg.styles">
        <section class="fdb-block fp-active" data-block-type="contents" data-id="2" draggable="true">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <text-editable tag="h1"
                               name="mainTitle"
                               :cssClass="''"
                               :editMode="editMode"
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text">
                </text-editable>
                <text-editable tag="p"
                               name="secondTitle"
                               :cssClass="'text-h3'"
                               :editMode="editMode"
                               :styles="data.secondTitle.styles"
                               :text="data.secondTitle.text">
                </text-editable>
              </div>
              <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                <ImageEditable name="image"
                               :cssClass="'img-fluid'"
                               :editMode="editMode"
                               :styles="data.image.styles"
                               :src="data.image.src">
                </ImageEditable>
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
    name: 'Content',
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
            },
            image: {
              styles: {},
              src: '/static/imgs/colors_wide_1.jpg'
            }
          }
        },
        require: false
      }
    }
  }
</script>
