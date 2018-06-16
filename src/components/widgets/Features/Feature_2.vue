<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">

      <section class="fdb-block">
        <div class="container">
          <div class="row text-left justify-content-sm-center">
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
              <h3><strong>Feature 1</strong></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
              <h3><strong>Feature 2</strong></h3>
              <p>Separated they live in Bookmarksgrove right at the coast of the.</p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
              <h3><strong>Feature 3</strong></h3>
              <p>A small river named Duden flows by their place and supplies it with.</p>
            </div>

            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
              <h3><strong>Feature 4</strong></h3>
              <p>But nothing the copy said could convince her and so it didn’t take long</p>
            </div>
          </div>

          <div class="row text-left justify-content-sm-center pt-3 pt-lg-5">
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
              <h3><strong>Feature 5</strong></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
              <h3><strong>Feature 6</strong></h3>
              <p>Separated they live in Bookmarksgrove right at the coast of the.</p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
              <h3><strong>Feature 7</strong></h3>
              <p>A small river named Duden flows by their place and supplies it with.</p>
            </div>

            <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
              <h3><strong>Feature 8</strong></h3>
              <p>But nothing the copy said could convince her and so it didn’t take long</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    <div v-else
         class="widget-block">
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
            <div class="row text-left justify-content-sm-center">
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_1_title"
                                 :partData="touchedData.feature_1_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_2_title"
                                 :partData="touchedData.feature_2_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_3_title"
                                 :partData="touchedData.feature_3_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description">
                </text-editable>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_4_title"
                                 :partData="touchedData.feature_4_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_4_description"
                               :partData="touchedData.feature_4_description">
                </text-editable>
              </div>
            </div>

            <div class="row text-left justify-content-sm-center pt-3 pt-lg-5">
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_5_title"
                                 :partData="touchedData.feature_5_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_5_description"
                               :partData="touchedData.feature_5_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_6_title"
                                 :partData="touchedData.feature_6_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_6_description"
                               :partData="touchedData.feature_6_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_7_title"
                                 :partData="touchedData.feature_7_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_7_description"
                               :partData="touchedData.feature_7_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                <h3>
                  <text-editable tag="strong"
                                 name="feature_8_title"
                                 :partData="touchedData.feature_8_title">
                  </text-editable>
                </h3>
                <text-editable tag="p"
                               name="feature_8_description"
                               :partData="touchedData.feature_8_description">
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
    name: 'Feature_2',
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
            },
            feature_5_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_5_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_6_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_6_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_7_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_7_description: {
              styles: {},
              text: this.faker.lorem.words(8),
            },
            feature_8_title: {
              styles: {},
              text: this.faker.finance.transactionType(),
            },
            feature_8_description: {
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
