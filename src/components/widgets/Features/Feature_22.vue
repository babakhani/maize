<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div class="widget-block">
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
