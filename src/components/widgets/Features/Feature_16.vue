<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block pb-md-0">
          <div class="container">
            <div class="row justify-content-center pb-xl-5">
              <div class="col-12 col-md-8 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               cssClass="text-h3 pb-xl-4"
                               name="main_description"
                               :partData="touchedData.main_description"/>
              </div>
            </div>

            <div class="row text-right align-items-center-lg align-items-end pt-5">
              <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto">
                <ImageEditable name="main_image"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.main_image"/>
              </div>

              <div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0">
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
                <br/>
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
                <br/>
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
        </section>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Feature_16',
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
              text: this.faker.lorem.words(3),
            },
            main_description: {
              styles: {},
              text: this.faker.lorem.words(25),
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            main_image: {
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
