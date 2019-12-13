<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row text-center justify-content-sm-center no-gutters">
              <div class="col-12 col-sm-8 col-md-3 m-auto">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_1_title"
                                 :partData="touchedData.feature_1_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description"/>
              </div>

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_2_title"
                                 :partData="touchedData.feature_2_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description"/>
              </div>

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_3_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description"/>
              </div>
            </div>

            <div class="row text-center justify-content-md-center pt-3 pt-md-5">
              <div class="col-12 col-sm-8 col-md-3 m-auto">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_4_title"
                                 :partData="touchedData.feature_4_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_4_description"
                               :partData="touchedData.feature_4_description"/>
              </div>

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_5_title"
                                 :partData="touchedData.feature_5_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_5_description"
                               :partData="touchedData.feature_5_description"/>
              </div>

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                <h3>
                  <TextEditable tag="strong"
                                 name="feature_6_title"
                                 :partData="touchedData.feature_6_title"/>
                </h3>
                <TextEditable tag="p"
                               name="feature_6_description"
                               :partData="touchedData.feature_6_description"/>
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
    name: 'Feature_1',
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
            feature_1_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_4_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_5_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_5_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_6_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_6_description: {
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
