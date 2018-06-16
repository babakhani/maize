<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">

      <section class="fdb-block">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <h1>Features</h1>
            </div>
          </div>
          <div class="row text-left mt-5">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature One</strong></h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Two</strong></h3>
                  <p>Separated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Three</strong></h3>
                  <p>A small river named Duden flows by their place and supplies it</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Four</strong></h3>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-left pt-3 pt-lg-5">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Five</strong></h3>
                  <p>On her way she met a copy. The copy warned the Little Blind Text.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Six</strong></h3>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Seven</strong></h3>
                  <p>Duden flows by their place far far away, behind the word mountains.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Eight</strong></h3>
                  <p>Separated they live in Bookmarksgrove right at the coast</p>
                </div>
              </div>
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
            <div class="row text-center">
              <div class="col-12">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
              </div>
            </div>
            <div class="row text-left mt-5">
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_1"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_1">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_2"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_2">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_2_title"
                                   :partData="touchedData.feature_2_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_2_description"
                                   :partData="touchedData.feature_2_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_3"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_3">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_3_title"
                                   :partData="touchedData.feature_3_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_3_description"
                                   :partData="touchedData.feature_3_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_4"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_4">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_4_title"
                                   :partData="touchedData.feature_4_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_4_description"
                                   :partData="touchedData.feature_4_description">
                    </text-editable>
                  </div>
                </div>
              </div>
            </div>

            <div class="row text-left pt-3 pt-lg-5">
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_5"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_5">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_5_title"
                                   :partData="touchedData.feature_5_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_5_description"
                                   :partData="touchedData.feature_5_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_6"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_6">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_6_title"
                                   :partData="touchedData.feature_6_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_6_description"
                                   :partData="touchedData.feature_6_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_7"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_7">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_7_title"
                                   :partData="touchedData.feature_7_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_7_description"
                                   :partData="touchedData.feature_7_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                <div class="row">
                  <div class="col-3">
                    <ImageEditable name="feature_image_8"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_8">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
                    <text-editable tag="h3"
                                   name="feature_8_title"
                                   :partData="touchedData.feature_8_title">
                    </text-editable>
                    <br/>
                    <text-editable tag="p"
                                   name="feature_8_description"
                                   :partData="touchedData.feature_8_description">
                    </text-editable>
                  </div>
                </div>
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
    name: 'Feature_12',
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
            feature_image_4: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_5: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_5_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_5_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_6: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_6_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_6_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_7: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_7_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_7_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
            feature_image_8: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_8_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_8_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            }
          }
        },
        require: false
      }
    }
  }
</script>
