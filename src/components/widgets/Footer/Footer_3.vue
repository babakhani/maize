<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <footer class="fdb-block footer-small">
          <div class="container">
            <div class="row text-center align-items-center">
              <div class="col-12 col-md-8">
                <ul class="nav justify-content-center justify-content-md-start align-items-center">
                  <li class="nav-item">
                    <a class="nav-link active"
                       href="/">
                      <ImageEditable name="footer_image"
                                     :partData="touchedData.footer_image"/>
                    </a>
                  </li>
                  <li class="w-100 d-block d-sm-none"></li>
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

              <div class="col-12 col-md-4 mt-4 mt-md-0 text-md-right">
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
            },
            //TODO: fix padding style
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
            }
          }
        },
        require: false
      }
    }
  }
</script>
