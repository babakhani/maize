<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="fdb-block footer-small">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-12 col-lg-2 text-lg-left">
            <ImageEditable name="footer_image"
                           :partData="touchedData.footer_image"/>
          </div>

          <div class="col mt-4 mt-lg-0 text-center">
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
          </div>

          <div class="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right ">

            <ul class="navbar-nav col-2 justify-content-end d-xs-none d-inline ">
              <li class="nav-item ml-3 d-inline-flex">

                <IconEditable
                  cssClass="nav-link"
                  name="footer_social_link_1"
                  :partData="touchedData.footer_social_link_1"/>
              </li>
              <li class="nav-item ml-3 d-inline-flex">
                <IconEditable
                  cssClass="nav-link"
                  name="footer_social_link_2"
                  :partData="touchedData.footer_social_link_2"/>
              </li>
              <li class="nav-item ml-3 d-inline-flex">
                <IconEditable
                  cssClass="nav-link"
                  name="footer_social_link_3"
                  :partData="touchedData.footer_social_link_3"/>
              </li>
              <li class="nav-item ml-3 d-inline-flex">
                <IconEditable
                  cssClass="nav-link"
                  name="footer_social_link_4"
                  :partData="touchedData.footer_social_link_4"/>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col text-center">
            © 2018 Maize. All Rights Reserved
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
  name: 'Footer_7',
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
          },

          footer_image: {
            styles: {
              height: '40px'
            },
            src: this.faker.img.logo()
          },
          footer_social_link_1: {
            styles: {},
            iconName: 'fab fa-github',
            text: '<i class="fab fa-slack"></i>',
            href: this.faker.internet.url()
          },
          footer_social_link_2: {
            styles: {},
            iconName: 'fab fa-instagram',
            text: '<i class="fab fa-instagram"></i>',
            href: this.faker.internet.url()
          },
          footer_social_link_3: {
            styles: {},
            iconName: 'fab fa-twitter',
            text: '<i class="fab fa-twitter"></i>',
            href: this.faker.internet.url()
          },
          footer_social_link_4: {
            styles: {},
            iconName: 'fab fa-google',
            text: '<i class="fab fa-google"></i>',
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
