<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-4 text-center">
              <TextEditable tag="p"
                            name="description"
                            cssClass="lead"
                            :partData="touchedData.description"/>
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
  name: 'CallToAction_17',
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
            text: this.faker.lorem.words(5),
            src: this.faker.internet.url(),
          },
          content_icon_1: {
            styles: {
              'font-size': '30px'
            },
            iconName: 'fab fa-github',
            href: this.faker.internet.url()
          },
          content_icon_2: {
            styles: {
              'font-size': '30px'
            },
            iconName: 'fab fa-instagram',
            href: this.faker.internet.url()
          },
          content_icon_3: {
            styles: {
              'font-size': '30px'
            },
            iconName: 'fab fa-twitter',
            href: this.faker.internet.url()
          },
          content_icon_4: {
            styles: {
              'font-size': '30px'
            },
            iconName: 'fab fa-google',
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
