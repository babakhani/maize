<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <footer class="mz-block footer-small">
        <div class="row align-items-center px-2">
          <div class="col-12 col-md-8">
            <ul class="nav justify-content-center justify-content-md-start">
              <li class="nav-item">
                <TextEditable
                  tag="a"
                  cssClass="nav-link active"
                  name="footer_link_1"
                  :partData="touchedData.footer_link_1"/>
              </li>
              <li class="nav-item">
                <TextEditable
                  tag="a"
                  cssClass="nav-link"
                  name="footer_link_2"
                  :partData="touchedData.footer_link_2"/>
              </li>
              <li class="nav-item">
                <TextEditable
                  tag="a"
                  cssClass="nav-link"
                  name="footer_link_3"
                  :partData="touchedData.footer_link_3"/>
              </li>
              <li class="nav-item">
                <TextEditable
                  tag="a"
                  cssClass="nav-link"
                  name="footerlink_4"
                  :partData="touchedData.footer_link_4"/>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
            <nav class="navbar navbar-expand no-gutters justify-content-center justify-content-md-end">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <IconEditable
                    cssClass="nav-link p-1"
                    name="footer_copyright_icon"
                    :partData="touchedData.footer_copyright_icon"/>
                </li>
                <li class="nav-item">
                  <TextEditable
                    tag="a"
                    name="footer_copyright_text"
                    :partData="touchedData.footer_copyright_text"/>
                </li>
              </ul>
            </nav>
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
            styles: {
            }
          },
          footer_link_1: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_2: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_3: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_4: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_copyright_text: {
            styles: {},
            text: this.faker.footer.copyright()
          },
          footer_copyright_icon: {
            styles: {},
            iconName: 'far fa-copyright',
            href: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
