<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block footer-small">
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
    </footer>
    </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer_1',
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
