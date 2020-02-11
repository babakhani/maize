<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container justify-content-center align-items-center d-flex">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-md-8">
            <ImageEditable name="logo"
                           class="mz-icon"
                           :partData="touchedData.logo"/>
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="lead text-muted"
                          :partData="touchedData.description"/>
            <div class="mt-5">
              <TextEditable tag="button"
                            cssClass="btn btn-primary"
                            name="action_link"
                            :partData="touchedData.action_link"/>
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
  name: 'CallToAction_18',
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
            text: this.faker.lorem.words(18)
          },
          action_link: {
            styles: {
              'min-width': '120px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          logo: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          }
        }
      },
      require: false
    }
  }
}
</script>
