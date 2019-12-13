<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <ImageEditable name="image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.image"/>
              </div>
            </div>

            <div class="row text-center justify-content-center mt-5">
              <div class="col-12 col-sm-4 col-lg-3 m-md-auto">
                <ImageEditable name="feature_image_1"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_1"/>
                <TextEditable tag="h4"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
                <ImageEditable name="feature_image_2"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_2"/>
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
                <ImageEditable name="feature_image_3"
                               cssClass="mz-icon"
                               :partData="touchedData.feature_image_3"/>
                <TextEditable tag="h3"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title"/>
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
    name: 'Feature_8',
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
            image: {
              styles: {},
              src: this.faker.img.wide()
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
          }
        },
        require: false
      }
    }
  }
</script>
