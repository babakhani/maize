<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row text-center">
              <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto">
                <ImageEditable name="image_1"
                               cssClass="mz-icon mb-3"
                               :partData="touchedData.image_1"/>
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
              </div>
              <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0">
                <ImageEditable name="image_2"
                               cssClass="mz-icon mb-3"
                               :partData="touchedData.image_2"/>
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
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
  name: 'Feature_7',
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
          feature_1_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_1_description: {
            styles: {},
            text: this.faker.lorem.words(5)
          },
          feature_2_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_2_description: {
            styles: {},
            text: this.faker.lorem.words(5)
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
