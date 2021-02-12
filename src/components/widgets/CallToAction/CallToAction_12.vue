<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <TextEditable
              tag="h1"
              name="mainTitle"
              :partData="touchedData.mainTitle"/>
            <div>
              <TextEditable
                tag="p"
                name="description_1"
                cssClass="text-h2"
                :partData="touchedData.description_1"/>
            </div>
          </div>
        </div>

        <div class="row align-items-center pt-2 pt-lg-5">
          <div class="col-12 col-md-8 col-lg-7">
            <TextEditable
              tag="h2"
              name="subTitle"
              :partData="touchedData.subTitle"/>
            <TextEditable
              tag="p"
              name="description_2"
              cssClass="lead"
              :partData="touchedData.description_2"/>
            <p class="mt-4">
            <TextEditable
              tag="a"
              cssClass="btn btn-primary px-3"
              name="action_link"
              :partData="touchedData.action_link"/>
            </p>
          </div>

          <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">
            <ImageEditable
              name="image"
              cssClass="img-fluid"
              :partData="touchedData.image"/>
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
  name: 'CallToAction_12',
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
            src: this.faker.url()
          },
          subTitle: {
            styles: {},
            text: this.faker.lorem.words(2),
            src: this.faker.url()
          },
          description_1: {
            styles: {},
            text: this.faker.lorem.words(8),
            src: this.faker.url()
          },
          description_2: {
            styles: {},
            text: this.faker.lorem.words(30),
            src: this.faker.url()
          },
          action_link: {
            styles: {
              'color': 'white',
              'min-width': '100px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
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
