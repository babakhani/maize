<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="row mx-sm-5">
        <div class="col text-left">
          <TextEditable
             tag="h2"
             name="mainTitle"
             :partData="touchedData.mainTitle"/>
          <TextEditable
             tag="p"
             name="description1"
             :partData="touchedData.description1"/>

          <TextEditable
             tag="p"
             name="description2"
             :partData="touchedData.description2"/>
        </div>
      </div>
    </section>
    </BgEditable>
  </div>
</template>

<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Content_6',
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
          description1: {
            styles: {},
            text: this.faker.lorem.words(100),
            src: this.faker.url()
          },
          description2: {
            styles: {},
            text: this.faker.lorem.words(100),
            src: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
