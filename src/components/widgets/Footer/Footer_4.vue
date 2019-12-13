<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <footer class="mz-block footer-small">
          <div class="container">
            <div class="row text-center align-items-center">
              <div class="col-12 col-sm-6 col-md-4 text-sm-left">
                <ImageEditable name="footer_image"
                               :partData="touchedData.footer_image"/>
              </div>

              <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
                <TextEditable tag="span"
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
            footer_copyright: {
              styles: {
                'line-height': '2em'
              },
              text: this.faker.footer.copyright(),
            },
            footer_image: {
              styles: {
                height: '40px',
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
