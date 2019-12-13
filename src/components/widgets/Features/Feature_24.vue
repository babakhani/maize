<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row align-items-top">
              <div class="col-12 col-md-6 col-xl-4 m-auto">
                <TextEditable tag="h2"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>

              <div class="col-12 col-md-6 pt-5 pt-md-0">
                <div class="row justify-content-left">
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_1"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_1"/>
                    <p>
                      <TextEditable tag="a"
                                     name="feature_link_1"
                                     :partData="touchedData.feature_link_1"/>
                    </p>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_2"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_2"/>
                    <TextEditable tag="a"
                                   name="feature_link_2"
                                   :partData="touchedData.feature_link_2"/>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_3"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_3"/>
                    <TextEditable tag="a"
                                   name="feature_link_3"
                                   :partData="touchedData.feature_link_3"/>
                  </div>
                </div>

                <div class="row justify-content-left mt-4 mt-xl-5">
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_4"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_4"/>
                    <TextEditable tag="a"
                                   name="feature_link_4"
                                   :partData="touchedData.feature_link_4"/>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_5"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_5"/>
                    <TextEditable tag="a"
                                   name="feature_link_5"
                                   :partData="touchedData.feature_link_5"/>
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
    name: 'Feature_24',
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
              text: this.faker.lorem.words(10)
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_1: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_2: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_3: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_4: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_4: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_5: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_5: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
          }
        },
        require: false
      }
    }
  }
</script>
