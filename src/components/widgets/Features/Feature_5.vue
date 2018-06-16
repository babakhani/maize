<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <h1>Design Blocks</h1>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

              <div class="row pt-4 pt-xl-5">
                <div class="col-12 col-md-5">
                  <h4><strong>Feature One</strong></h4>
                  <p>A small river named Duden flows</p>
                </div>
                <div class="col-12 col-md-5 m-auto pt-3 pt-md-0">
                  <h4><strong>Feature Two</strong></h4>
                  <p>Separated they live in Bookmarksgrove</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">
              <img alt="image" class="img-fluid" src="/static/imgs/colors_wide_1.jpg">
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
            <div class="row align-items-center">
              <div class="col-12 col-lg-6 col-xl-5">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               name="mainDescription"
                               cssClass="text-h3"
                               :partData="touchedData.mainDescription">
                </text-editable>
                <div class="row pt-4 pt-xl-5">
                  <div class="col-12 col-md-5">
                    <text-editable tag="h4"
                                   name="feature_1_title"
                                   :partData="touchedData.feature_1_title">
                    </text-editable>
                    <text-editable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description">
                    </text-editable>
                  </div>
                  <div class="col-12 col-md-5 m-auto pt-3 pt-md-0">
                    <text-editable tag="h4"
                                   name="feature_2title"
                                   :partData="touchedData.feature_2_title">
                    </text-editable>
                    <text-editable tag="p"
                                   name="feature_2_description"
                                   :partData="touchedData.feature_2_description">
                    </text-editable>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">


                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image">
                </ImageEditable>
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
    name: 'Feature_5',
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
              text: this.faker.lorem.words(2),
            },
            mainDescription: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(6),
            },
            image: {
              styles: {},
              src: this.faker.img.big()
            }
          }
        },
        require: false
      }
    }
  }
</script>
