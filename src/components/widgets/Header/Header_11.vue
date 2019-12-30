<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md">
          <ImageEditable name="logo"
                         :partData="touchedData.logo"/>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav3">
            <ul class="navbar-nav ml-auto">
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

            <a class="btn btn-outline-primary ml-md-3" href="">Button</a>
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
  name: 'Header_11',
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
          }
        }
      },
      require: false
    }
  }
}
</script>
