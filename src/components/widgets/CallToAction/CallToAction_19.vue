<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container align-items-end justify-content-center d-flex">
        <div class="row align-items-top text-left">
          <div class="col-12 col-md-6 col-lg-5">
            <p class="mb-4 mt-4">
            <ImageEditable name="logo"
                           class="mz-icon"
                           :partData="touchedData.logo"/>
            </p>
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="lead text-muted"
                          :partData="touchedData.description"/>
            <div class="mt-4">
              <TextEditable tag="button"
                            cssClass="btn btn-primary"
                            name="action_link"
                            :partData="touchedData.action_link"/>
            </div>
          </div>

          <div class="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5">
            <ImageEditable name="image"
                           cssClass="img-fluid rounded-0"
                           :partData="touchedData.image"/>
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
  name: 'CallToAction_19',
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
            text: this.faker.lorem.words(32)
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
            src: this.faker.img.big()
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
