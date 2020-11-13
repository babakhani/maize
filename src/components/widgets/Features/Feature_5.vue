<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6 col-xl-5">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               name="mainDescription"
                               cssClass="text-h3"
                               :partData="touchedData.mainDescription"/>
                <div class="row pt-4 pt-xl-5">
                  <div class="col-12 col-md-5">
                    <TextEditable tag="strong"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title"/>
                    <TextEditable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description"/>
                  </div>
                  <div class="col-12 col-md-5 m-auto pt-3 pt-md-0">
                    <TextEditable tag="strong"
                                   name="feature_2title"
                                   :partData="touchedData.feature_2_title"/>
                    <TextEditable
                                   tag="p"
                                   name="feature_2_description"
                                   :partData="touchedData.feature_2_description"/>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">
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
  name: 'Feature_5',
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
            text: this.faker.lorem.words(2)
          },
          mainDescription: {
            styles: {},
            text: this.faker.lorem.words(30)
          },
          feature_1_title: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          feature_1_description: {
            styles: {},
            text: this.faker.lorem.words(6)
          },
          feature_2_title: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          feature_2_description: {
            styles: {},
            text: this.faker.lorem.words(6)
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
