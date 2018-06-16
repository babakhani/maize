<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">

      <section class="fdb-block">
        <div class="container">
          <div class="row text-center justify-content-sm-center no-gutters">
            <div class="col-12 col-sm-8 col-md-3 m-auto">
              <h3><strong>Feature 1</strong></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>

            <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
              <h3><strong>Feature 2</strong></h3>
              <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>

            <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
              <h3><strong>Feature 3</strong></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>

          <div class="row text-center justify-content-md-center pt-3 pt-md-5">
            <div class="col-12 col-sm-8 col-md-3 m-auto">
              <h3><strong>Feature 4</strong></h3>
              <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
            </div>

            <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
              <h3><strong>Feature 5</strong></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                One day.</p>
            </div>

            <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
              <h3><strong>Feature 6</strong></h3>
              <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question
                Marks</p>
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
            <div class="row text-center justify-content-sm-center no-gutters">
              <div class="col-12 col-sm-8 col-md-3 m-auto">
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

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
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

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
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
            </div>

            <div class="row text-center justify-content-md-center pt-3 pt-md-5">
              <div class="col-12 col-sm-8 col-md-3 m-auto">
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

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
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

              <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
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
