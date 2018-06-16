<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center pb-5">
            <div class="col-12 text-center">
              <h1>Froala Design Blocks</h1>
            </div>
          </div>

          <div class="row text-left align-items-center pt-5 pb-md-5">
            <div class="col-4 col-md-5">
              <img alt="image" class="img-fluid" src="/static/imgs/img_square_1.svg">
            </div>

            <div class="col-12 col-md-5 m-md-auto">
              <h2><strong>Feature One</strong></h2>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="https://www.froala.com">Learn More &gt;</a></p>
            </div>
          </div>

          <div class="row text-left align-items-center pt-5 pb-md-5">
            <div class="col-4 col-md-5 m-md-auto order-md-5">
              <img alt="image" class="img-fluid" src="/static/imgs/img_square_3.svg">
            </div>

            <div class="col-12 col-md-5">
              <h2><strong>Feature Two</strong></h2>
              <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p><a href="https://www.froala.com">Learn More &gt;</a></p>
            </div>
          </div>

          <div class="row text-left align-items-center pt-5">
            <div class="col-4 col-md-5">
              <img alt="image" class="img-fluid" src="/static/imgs/img_square_2.svg">
            </div>

            <div class="col-12 col-md-5 m-md-auto">
              <h2><strong>Feature Three</strong></h2>
              <p class="text-h3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around.</p>
              <p><a href="https://www.froala.com">Learn More &gt;</a></p>
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
            <div class="row justify-content-center pb-5">
              <div class="col-12 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
              </div>
            </div>

            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-4 col-md-5">
                <ImageEditable name="feature_image_1"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_1">
                </ImageEditable>
              </div>

              <div class="col-12 col-md-5 m-md-auto">
                <text-editable tag="h2"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               cssClass="text-h3"
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
            </div>

            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-4 col-md-5 m-md-auto order-md-5">
                <ImageEditable name="feature_image_2"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_2">
                </ImageEditable>
              </div>

              <div class="col-12 col-md-5">
                <text-editable tag="h2"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               cssClass="text-h3"
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

            <div class="row text-left align-items-center pt-5">
              <div class="col-4 col-md-5">
                <ImageEditable name="feature_image_3"
                               cssClass="img-fluid"
                               :partData="touchedData.feature_image_2">
                </ImageEditable>
              </div>

              <div class="col-12 col-md-5 m-md-auto">
                <text-editable tag="h2"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               cssClass="text-h3"
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
    name: 'Feature_22',
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
            feature_image_1: {
              styles: {},
              src: this.faker.img.icon()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(30),
            },
            feature_1_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.icon()
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(30),
            },
            feature_2_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.icon()
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(30),
            },
            feature_3_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
          }
        },
        require: false
      }
    }
  }
</script>
