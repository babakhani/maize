<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row justify-content-center pb-xl-5">
              <div class="col-12 col-sm-11 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <ImageEditable name="main_image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.main_image"/>
              </div>
            </div>

            <div class="row text-left justify-content-center pt-5">
              <div class="col-12 col-md-6 col-lg-5 m-sm-auto">
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
              <div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0">
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
            </div>
          </div>
        </section>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Feature_27',
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
            main_image: {
              styles: {},
              src: this.faker.img.wide()
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            }
          }
        },
        require: false
      }
    }
  }
</script>
