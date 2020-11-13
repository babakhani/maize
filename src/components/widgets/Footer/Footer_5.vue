<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block footer-small">
      <div class="row align-items-center text-center">
        <div class="col-12 col-lg-4 text-lg-left">
          <nav class="navbar navbar-expand no-gutters px-3 justify-content-center
          justify-content-md-start">
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
    </footer>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Footer_5',
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
            href: this.faker.url()
          },
          footer_link_2: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_3: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_image: {
            styles: {
              height: '40px'
            },
            src: this.faker.img.logo()
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
