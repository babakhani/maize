<template>
  <div>
      <WidgetToolbox />
      <BgEditable>
        <section class="mz-block">
          <div class="container align-items-center justify-content-center d-flex">
            <div class="row align-items-center text-left">
              <div class="col-12 col-md-6">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image"/>
              </div>
              <div class="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
                <TextEditable
                   tag="h1"
                   name="title"
                   :partData="touchedData.title"/>
                <TextEditable
                   tag="p"
                   name="description"
                   cssClass="text-h3 lead"
                   :partData="touchedData.description"/>
                <p class="mt-4">
                <TextEditable
                   tag="a"
                   cssClass="btn btn-primary px-3"
                   name="action_link"
                   :partData="touchedData.action_link"/>
                </p>
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
  name: 'CallToAction_6',
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
          title: {
            styles: {},
            text: this.faker.lorem.words(2),
            src: this.faker.url()
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(30),
            src: this.faker.url()
          },
          action_link: {
            styles: {
              'color': 'white'
            },
            text: this.faker.lorem.words(3),
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
