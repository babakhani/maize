<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-left">
              <h1>Froala Design Blocks</h1>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

              <img alt="image" class="img-fluid mt-5" src="/static/imgs/img_very_wide.svg">
            </div>
          </div>

          <div class="row text-left pt-5">
            <div class="col-12 col-md-6">
              <h3><strong>Feature One</strong></h3>

              <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>

              <p><a href="/">Learn More &gt;</a></p>
            </div>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <h3><strong>Feature Two</strong></h3>

              <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin.</p>

              <p><a href="/">Learn More &gt;</a></p>
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

                <ImageEditable name="main_image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.main_image">
                </ImageEditable>
              </div>
            </div>

            <div class="row text-left pt-5">
              <div class="col-12 col-md-6">
                <text-editable tag="h3"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description">
                </text-editable>

                <p>
                  <text-editable tag="a"
                                 name="feature_1_link"
                                 :partData="touchedData.feature_1_link">
                  </text-editable>
                </p>
              </div>
              <div class="col-12 col-md-6 pt-4 pt-md-0">
                <text-editable tag="h3"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description">
                </text-editable>
                <p>
                  <text-editable tag="a"
                                 name="feature_2_link"
                                 :partData="touchedData.feature_2_link">
                  </text-editable>
                </p>
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
    name: 'Feature_20',
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
            main_image: {
              styles: {},
              src: this.faker.img.wide()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(50),
            },
            feature_1_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(50),
            },
            feature_2_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
