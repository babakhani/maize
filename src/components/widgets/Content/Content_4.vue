<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="row mx-sm-5">
        <div class="col col-sm-10 col-md-8 text-left">
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
  name: 'Content_4',
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
          description: {
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
