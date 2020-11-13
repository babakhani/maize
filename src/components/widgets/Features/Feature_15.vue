<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row text-right align-items-center">
              <div class="col-12 col-lg-6 col-xl-5 m-lg-auto text-left">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               cssClass="text-h3 pb-xl-4"
                               name="main_description"
                               :partData="touchedData.main_description"/>

                <div class="row pt-5">
                  <div class="col-3">
                    <ImageEditable name="feature_image_1"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_1"/>
                  </div>
                  <div class="col-9">
                    <TextEditable tag="p"
                                   name="feature_1_description"
                                   :partData="touchedData.feature_1_description"/>
                  </div>
                </div>

                <div class="row pt-5">
                  <div class="col-9 text-right">
                    <TextEditable tag="p"
                                   name="feature_2_description"
                                   :partData="touchedData.feature_2_description"/>
                  </div>

                  <div class="col-3">
                    <ImageEditable name="feature_image_2"
                                   cssClass="img-fluid"
                                   :partData="touchedData.feature_image_2"/>
                  </div>
                </div>
              </div>
              <div class="col-7 col-sm-4 m-auto pt-5 pt-md-0">
                <ImageEditable name="main_image"
                               cssClass="img-fluid br-b-0"
                               :partData="touchedData.main_image"/>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Feature_15',
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
            text: this.faker.lorem.words(1)
          },
          main_description: {
            styles: {},
            text: this.faker.lorem.words(25)
          },
          feature_image_1: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_1_description: {
            styles: {},
            text: this.faker.lorem.words(7)
          },
          feature_image_2: {
            styles: {},
            src: this.faker.img.rounded()
          },
          feature_2_description: {
            styles: {},
            text: this.faker.lorem.words(7)
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
