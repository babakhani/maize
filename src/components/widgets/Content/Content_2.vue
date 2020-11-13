<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="row mx-sm-5 justify-content-center">
        <div class="col text-center">
          <TextEditable
             tag="h3"
             name="mainTitle"
             cssClass="text-h3"
             :partData="touchedData.mainTitle"/>
          <br/>
          <TextEditable
             tag="p"
             cssClass="text-h3"
             name="description"
             :partData="touchedData.description"/>
        </div>
      </div>
    </section>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Content_2',
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
          description: {
            styles: {},
            text: this.faker.lorem.words(100),
            src: this.faker.url()
          },
          secondTitle: {
            styles: {},
            text: this.faker.lorem.words(30),
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
