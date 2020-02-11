<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-auto">
            <TextEditable 
               tag="h2"
               name="description"
               cssClass="text-h2"
               :partData="touchedData.description"/>
          </div>
          <div class="col-auto mt-4 mt-sm-0">
            <TextEditable 
               tag="a"
               cssClass="btn btn-primary text-white"
               name="action_link"
               :partData="touchedData.action_link"/>
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
  name: 'CallToAction_11',
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
            text: this.faker.lorem.words(8),
            src: this.faker.internet.url(),
          },
          action_link: {
            styles: {},
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
