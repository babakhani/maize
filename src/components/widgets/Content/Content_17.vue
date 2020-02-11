<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0">
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
          </div>

          <div class="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
            <ImageEditable name="image"
                           class="text-left"
                           cssClass="mz-icon mb-3"
                           :partData="touchedData.image"/>
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3 text-muted"
                          :partData="touchedData.description"/>
            <p class="mt-4">
            <button type="submit" class="btn btn-primary">
              <TextEditable tag="a"
                            name="contact_btn"
                            :partData="touchedData.contact_btn_1"/>
            </button>
            <button type="submit" class="btn btn-primary ml-3">
              <TextEditable tag="a"
                            name="contact_btn"
                            :partData="touchedData.contact_btn_2"/>
            </button>
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
  name: 'Content_17',
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
            text: this.faker.lorem.words(3),
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(30),
            src: this.faker.internet.url(),
          },
          contact_btn_1: {
            styles: {},
            text: "Download",
          },
          contact_btn_2: {
            styles: {},
            text: "Register",
          },
          image: {
            styles: {},
            src: this.faker.img.big()
          },
          imageTall: {
            styles: {},
            src: this.faker.img.tall()
          }
        }
      },
      require: false
    }
  }
}
</script>
