<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="h2"
                          name="description_1"
                          cssClass="text_h2"
                          :partData="touchedData.subtitle"/>
          </div>
        </div>

        <div class="row text-center pt-3 pt-xl-5">
          <div class="col-12 col-sm-10 m-auto m-md-0 col-md-6">
            <ImageEditable name="image_1"
                           cssClass="img-fluid"
                           :partData="touchedData.image_1"/>
            <TextEditable tag="p"
                          name="description_2"
                          cssClass="lead pt-3 text-muted"
                          :partData="touchedData.description_1"/>
          </div>

          <div class="col-12 col-sm-10 m-auto m-md-0 col-md-6 pt-5 pt-md-0">
            <ImageEditable name="image_2"
                           cssClass="img-fluid"
                           :partData="touchedData.image_2"/>
            <TextEditable tag="p"
                          name="description_3"
                          cssClass="lead pt-3 text-muted"
                          :partData="touchedData.description_2"/>
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
  name: 'Content_23',
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
            text: this.faker.lorem.words(3),
          },
          subtitle: {
            styles: {},
            text: this.faker.lorem.words(8),
            src: this.faker.internet.url(),
          },
          description_1: {
            styles: {},
            text: this.faker.lorem.words(13),
            src: this.faker.internet.url(),
          },
          description_2: {
            styles: {},
            text: this.faker.lorem.words(13),
            src: this.faker.internet.url(),
          },
          image_1: {
            styles: {},
            src: this.faker.img.big()
          },
          image_2: {
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
