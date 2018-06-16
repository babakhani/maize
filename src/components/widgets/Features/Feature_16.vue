<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block pb-md-0">
        <div class="container">
          <div class="row justify-content-center pb-xl-5">
            <div class="col-12 col-md-8 text-center">
              <h1>Froala Design Blocks</h1>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>

          <div class="row text-right align-items-center-lg align-items-end pt-5">
            <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto">
              <img alt="image" class="img-fluid br-b-0" src="/static/imgs/img_tall.png">
            </div>

            <div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0">
              <h3><strong>Feature One</strong></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p>

              <h3 class="mt-4 mt-xl-5"><strong>Feature Two</strong></h3>
              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p>

              <h3 class="mt-4 mt-xl-5"><strong>Feature Three</strong></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
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
        <section class="fdb-block pb-md-0">
          <div class="container">
            <div class="row justify-content-center pb-xl-5">
              <div class="col-12 col-md-8 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               cssClass="text-h3 pb-xl-4"
                               name="main_description"
                               :partData="touchedData.main_description">
                </text-editable>
              </div>
            </div>

            <div class="row text-right align-items-center-lg align-items-end pt-5">
              <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto">
                <ImageEditable name="main_image"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.main_image">
                </ImageEditable>
              </div>

              <div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0">
                <text-editable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description">
                </text-editable>
                <br/>
                <text-editable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description">
                </text-editable>
                <br/>
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
        </section>
      </BgEditable>
    </div>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Feature_16',
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
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            main_image: {
              styles: {},
              src: this.faker.img.tall()
            }
          }
        },
        require: false
      }
    }
  }
</script>
