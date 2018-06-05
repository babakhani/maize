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
            <div class="row">
              <div class="col text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
              </div>
            </div>
            <div class="row pt-4">
              <div class="col-6 col-md-3">
                <ImageEditable name="image1"
                               cssClass="img-fluid"
                               :partData="touchedData.image1">
                </ImageEditable>
              </div>
              <div class="col-6 col-md-3">
                <ImageEditable name="image2"
                               cssClass="img-fluid"
                               :partData="touchedData.image2">
                </ImageEditable>
              </div>
              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ImageEditable name="image3"
                               cssClass="img-fluid"
                               :partData="touchedData.image3">
                </ImageEditable>
              </div>
              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ImageEditable name="image4"
                               cssClass="img-fluid"
                               :partData="touchedData.image4">
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
    name: 'Content_11',
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
            image1: {
              styles: {},
              src: this.faker.img.big()
            },
            image2: {
              styles: {},
              src: this.faker.img.big()
            },
            image3: {
              styles: {},
              src: this.faker.img.big()
            },
            image4: {
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
