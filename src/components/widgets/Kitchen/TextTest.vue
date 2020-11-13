<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <h1> Button Editable text </h1>
      <ButtonEditable
        cssClass="btn btn-danger btn-sm"
        name="sample_text"
        :partData="touchedData.sample_text"/>
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'TextTest',
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
          sample_text: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(2),
            src: this.faker.internet.url
          }
        }
      },
      require: false
    }
  }
}
</script>
