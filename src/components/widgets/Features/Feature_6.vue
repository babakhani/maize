<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-8 col-lg-6 m-md-auto ml-lg-0 mr-lg-auto">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image"/>
              </div>
              <div class="col-12 col-lg-6 col-xl-5 ml-sm-auto pt-5 pt-lg-0">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>

                <div class="row pt-4 pt-xl-5">
                  <div class="col-12 col-sm-6 col-xl-5">
                    <TextEditable tag="h4"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title"/>
                    <TextEditable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description"/>

                  </div>
                  <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                    <TextEditable tag="h4"
                                   name="feature_2_title"
                                   :partData="touchedData.feature_2_title"/>
                    <TextEditable tag="p"
                                   name="feature_2_description"
                                   :partData="touchedData.feature_2_description"/>
                  </div>
                </div>

                <div class="row pt-3">
                  <div class="col-12 col-sm-6 col-xl-5">
                    <TextEditable tag="h4"
                                   name="feature_3_title"
                                   :partData="touchedData.feature_3_title"/>
                    <TextEditable tag="p"
                                   name="feature_3_description"
                                   :partData="touchedData.feature_3_description"/>
                  </div>
                  <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                    <TextEditable tag="h4"
                                   name="feature_4_title"
                                   :partData="touchedData.feature_4_title"/>
                    <TextEditable tag="p"
                                   name="feature_4_description"
                                   :partData="touchedData.feature_4_description"/>
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
    name: 'Feature_6',
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
              text: this.faker.lorem.words(2),
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(6),
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
