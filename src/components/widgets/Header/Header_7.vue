<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
        <nav class="navbar navbar-expand-md no-gutters">
          <div class="col-4 col-sm-2">
            <ImageEditable name="logo"
                           cssClass="text-left"
                           :partData="touchedData.logo"/>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4">
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_1"
                              :partData="touchedData.header_link_1"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_2"
                              :partData="touchedData.header_link_2"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_3"
                              :partData="touchedData.header_link_3"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_4"
                              :partData="touchedData.header_link_4"/>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">
            <li class="nav-item ml-3">
              <IconEditable
                cssClass="nav-link"
                name="header_social_link_1"
                :partData="touchedData.header_social_link_1"/>
            </li>
            <li class="nav-item ml-3">
              <IconEditable
                            cssClass="nav-link"
                            name="header_social_link_2"
                            :partData="touchedData.header_social_link_2"/>
            </li>
            <li class="nav-item ml-3">
              <IconEditable
                            cssClass="nav-link"
                            name="header_social_link_3"
                            :partData="touchedData.header_social_link_3"/>
            </li>
            <li class="nav-item ml-3">
              <IconEditable
                            cssClass="nav-link"
                            name="header_social_link_4"
                            :partData="touchedData.header_social_link_4"/>
            </li>
          </ul>
        </nav>
    </header>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Header_7',
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
            }
          },
          logo: {
            styles: {
              height: '30px'
            },
            src: this.faker.img.logo()
          },
          header_link_1: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_2: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_3: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_4: {
            styles: {},
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_social_link_1: {
            styles: {},
            iconName: 'fab fa-github',
            href: this.faker.internet.url()
          },
          header_social_link_2: {
            styles: {},
            iconName: 'fab fa-instagram',
            href: this.faker.internet.url()
          },
          header_social_link_3: {
            styles: {},
            iconName: 'fab fa-twitter',
            href: this.faker.internet.url()
          },
          header_social_link_4: {
            styles: {},
            iconName: 'fab fa-google',
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
