<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <iframe
          v-if="touchedData && touchedData.frame"
          style="width: 100%;border: 0;height: 100%;"
          :src="touchedData.frame.href" />
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Iframe',
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
              'background-color': 'transparent'
            }
          },
          frame: {
            styles: {},
            iconName: 'fab fa-instagram',
            text: '<i class="fab fa-instagram"></i>',
            href: 'https://ubeac.io/'
          }
        }
      },
      require: false
    }
  }
}
</script>
