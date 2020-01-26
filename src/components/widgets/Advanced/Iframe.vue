<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <template v-slot:toolbox>
          <div
            class="widget-text-editable--toolbox--group">
            <button :title="$t('iframe')"
            @click="openSettingExtension()"
            v-b-tooltip.hover.top.small
            class="btn btn-sm widget-text-editable--toolbox--button">
              <icon name="life-ring" />
            </button>
            <div
              class="widget-text-editable--toolbox--group-title">
              {{ $t('toolbox.text') }}
            </div>
          </div>
        </template>
        <iframe
          v-if="touchedData && touchedData.frame"
          style="width: 100%;border: 0;height: 100%;"
          :src="touchedData.frame.href" />
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'
import { EventBus } from '@/events/event-bus'

export default {
  name: 'Iframe',
  mixins: [widgetMixin],
  methods: {
    openSettingExtension () {
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['Picsum_Samples', 'Clinet_Side_Uploader'],
        data:  {
           text: 'samlam'
        }
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.text) {
          console.log('update by extensions')
          console.log(widgetData.text)
          // this.$emit('updatewidget', widgetData)
        }
      })
      return false
    },
  },
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
