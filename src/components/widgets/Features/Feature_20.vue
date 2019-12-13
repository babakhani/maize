<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-left">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <br/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="main_description"
                               :partData="touchedData.main_description"/>

                <ImageEditable name="main_image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.main_image"/>
              </div>
            </div>

            <div class="row text-left pt-5">
              <div class="col-12 col-md-6">
                <TextEditable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>

                <p>
                  <TextEditable tag="a"
                                 name="feature_1_link"
                                 :partData="touchedData.feature_1_link"/>
                </p>
              </div>
              <div class="col-12 col-md-6 pt-4 pt-md-0">
                <TextEditable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title"/>
                <br/>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
                <p>
                  <TextEditable tag="a"
                                 name="feature_2_link"
                                 :partData="touchedData.feature_2_link"/>
                </p>
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
    name: 'Feature_20',
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
            main_image: {
              styles: {},
              src: this.faker.img.wide()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(50),
            },
            feature_1_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(50),
            },
            feature_2_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
