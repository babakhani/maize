<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>
            </div>
            <div class="row-70"></div>
            <div class="row text-center justify-content-sm-center no-gutters">
              <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">
                <div class="mz-box mz-touch">
                  <TextEditable tag="h2"
                                 name="feature_1_title"
                                 :partData="touchedData.feature_1_title"/>
                  <TextEditable tag="p"
                                 name="feature_1_description"
                                 :partData="touchedData.feature_1_description"/>
                  <p class="mt-4">
                    <TextEditable tag="a"
                                   name="feature_1_link"
                                   :partData="touchedData.feature_1_link"/>
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
                <div class="mz-box mz-touch">
                  <TextEditable tag="h2"
                                 name="feature_2_title"
                                 :partData="touchedData.feature_2_title"/>
                  <TextEditable tag="p"
                                 name="feature_2_description"
                                 :partData="touchedData.feature_2_description"/>
                  <p class="mt-4">
                    <TextEditable tag="a"
                                   name="feature_2_link"
                                   :partData="touchedData.feature_2_link"/>
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
                <div class="mz-box mz-touch">
                  <TextEditable tag="h2"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_3_title"/>
                  <TextEditable tag="p"
                                 name="feature_3_description"
                                 :partData="touchedData.feature_3_description"/>
                  <p class="mt-4">
                    <TextEditable tag="a"
                                   name="feature_3_link"
                                   :partData="touchedData.feature_3_link"/>
                  </p>
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
  name: 'Feature_4',
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
            styles: {
              'background': '#000',
              'color': '#ccc'
            }
          },
          mainTitle: {
            styles: {},
            text: this.faker.lorem.words(3)
          },
          feature_1_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_1_description: {
            styles: {},
            text: this.faker.lorem.words(6)
          },
          feature_1_link: {
            styles: {},
            text: this.faker.lorem.words(2),
            src: this.faker.internet.url
          },
          feature_2_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_2_description: {
            styles: {},
            text: this.faker.lorem.words(6)
          },
          feature_2_link: {
            styles: {},
            text: this.faker.lorem.words(2),
            src: this.faker.internet.url
          },
          feature_3_title: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          feature_3_description: {
            styles: {},
            text: this.faker.lorem.words(6)
          },
          feature_3_link: {
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
