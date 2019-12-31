<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="fdb-block footer-small">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-12 col-lg-4 text-lg-left">
            © 2018 Maize
          </div>

          <div class="col-12 col-lg-4 mt-4 mt-lg-0">
            <ImageEditable name="footer_image"
                           :partData="touchedData.footer_image"/>
          </div>

          <div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
            <ul class="nav justify-content-lg-end justify-content-center">
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="footer_link_1"
                              :partData="touchedData.footer_link_1"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="footer_link_2"
                              :partData="touchedData.footer_link_2"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="footer_link_3"
                              :partData="touchedData.footer_link_3"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Footer_10',
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
          // TODO: fix padding style
          footer_link_1: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_2: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_3: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_image: {
            styles: {
              height: '40px'
            },
            src: this.faker.img.logo()
          }
        }
      },
      require: false
    }
  }
}
</script>
