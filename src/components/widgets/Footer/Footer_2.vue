<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <footer class="fdb-block footer-small bg-dark">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-8">
              <ul class="nav justify-content-center justify-content-md-start">
                <li class="nav-item">
                  <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Terms</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">About</a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
              &copy; 2017 Froala. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div v-else
         class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <footer class="fdb-block footer-small bg-dark">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-8">
                <ul class="nav justify-content-center justify-content-md-start">
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link active"
                                   name="footer_link_1"
                                   :partData="touchedData.footer_link_1">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="footer_link_2"
                                   :partData="touchedData.footer_link_2">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="footer_link_3"
                                   :partData="touchedData.footer_link_3">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="footerlink_4"
                                   :partData="touchedData.footer_link_4">

                    </text-editable>
                  </li>
                </ul>
              </div>

              <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
                <!--&copy; 2017 Froala. All Rights Reserved-->
                <!--TODO: Extend the text linke : &copy -->
                <text-editable tag="span"
                               name="footer_copyright"
                               :partData="touchedData.footer_copyright">
                </text-editable>
              </div>
            </div>
          </div>
        </footer>
      </BgEditable>
    </div>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer_2',
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
            },
            footer_link_4: {
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
