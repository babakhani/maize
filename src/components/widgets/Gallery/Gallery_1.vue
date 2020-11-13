<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block fp-active"
                 data-block-type="contents"
                 data-id="1"
                 draggable="true">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :editMode="editMode"
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text"></TextEditable>
              </div>
            </div>
            <div class="row pt-4">
              <div class="col-6 col-md-3">
                <ImageEditable name="image1"
                               :csClass="'img-fluid'"
                               :editMode="editMode"
                               :styles="data.image1.styles"
                               :src="data.image1.src"
                ></ImageEditable>
              </div>
              <div class="col-6 col-md-3">
                <ImageEditable name="image2"
                               :csClass="'img-fluid'"
                               :editMode="editMode"
                               :styles="data.image2.styles"
                               :src="data.image2.src"
                ></ImageEditable>
              </div>
              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ImageEditable name="image3"
                               :csClass="'img-fluid'"
                               :editMode="editMode"
                               :styles="data.image3.styles"
                               :src="data.image3.src"
                ></ImageEditable>
              </div>
              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ImageEditable name="image4"
                               :csClass="'img-fluid'"
                               :editMode="editMode"
                               :styles="data.image4.styles"
                               :src="data.image4.src"
                ></ImageEditable>
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
  name: 'Galley',
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
          image1: {
            styles: {},
            src: '/static/imgs/colors_wide_1.jpg'
          },
          image2: {
            styles: {},
            src: '/static/imgs/colors_wide_1.jpg'
          },
          image3: {
            styles: {},
            src: '/static/imgs/colors_wide_1.jpg'
          },
          image4: {
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
