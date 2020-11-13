<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav0">
            <ul class="navbar-nav mr-auto ml-auto">
              <li class="nav-item active">
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
  name: 'Header_14',
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
          header_link_1: {
            styles: {},
            text: this.faker.company.catchPhraseNoun(),
            href: this.faker.internet.url()
          },
          header_link_2: {
            styles: {},
            text: this.faker.company.catchPhraseNoun(),
            href: this.faker.internet.url()
          },
          header_link_3: {
            styles: {},
            text: this.faker.company.catchPhraseNoun(),
            href: this.faker.internet.url()
          },
          header_link_4: {
            styles: {},
            text: this.faker.company.catchPhraseNoun(),
            href: this.faker.internet.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
