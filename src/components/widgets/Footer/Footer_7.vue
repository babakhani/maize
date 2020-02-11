<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block">
      <div class="row text-center align-items-center px-2">
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
          <nav class="navbar navbar-expand no-gutters px-3 justify-content-center">
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
          footer_link_1: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_2: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_3: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_4: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          footer_link_5: {
            styles: {},
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
            href: this.faker.internet.url()
          },
          footer_social_link_2: {
            styles: {},
            iconName: 'fab fa-instagram',
            href: this.faker.internet.url()
          },
          footer_social_link_3: {
            styles: {},
            iconName: 'fab fa-twitter',
            href: this.faker.internet.url()
          },
          footer_social_link_4: {
            styles: {},
            iconName: 'fab fa-google',
            href: this.faker.internet.url()
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
