<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
      <nav class="navbar navbar-expand-md no-gutters">
        <div class="justify-content-start">
          <ImageEditable
             name="logo"
             :partData="touchedData.logo"/>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-2" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navbar-collapse-2 justify-content-end" id="navbarNav7">
          <ul class="navbar-nav justify-content-center">
            <li class="nav-item">
              <TextEditable
                tag="a"
                cssClass="nav-link"
                name="header_link_1"
                :partData="touchedData.header_link_1"/>
            </li>
            <li class="nav-item">
              <TextEditable
                tag="a"
                cssClass="nav-link"
                name="header_link_2"
                :partData="touchedData.header_link_2"/>
            </li>
            <li class="nav-item">
              <TextEditable
                tag="a"
                cssClass="nav-link"
                name="header_link_3"
                :partData="touchedData.header_link_3"/>
            </li>
            <li class="nav-item">
              <TextEditable
                tag="a"
                cssClass="nav-link"
                name="header_link_4"
                :partData="touchedData.header_link_4"/>
            </li>
            <li class="nav-item">
              <TextEditable
                tag="a"
                cssClass="nav-link"
                name="header_link_5"
                :partData="touchedData.header_link_5"/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Header_9',
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
          header_link_1: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.internet.url()
          },
          header_link_2: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.internet.url()
          },
          header_link_3: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.internet.url()
          },
          header_link_4: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.internet.url()
          },
          header_link_5: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
