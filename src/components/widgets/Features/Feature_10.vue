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
          <div class="row text-center justify-content-center mt-5">
            <div class="col-12 col-sm-6 col-lg-3">
              <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
              <h3><strong>Feature One</strong></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>

            <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
              <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
              <h3><strong>Feature Two</strong></h3>
              <p>Separated they live in Bookmarksgrove right at the coast</p>
            </div>

            <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
              <h3><strong>Feature Three</strong></h3>
              <p>A small river named Duden flows by their place and supplies it</p>
            </div>

            <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
              <h3><strong>Feature Four</strong></h3>
              <p>Duden flows by their place far far away, behind the word mountains.</p>
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

            <div class="row text-center justify-content-center mt-5">
              <div class="col-12 col-sm-6 col-lg-3">
                <ImageEditable name="feature_image_1"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_1">
                </ImageEditable>
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

              <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                <ImageEditable name="feature_image_2"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_2">
                </ImageEditable>
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

              <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <ImageEditable name="feature_image_3"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_3">
                </ImageEditable>
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

              <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <ImageEditable name="feature_image_4"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_4">
                </ImageEditable>
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
        </section>
      </BgEditable>
    </div>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Feature_10',
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
            }
          }
        },
        require: false
      }
    }
  }
</script>
