<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="row mx-sm-5 justify-content-center">
        <TextEditable
           tag="h1"
           name="mainTitle"
           :partData="touchedData.mainTitle"/>
      </div>
    </section>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Content_1',
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
          }
        }
      },
      require: false
    }
  }
}
</script>
