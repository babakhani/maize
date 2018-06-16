<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-left">
              <h1>Froala Design Blocks</h1>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text.</p>
            </div>
          </div>

          <div class="row text-left pt-5">
            <div class="col-12 col-sm-6 col-md-5">
              <img alt="image" class="img-fluid" src="/static/imgs/img_square_2.svg">
              <h3><strong>Feature One</strong></h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            </div>

            <div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0">
              <img alt="image" class="img-fluid" src="/static/imgs/img_square_4.svg">
              <h3><strong>Feature Two</strong></h3>
              <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
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
            <div class="row justify-content-center">
              <div class="col-12 text-left">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="main_description"
                               :partData="touchedData.main_description">
                </text-editable>
              </div>
            </div>

            <div class="row text-left pt-5">
              <div class="col-12 col-sm-6 col-md-5">
                <ImageEditable name="feature_image_1"
                               cssClass="img-fluid"
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

              <div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0">
                <ImageEditable name="feature_image_2"
                               cssClass="img-fluid"
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
    name: 'Feature_21',
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
            feature_image_1: {
              styles: {},
              src: this.faker.img.icon()
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
              src: this.faker.img.icon()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(7),
            },
          }
        },
        require: false
      }
    }
  }
</script>
