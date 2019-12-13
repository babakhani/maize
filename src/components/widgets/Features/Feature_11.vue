<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>
            </div>
            <div class="row text-left mt-5">
              <div class="col-12 col-md-4">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_1"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_1"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="h3"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title"/>
                    <br/>
                    <TextEditable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description"/>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_2"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_2"/>
                  </div>
                  <div class="col-9">
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

              <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_3"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_3"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="h3"
                                   name="feature_3_title"
                                   :partData="touchedData.feature_3_title"/>
                    <br/>
                    <TextEditable tag="p"
                                   name="feature_3_description"
                                   :partData="touchedData.feature_3_description"/>
                  </div>
                </div>
              </div>
            </div>

            <div class="row text-left pt-3 pt-sm-4 pt-md-5">
              <div class="col-12 col-md-4">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_4"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_4"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="h3"
                                   name="feature_4_title"
                                   :partData="touchedData.feature_4_title"/>
                    <br/>
                    <TextEditable tag="p"
                                   name="feature_4_description"
                                   :partData="touchedData.feature_4_description"/>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_5"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_5"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="h3"
                                   name="feature_5_title"
                                   :partData="touchedData.feature_5_title"/>
                    <br/>
                    <TextEditable tag="p"
                                   name="feature_5_description"
                                   :partData="touchedData.feature_5_description"/>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_6"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_6"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="h3"
                                   name="feature_6_title"
                                   :partData="touchedData.feature_6_title"/>
                    <br/>
                    <TextEditable tag="p"
                                   name="feature_6_description"
                                   :partData="touchedData.feature_6_description"/>
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
    name: 'Feature_11',
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
              text: this.faker.lorem.words(1),
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_4: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_5: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_5_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_5_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_6: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_6_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_6_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            }
          }
        },
        require: false
      }
    }
  }
</script>
