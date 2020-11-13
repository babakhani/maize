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
  name: 'Header_1',
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
          header_image: {
            styles: {
              height: '30px'
            },
            src: this.faker.img.logo(),
            href: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
