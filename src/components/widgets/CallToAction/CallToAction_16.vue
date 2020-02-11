<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-6 text-center">
            <h2>
              <TextEditable 
               tag="strong"
               name="description"
               :partData="touchedData.description"/>
            </h2>
            <p class="mt-5 mt-sm-4">
            <TextEditable 
               tag="button"
               cssClass="btn btn-outline-primary"
               name="action_link"
               :partData="touchedData.action_link"/>
            </p>
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
  name: 'CallToAction_16',
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
              'min-width': '120px'
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
