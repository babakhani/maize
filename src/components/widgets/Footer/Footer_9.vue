<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="fdb-block footer-small bg-dark">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col">
            <ul class="nav justify-content-center">
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
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="footer_link_4"
                              :partData="touchedData.footer_link_4"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="footer_link_5"
                              :partData="touchedData.footer_link_5"/>
              </li>
            </ul>

            <p class="h5 mt-5">© 2013-2018 Maize</p>
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
  name: 'Footer_9',
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
          footer_link_4: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_5: {
            styles: {
              padding: '1em',
              'line-height': '2em'
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
