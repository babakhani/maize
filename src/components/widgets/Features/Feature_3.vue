<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">

        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
              </div>
            </div>
            <div class="row text-left justify-content-center pt-5">
              <div class="col-12 col-md-6 col-lg-5 m-auto">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_1_title"
                                 :partData="touchedData.feature_1_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description">
                </text-editable>
              </div>
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_2_title"
                                 :partData="touchedData.feature_2_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description">
                </text-editable>
              </div>
            </div>

            <div class="row text-left justify-content-center pt-lg-4">
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_3_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description">
                </text-editable>
              </div>
              <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_4_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="feature_4_description"
                               :partData="touchedData.feature_4_description">
                </text-editable>
              </div>
            </div>
          </div>
        </section>

      </BgEditable>
    </div>
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
              text: this.faker.lorem.words(3),
            },
            feature_1_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_4_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            }
          }
        },
        require: false
      }
    }
  }
</script>
