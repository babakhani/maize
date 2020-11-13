<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row">
              <div class="col-12 text-left">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="main_description"
                               :partData="touchedData.main_description"/>
                <p class="text-h3">
                  <TextEditable tag="a"
                                 name="main_link"
                                 :partData="touchedData.feature_1_link"/>
                </p>
              </div>
            </div>

            <div class="row text-center no-gutters pt-5">
              <div class="col-12">
                <div class="row">
                  <div class="col-8 col-sm-5 col-md-2 m-auto">
                    <ImageEditable name="feature_image_1"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_1"/>
                    <TextEditable tag="h4"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title"/>
                  </div>
                  <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-sm-0">
                    <ImageEditable name="feature_image_2"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_2"/>
                    <TextEditable tag="h4"
                                   name="feature_2_title"
                                   :partData="touchedData.feature_2_title"/>
                  </div>
                  <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">
                    <ImageEditable name="feature_image_3"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_3"/>
                    <TextEditable tag="h4"
                                   name="feature_3_title"
                                   :partData="touchedData.feature_3_title"/>
                  </div>
                  <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">
                    <ImageEditable name="feature_image_4"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_4"/>
                    <TextEditable tag="h4"
                                   name="feature_4_title"
                                   :partData="touchedData.feature_4_title"/>
                  </div>
                </div>
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
  name: 'Feature_23',
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
            text: this.faker.lorem.words(8)
          },
          main_description: {
            styles: {},
            text: this.faker.lorem.words(45)
          },
          main_link: {
            styles: {},
            text: this.faker.lorem.words(2),
            src: this.faker.internet.url
          },
          feature_image_1: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_1_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_image_2: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_2_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_image_3: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_3_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_image_4: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_4_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          }
        }
      },
      require: false
    }
  }
}
</script>
