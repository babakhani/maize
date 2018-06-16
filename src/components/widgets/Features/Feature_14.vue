<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode"> <h1>Demo Mode {{$options.name}}</h1> </div> <div v-else class="widget-block">
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
            <div class="row text-right align-items-center">
              <div class="col-7 col-md-4 m-auto">
                <ImageEditable name="main_image"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.main_image">
                </ImageEditable>
              </div>

              <div class="col-12 col-md-7 col-lg-5 m-auto text-left pt-5 pt-md-0">
                <div class="row pb-lg-5">
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

                <div class="row pt-4 pt-md-5 pb-lg-5">
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


                <div class="row pt-4 pt-md-5">
                  <div class="col-3">
                    <ImageEditable name="feature_image_3"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_3">
                    </ImageEditable>
                  </div>
                  <div class="col-9">
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
    name: 'Feature_14',
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
