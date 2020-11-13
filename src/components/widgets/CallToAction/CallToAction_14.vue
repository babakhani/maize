<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block mz-viewport" style="background-image: url();">
      <div class="container align-items-center justify-content-center d-flex">
        <div class="row align-items-center text-left">
          <div class="col-12 col-sm-10 col-md-8 col-lg-8">
            <TextEditable
               tag="h1"
               name="mainTitle"
               :partData="touchedData.mainTitle"/>
            <TextEditable
               tag="p"
               name="description"
               cssClass="lead text-muted"
               :partData="touchedData.description"/>
            <div class="mt-5 d-flex">
            <TextEditable
               tag="button"
               cssClass="btn btn-outline-dark "
               name="action_link_1"
               :partData="touchedData.action_link_1"/>
            <TextEditable
               tag="button"
               cssClass="btn btn-dark ml-2"
               name="action_link_2"
               :partData="touchedData.action_link_2"/>
            </div>
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
  name: 'CallToAction_14',
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
            text: this.faker.lorem.words(8)
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(15),
            src: this.faker.url()
          },
          action_link_1: {
            styles: {
              'min-width': '120px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          action_link_2: {
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
