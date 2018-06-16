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
        <section class="fdb-block">
          <div class="container">
            <div class="row align-items-center pb-xl-5">
              <div class="col-12 col-md-7 col-xl-5">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="main_description"
                               :partData="touchedData.main_description">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0">
                <ImageEditable name="main_image"
                               cssClass="img-fluid"
                               :partData="touchedData.main_image">
                </ImageEditable>
              </div>
            </div>
            <div class="row pt-5">
              <div class="col-12 col-sm-6 col-md-3">
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
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0">
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
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
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
              <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
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
    name: 'Feature_26',
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
              text: this.faker.lorem.words(3)
            },
            main_description: {
              styles: {},
              text: this.faker.lorem.words(25),
            },
            main_image: {
              styles: {},
              src: this.faker.img.icon()
            },
            feature_1_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_1_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_2_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_2_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_3_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_3_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            feature_4_title: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            feature_4_description: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
          }
        },
        require: false
      }
    }
  }
</script>
