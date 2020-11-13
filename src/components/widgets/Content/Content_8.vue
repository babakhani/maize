<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <br>
                <TextEditable tag="h2"
                               name="secondTitle"
                               :partData="touchedData.secondTitle"/>
                <br>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="description"
                               :partData="touchedData.description"/>
                <br>
                <ImageEditable name="image"
                               cssClass="img-fluid mt-5"
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
  name: 'Content_8',
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
          secondTitle: {
            styles: {},
            text: this.faker.lorem.words(5),
            src: this.faker.url()
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(100),
            src: this.faker.url()
          },
          image: {
            styles: {},
            src: this.faker.img.wide()
          }
        }
      },
      require: false
    }
  }
}
</script>
