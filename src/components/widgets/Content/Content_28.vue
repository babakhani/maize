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
            <div>
              <TextEditable tag="p"
                            name="description"
                            cssClass="lead text-muted"
                            :partData="touchedData.description"/>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6">
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
  name: 'Content_28',
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
          description: {
            styles: {},
            text: this.faker.lorem.words(6),
            src: this.faker.internet.url(),
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
