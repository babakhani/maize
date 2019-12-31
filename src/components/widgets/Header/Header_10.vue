<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md no-gutters">
          <div class="col-2 text-left">
            <ImageEditable name="logo"
                           :partData="touchedData.logo"/>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item active">
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
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_5"
                              :partData="touchedData.header_link_5"/>
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link d-flex" href="">Log In
                  <IconEditable  cssClass="nav-link"
                                 name="header_social_link_1"
                                 :partData="touchedData.header_social_link_1"/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Header_10',
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
          logo: {
            styles: {
              height: '30px'
            },
            src: this.faker.img.logo()
          },
          // TODO: fix padding style
          header_link_1: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_2: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_3: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_4: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_link_5: {
            styles: {
              padding: '1em',
              'line-height': '2em'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          header_social_link_1: {
            styles: {
              padding: '3px'
            },
            iconName: 'fas fa-sign-in-alt',
            text: '<i class="fas fa-sign-in-alt"></i>',
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
