<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 col-xl-6 text-center">
            <ImageEditable name="image"
                           class="text-center"
                           cssClass="mz-icon mb-3"
                           :partData="touchedData.image"/>
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="lead"
                          :partData="touchedData.description"/>

            <button type="submit" class="btn btn-primary h3 mt-5 d-block mx-auto">
              <TextEditable tag="a"
                            name="content_btn"
                            :partData="touchedData.content_btn"/>
            </button>
            <TextEditable tag="p"
                          name="details"
                          cssClass="text-muted"
                          :partData="touchedData.details"/>
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
  name: 'Content_26',
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
            text: this.faker.lorem.words(25),
            src: this.faker.url()
          },
          content_btn: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          details: {
            styles: {},
            text: this.faker.lorem.words(3),
            src: this.faker.url()
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
