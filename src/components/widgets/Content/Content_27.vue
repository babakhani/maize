<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="col-fill-right d-none d-lg-none d-xl-block" style="background-image: url();">
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-5 text-center">
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="lead"
                          :partData="touchedData.description"/>
            <button type="submit" class="btn btn-primary mt-4 mb-5  d-block mx-auto">
              <TextEditable tag="a"
                            name="content_btn"
                            :partData="touchedData.content_btn"/>
            </button>

            <TextEditable tag="p"
                          name="details"
                          cssClass="text-muted"
                          :partData="touchedData.details"/>

            <div class="col-12">
              <div class="mx-2 d-inline-flex">
                <IconEditable
                  name="content_icon_1"
                  :partData="touchedData.content_icon_1"/>
              </div>
              <div class="mx-2 d-inline-flex">
                <IconEditable
                  name="content_icon_2"
                  :partData="touchedData.content_icon_2"/>
              </div>
              <div class="mx-2 d-inline-flex">
                <IconEditable
                  name="content_icon_3"
                  :partData="touchedData.content_icon_3"/>
              </div>
              <div class="mx-2 d-inline-flex">
                <IconEditable
                  name="content_icon_4"
                  :partData="touchedData.content_icon_4"/>
              </div>
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
  name: 'Content_27',
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
          description: {
            styles: {},
            text: this.faker.lorem.words(25),
            src: this.faker.url()
          },
          details: {
            styles: {},
            text: this.faker.lorem.words(4),
            src: this.faker.url()
          },
          content_btn: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          image: {
            styles: {},
            src: this.faker.img.big()
          },
          content_icon_1: {
            styles: {
              'font-size': '25px'
            },
            iconName: 'fab fa-github',
            href: this.faker.url()
          },
          content_icon_2: {
            styles: {
              'font-size': '25px'
            },
            iconName: 'fab fa-instagram',
            href: this.faker.url()
          },
          content_icon_3: {
            styles: {
              'font-size': '25px'
            },
            iconName: 'fab fa-twitter',
            href: this.faker.url()
          },
          content_icon_4: {
            styles: {
              'font-size': '25px'
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
