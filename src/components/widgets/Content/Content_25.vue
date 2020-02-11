<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-8 col-md-4">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image_1"/>
          </div>

          <div class="col-4 col-md-2">
            <div class="row">
              <div class="col-12">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image_2"/>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-12">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image_3"/>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-5 ml-auto pt-5 pt-md-0">
            <ImageEditable name="image"
                           class="text-left"
                           cssClass="mz-icon mx-auto d-block"
                           :partData="touchedData.image_4"/>
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3 lead text-muted"
                          :partData="touchedData.description"/>
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
  name: 'Content_25',
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
            text: this.faker.lorem.words(2),
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(10),
            src: this.faker.internet.url(),
          },
          image_1: {
            styles: {},
            src: this.faker.img.big()
          },
          image_2: {
            styles: {},
            src: this.faker.img.big()
          },
          image_3: {
            styles: {},
            src: this.faker.img.big()
          },
          image_4: {
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
