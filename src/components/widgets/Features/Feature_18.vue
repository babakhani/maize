<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>
            </div>

            <div class="row text-center mt-5">
              <div class="col-12 col-sm-4">
                <ImageEditable name="feature_image_1"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_1"/>
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
              </div>

              <div class="col-12 col-sm-4 pt-4 pt-sm-0">
                <ImageEditable name="feature_image_2"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_2"/>
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
              </div>

              <div class="col-12 col-sm-4 pt-4 pt-sm-0">
                <ImageEditable name="feature_image_3"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_3"/>
                <TextEditable tag="h3"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description"/>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-12">
                <ImageEditable name="main_image"
                               cssClass="img-fluid"
                               :partData="touchedData.main_image"/>
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
    name: 'Feature_18',
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
            main_image: {
              styles: {},
              src: this.faker.img.wide()
            }
          }
        },
        require: false
      }
    }
  }
</script>
