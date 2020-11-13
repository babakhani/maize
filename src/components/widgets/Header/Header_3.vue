<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <header>
        <nav class="navbar navbar-expand justify-content-center">
          <ImageEditable
             name="logo"
             :partData="touchedData.logo"/>
        </nav>
      </header>
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Header_3',
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
          }
        }
      },
      require: false
    }
  }
}
</script>
