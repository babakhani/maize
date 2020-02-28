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
              <icon name="bars" />
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
      const self = this
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['Frame'],
        data: this._.cloneDeep(self.touchedData)
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          self.updateWidget(widgetData)
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
            href: ''
          }
        }
      },
      require: false
    }
  }
}
</script>
