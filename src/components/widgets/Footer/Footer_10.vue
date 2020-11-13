<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block footer-small">
      <div class="row text-center align-items-center">
        <div class="col-12">
          <ImageEditable
             name="footer_image"
             :partData="touchedData.footer_image"/>
        </div>
      </div>
        <div class="row text-center align-items-center mt-3">
          <div class="col-12">
            <nav class="navbar navbar-expand no-gutters justify-content-center">
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
            styles: {
              'background-color': '#1c1c1c'
            }
          },
          // TODO: fix padding style
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
