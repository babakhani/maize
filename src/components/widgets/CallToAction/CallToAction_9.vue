<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-auto text-center my-5">
            <TextEditable 
               tag="button"
               cssClass="btn btn-outline-danger"
               name="action_link"
               :partData="touchedData.action_link"/>
          </div>
          <div class="col-auto mt-4 mt-sm-0">
            <TextEditable 
               tag="h2"
               name="description"
               cssClass="text-h2"
               :partData="touchedData.description"/>
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
  name: 'CallToAction_9',
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
            styles: {
              'min-width': '100px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          }
        }
      },
      require: false
    }
  }
}
</script>
