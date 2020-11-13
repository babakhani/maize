<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-left align-items-center">
          <div class="col-12 col-md-6 col-lg-4">
            <TextEditable tag="h2"
                          name="title_1"
                          :partData="touchedData.title_1"/>
            <TextEditable tag="p"
                          name="description_1"
                          cssClass="text-h3 lead"
                          :partData="touchedData.description_1"/>
          </div>
          <div class="col-12 col-md-6 col-lg-4 pt-4 pt-md-0">
            <TextEditable tag="h2"
                          name="title_2"
                          :partData="touchedData.title_2"/>
            <TextEditable tag="p"
                          name="description_2"
                          cssClass="text-h3 lead"
                          :partData="touchedData.description_2"/>
          </div>

          <div class="col-12 col-md-8 m-auto m-lg-0 col-lg-4 pt-5 pt-lg-0">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
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
  name: 'Content_24',
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
          title_1: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          title_2: {
            styles: {},
            text: this.faker.lorem.words(2)
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
