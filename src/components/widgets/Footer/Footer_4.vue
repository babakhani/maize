<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block footer-small">
      <div class="row text-center align-items-center px-2">
        <div class="col-12 col-sm-6 text-sm-left px-3">
          <ImageEditable
             name="footer_image"
             :partData="touchedData.footer_image"/>
        </div>
        <div class="col-12 col-sm-6">
          <nav class="navbar navbar-expand no-gutters px-3 justify-content-center
            justify-content-sm-end">
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
    name: 'Footer_4',
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
            footer_image: {
              styles: {
                height: '40px',
              },
              src: this.faker.img.logo()
            },
            footer_copyright_text: {
              styles: {},
              text: this.faker.footer.copyright(),
            },
            footer_copyright_icon: {
              styles: {},
              iconName: 'far fa-copyright',
              href: this.faker.internet.url()
            }
          }
        },
        require: false
      }
    }
  }
</script>
