<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-lg-3">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
          </div>

          <div class="col-6 col-lg-3">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
          </div>

          <div class="col-12 col-lg-6 pt-3">
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3 text-muted"
                          :partData="touchedData.description_1"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3 text-muted"
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
  name: 'Content_19',
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
          description_1: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
          },
          description_2: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
          },
          image: {
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
