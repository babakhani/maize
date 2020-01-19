<template>
  <div>
      <WidgetToolbox></WidgetToolbox>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <p class="text-h3">
                  <TextEditable tag="a"
                                 name="main_link"
                                 :partData="touchedData.main_link"/>
                </p>
              </div>
            </div>

            <div class="row text-center justify-content-center mt-5">
              <div class="col-10 col-sm-3">
                <ImageEditable name="feature_image_1"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_1"/>
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
              </div>
              <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <ImageEditable name="feature_image_2"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_2"/>
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
              </div>

              <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <ImageEditable name="feature_image_3"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_3"/>
                <TextEditable tag="h3"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title"/>
              </div>

              <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <ImageEditable name="feature_image_4"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_4"/>
                <TextEditable tag="h3"
                               name="feature_4_title"
                               :partData="touchedData.feature_4_title"/>
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
    name: 'Feature_25',
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
              text: this.faker.lorem.words(5)
            },
            main_link: {
              styles: {},
              text: this.faker.lorem.words(3),
              src: this.faker.internet.url
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.big()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.big()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.big()
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_image_4: {
              styles: {},
              src: this.faker.img.big()
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            }
          }
        },
        require: false
      }
    }
  }
</script>
