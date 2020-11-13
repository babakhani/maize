<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
              </div>
            </div>
            <div class="row text-left justify-content-center pt-5">
              <div class="col-12 col-md-6 col-lg-5 m-auto">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_1_title"
                                 :partData="touchedData.feature_1_title"/>
                </h3>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
              </div>
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_2_title"
                                 :partData="touchedData.feature_2_title"/>
                </h3>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
              </div>
            </div>

            <div class="row text-left justify-content-center pt-lg-4">
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_3_title"/>
                </h3>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description"/>
              </div>
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_4_title"/>
                </h3>
                <TextEditable tag="p"
                               cssClass="text-h3"
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
  name: 'Feature_3',
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
          feature_1_title: {
            styles: {},
            text: this.faker.finance.transactionType()
          },
          feature_1_description: {
            styles: {},
            text: this.faker.lorem.words(8)
          },
          feature_2_title: {
            styles: {},
            text: this.faker.finance.transactionType()
          },
          feature_2_description: {
            styles: {},
            text: this.faker.lorem.words(8)
          },
          feature_3_title: {
            styles: {},
            text: this.faker.finance.transactionType()
          },
          feature_3_description: {
            styles: {},
            text: this.faker.lorem.words(8)
          },
          feature_4_title: {
            styles: {},
            text: this.faker.finance.transactionType()
          },
          feature_4_description: {
            styles: {},
            text: this.faker.lorem.words(8)
          }
        }
      },
      require: false
    }
  }
}
</script>
