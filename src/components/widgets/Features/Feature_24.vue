<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row align-items-top">
            <div class="col-12 col-md-6 col-xl-4 m-auto">
              <h2>Learn more about the Froala Design Blocks you love</h2>
            </div>

            <div class="col-12 col-md-6 pt-5 pt-md-0">
              <div class="row justify-content-left">
                <div class="col-3 m-auto text-center">
                  <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
                  <p><a href="/">One &gt;</a></p>
                </div>
                <div class="col-3 m-auto text-center">
                  <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
                  <p><a href="/">Two &gt;</a></p>
                </div>
                <div class="col-3 m-auto text-center">
                  <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
                  <p><a href="/">Three &gt;</a></p>
                </div>
              </div>

              <div class="row justify-content-left mt-4 mt-xl-5">
                <div class="col-3 m-auto text-center">
                  <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
                  <p><a href="/">Four &gt;</a></p>
                </div>
                <div class="col-3 m-auto text-center">
                  <img alt="image" class="fdb-icon" src="/static/imgs/img_round.svg">
                  <p><a href="/">Five &gt;</a></p>
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
            <div class="row align-items-top">
              <div class="col-12 col-md-6 col-xl-4 m-auto">
                <text-editable tag="h2"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
              </div>

              <div class="col-12 col-md-6 pt-5 pt-md-0">
                <div class="row justify-content-left">
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_1"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_1">
                    </ImageEditable>
                    <p>
                      <text-editable tag="a"
                                     name="feature_link_1"
                                     :partData="touchedData.feature_link_1">
                      </text-editable>
                    </p>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_2"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_2">
                    </ImageEditable>
                    <text-editable tag="a"
                                   name="feature_link_2"
                                   :partData="touchedData.feature_link_2">
                    </text-editable>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_3"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_3">
                    </ImageEditable>
                    <text-editable tag="a"
                                   name="feature_link_3"
                                   :partData="touchedData.feature_link_3">
                    </text-editable>
                  </div>
                </div>

                <div class="row justify-content-left mt-4 mt-xl-5">
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_4"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_4">
                    </ImageEditable>
                    <text-editable tag="a"
                                   name="feature_link_4"
                                   :partData="touchedData.feature_link_4">
                    </text-editable>
                  </div>
                  <div class="col-3 m-auto text-center">
                    <ImageEditable name="feature_image_5"
                                   cssClass="fdb-icon"
                                   :partData="touchedData.feature_image_5">
                    </ImageEditable>
                    <text-editable tag="a"
                                   name="feature_link_5"
                                   :partData="touchedData.feature_link_5">
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
    name: 'Feature_24',
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
              text: this.faker.lorem.words(10)
            },
            feature_image_1: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_1: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_2: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_2: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_3: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_3: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_4: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_4: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            feature_image_5: {
              styles: {},
              src: this.faker.img.rounded()
            },
            feature_link_5: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
          }
        },
        require: false
      }
    }
  }
</script>
