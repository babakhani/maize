<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row align-items-center pb-xl-5">
              <div class="col-12 col-md-7 col-xl-5">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="main_description"
                               :partData="touchedData.main_description"/>
              </div>
              <div class="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0">
                <ImageEditable name="main_image"
                               cssClass="img-fluid"
                               :partData="touchedData.main_image"/>
              </div>
            </div>
            <div class="row pt-5">
              <div class="col-12 col-sm-6 col-md-3">
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
              </div>
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0">
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
              </div>
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
                <TextEditable tag="h3"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description"/>
              </div>
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
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
        </section>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Feature_26',
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
            main_description: {
              styles: {},
              text: this.faker.lorem.words(25),
            },
            main_image: {
              styles: {},
              src: this.faker.img.icon()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
          }
        },
        require: false
      }
    }
  }
</script>
