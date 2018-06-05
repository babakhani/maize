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
        <section class="fdb-block pb-0">
          <div class="container">
            <div class="row text-lg-right align-items-center">
              <div class="col-12 col-sm-6 col-lg-3">
                <ImageEditable name="feature_image_1"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_1">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_1_title"
                               :partData="touchedData.feature_1_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_1_description"
                               :partData="touchedData.feature_1_description">
                </text-editable>


                <ImageEditable name="feature_image_2"
                               cssClass="fdb-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_2">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_2_title"
                               :partData="touchedData.feature_2_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_2_description"
                               :partData="touchedData.feature_2_description">
                </text-editable>

                <ImageEditable name="feature_image_3"
                               cssClass="fdb-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_3">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_3_title"
                               :partData="touchedData.feature_3_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_3_description"
                               :partData="touchedData.feature_3_description">
                </text-editable>
              </div>

              <div class="col-12 col-sm-6 col-lg-3 text-left pt-3 pt-sm-0 order-lg-12">
                <ImageEditable name="feature_image_4"
                               cssClass="fdb-icon"
                               :partData="touchedData.feature_image_4">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_4_title"
                               :partData="touchedData.feature_4_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_4_description"
                               :partData="touchedData.feature_4_description">
                </text-editable>


                <ImageEditable name="feature_image_5"
                               cssClass="fdb-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_5">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_5_title"
                               :partData="touchedData.feature_5_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_5_description"
                               :partData="touchedData.feature_5_description">
                </text-editable>

                <ImageEditable name="feature_image_6"
                               cssClass="fdb-icon mt-3 mt-xl-5"
                               :partData="touchedData.feature_image_6">
                </ImageEditable>
                <text-editable tag="h4"
                               name="feature_6_title"
                               :partData="touchedData.feature_6_title">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               name="feature_6_description"
                               :partData="touchedData.feature_6_description">
                </text-editable>
              </div>

              <div class="col-7 col-sm-4 col-lg-4 m-auto pt-5 pt-lg-0 order-lg-1">
                <ImageEditable name="feature_image_6"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.feature_image_6">
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
    name: 'Feature_13',
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
              src: this.faker.img.tall()
            },
            feature_6_title: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            feature_6_description: {
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
