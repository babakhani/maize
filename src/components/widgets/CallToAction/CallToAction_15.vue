<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center text-left">
          <div class="col-12 col-md-8">
            <TextEditable
              tag="h1"
              name="title"
              :partData="touchedData.title"/>
            <TextEditable
              tag="p"
              name="description"
              cssClass="lead"
              :partData="touchedData.description"/>
          </div>
          <div class="col-12 col-md-3 ml-auto text-left text-md-right">
            <p>
            <TextEditable
              tag="a"
              cssClass="btn btn-primary"
              name="action_link"
              :partData="touchedData.action_link"/>
            </p>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-6 offset-3">
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
  name: 'CallToAction_15',
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
            text: this.faker.lorem.words(3),
            src: this.faker.internet.url()
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(25),
            src: this.faker.internet.url()
          },
          action_link: {
            styles: {
              'color': 'white'
            },
            text: this.faker.lorem.words(2),
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
