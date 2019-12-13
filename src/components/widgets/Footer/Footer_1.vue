<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <footer class="fdb-block footer-small">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <!--TODO: Extend the text linke : &copy -->
                <TextEditable tag="p"
                               name="footer_copyright"
                               :partData="touchedData.footer_copyright"/>
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
            footer_copyright: {
              styles: {},
              text: this.faker.footer.copyright(),
            },
          }
        },
        require: false
      }
    }
  }
</script>
