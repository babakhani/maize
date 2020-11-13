<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-left">
          <div class="col col-md-6">
            <ImageEditable name="image"
                           class="text-left"
                           cssClass="mz-icon mb-3"
                           :partData="touchedData.image"/>
            <TextEditable tag="h3"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3"
                          :partData="touchedData.description"/>
          </div>
          <div class="col-12 col-md-6 pt-5 pt-md-0">
            <ImageEditable name="image"
                           class="text-left"
                           cssClass="mz-icon mb-3"
                           :partData="touchedData.image"/>
            <TextEditable tag="h3"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3"
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
  name: 'Content_16',
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
          description: {
            styles: {},
            text: this.faker.lorem.words(30),
            src: this.faker.url()
          },
          image: {
            styles: {},
            src: this.faker.img.big()
          },
          imageTall: {
            styles: {},
            src: this.faker.img.tall()
          }
        }
      },
      require: false
    }
  }
}
</script>
