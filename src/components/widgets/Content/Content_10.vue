<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <ImageEditable name="image1"
                               cssClass="img-fluid"
                               :partData="touchedData.image1"/>
              </div>
              <div class="col">
                <ImageEditable name="image2"
                               cssClass="img-fluid"
                               :partData="touchedData.image2"/>

              </div>
              <div class="col">
                <ImageEditable name="image3"
                               cssClass="img-fluid"
                               :partData="touchedData.image3"/>
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
  name: 'Content_10',
  mixins: [widgetMixin],
  props: {
    defaultData: {
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
            text: this.faker.lorem.words(3)
          },
          image1: {
            styles: {},
            src: this.faker.img.big()
          },
          image2: {
            styles: {},
            src: this.faker.img.big()
          },
          image3: {
            styles: {},
            src: this.faker.img.big()
          }
        }
      },
      require: false
    }
  }
}
</script>
