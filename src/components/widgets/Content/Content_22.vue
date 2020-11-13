<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-left align-items-center">
          <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-4">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
          </div>

          <div class="col-12 col-lg-7 offset-lg-1 pt-4 pt-lg-0">
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description_1"
                          cssClass="lead text-muted"
                          :partData="touchedData.description_1"/>

            <div class="row mt-5">
              <div class="col-12 col-sm-6">
            <TextEditable tag="h3"
                          name="title"
                          cssClass="font-weight-bold"
                          :partData="touchedData.title_1"/>
            <TextEditable tag="p"
                          name="description_2"
                          cssClass="text-h3 text-muted"
                          :partData="touchedData.description_2"/>
              </div>

              <div class="col-12 col-sm-6 pt-3 pt-sm-0">
            <TextEditable tag="h3"
                          name="title"
                          cssClass="font-weight-bold"
                          :partData="touchedData.title_2"/>
            <TextEditable tag="p"
                          name="description_3"
                          cssClass="text-h3 text-muted"
                          :partData="touchedData.description_3"/>
              </div>
            </div>
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
  name: 'Content_22',
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
          title_1: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          title_2: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
          description_1: {
            styles: {},
            text: this.faker.lorem.words(30),
            src: this.faker.url()
          },
          description_2: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
          },
          description_3: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
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
