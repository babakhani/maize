<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-12 col-lg-6 col-xl-5">
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3"
                          :partData="touchedData.description"/>

            <p>
            <TextEditable tag="span"
                          name="mainTitle"
                          :partData="touchedData.secondTitle"/>
            </p>
              <div class="col-12 pt-2">
                <div class="mr-3 d-inline-flex">
                  <IconEditable
                    name="content_icon_1"
                    :partData="touchedData.content_icon_1"/>
                </div>
                <div class="mr-3 d-inline-flex">
                  <IconEditable
                    name="content_icon_2"
                    :partData="touchedData.content_icon_2"/>
                </div>
                <div class="mr-3 d-inline-flex">
                  <IconEditable
                    name="content_icon_3"
                    :partData="touchedData.content_icon_3"/>
                </div>
                <div class="d-inline-flex">
                  <IconEditable
                    name="content_icon_4"
                    :partData="touchedData.content_icon_4"/>
                </div>
              </div>
          </div>
          <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
            <ImageEditable name="image"
                           cssClass="img-fluid"
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
  name: 'Content_18',
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
            text: this.faker.lorem.words(2)
          },
          secondTitle: {
            styles: {},
            text: this.faker.lorem.words(3)
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
          },
          image: {
            styles: {},
            src: this.faker.img.big()
          },
          content_icon_1: {
            styles: {
              'font-size': '35px'
            },
            iconName: 'fab fa-github',
            href: this.faker.url()
          },
          content_icon_2: {
            styles: {
              'font-size': '35px'
            },
            iconName: 'fab fa-instagram',
            href: this.faker.url()
          },
          content_icon_3: {
            styles: {
              'font-size': '35px'
            },
            iconName: 'fab fa-twitter',
            href: this.faker.url()
          },
          content_icon_4: {
            styles: {
              'font-size': '35px'
            },
            iconName: 'fab fa-google',
            href: this.faker.url()
          }

        }
      },
      require: false
    }
  }
}
</script>
