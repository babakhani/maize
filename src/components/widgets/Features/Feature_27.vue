<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center pb-xl-5">
            <div class="col-12 col-sm-11 text-center">
              <h1>Froala Design Blocks</h1>
              <img alt="image" class="img-fluid mt-5" src="/static/imgs/img_very_wide.svg">
            </div>
          </div>

          <div class="row text-left justify-content-center pt-5">
            <div class="col-12 col-md-6 col-lg-5 m-sm-auto">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature One</strong></h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0">
              <div class="row">
                <div class="col-3">
                  <img alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
                </div>
                <div class="col-9">
                  <h3><strong>Feature Two</strong></h3>
                  <p>Separated they live in Bookmarksgrove, right at the coast of the Semantics, a large language ocean.</p>
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
            <div class="row justify-content-center pb-xl-5">
              <div class="col-12 col-sm-11 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <ImageEditable name="main_image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.main_image">
                </ImageEditable>
              </div>
            </div>

            <div class="row text-left justify-content-center pt-5">
              <div class="col-12 col-md-6 col-lg-5 m-sm-auto">
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
              <div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0">
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
    name: 'Feature_27',
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
            main_image: {
              styles: {},
              src: this.faker.img.wide()
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
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
