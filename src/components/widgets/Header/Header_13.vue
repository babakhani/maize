<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <header>
      <nav class="navbar">
        <ImageEditable
           name="header_image"
           :partData="touchedData.header_image"/>
      </nav>
    </header>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Header_13',
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
              'background-color': '#1c1c1c'
            }
          },
          header_image: {
            styles: {
              height: '30px'
            },
            src: this.faker.img.logo()
          },
          header_link: {
            styles: {},
            text: this.faker.company.catchPhraseNoun(),
            href: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
