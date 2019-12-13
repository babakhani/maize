<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block pb-0">
          <div class="container">
            <div class="row text-lg-right align-items-center">
              <div class="col-12 col-sm-6 col-lg-3">
                <ImageEditable name="feature_image_1"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_1"/>
                <TextEditable tag="h4"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>


                <ImageEditable name="feature_image_2"
                               cssClass="mz-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_2"/>
                <TextEditable tag="h4"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>

                <ImageEditable name="feature_image_3"
                               cssClass="mz-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_3"/>
                <TextEditable tag="h4"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description"/>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 text-left pt-3 pt-sm-0 order-lg-12">
                <ImageEditable name="feature_image_4"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_4"/>
                <TextEditable tag="h4"
                               name="feature_4_title"
                               :partData="touchedData.feature_4_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_4_description"
                               :partData="touchedData.feature_4_description"/>


                <ImageEditable name="feature_image_5"
                               cssClass="mz-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_5"/>
                <TextEditable tag="h4"
                               name="feature_5_title"
                               :partData="touchedData.feature_5_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_5_description"
                               :partData="touchedData.feature_5_description"/>

                <ImageEditable name="feature_image_6"
                               cssClass="mz-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_6"/>
                <TextEditable tag="h4"
                               name="feature_6_title"
                               :partData="touchedData.feature_6_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_6_description"
                               :partData="touchedData.feature_6_description"/>
              </div>

              <div class="col-7 col-sm-4 col-lg-4 m-auto pt-5 pt-lg-0 order-lg-1">
                <ImageEditable name="feature_image_7"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.feature_image_7"/>
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
    name: 'Feature_13',
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
            },
            feature_image_7: {
              styles: {},
              src: this.faker.img.tall()
            },
            feature_7_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_7_description: {
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
