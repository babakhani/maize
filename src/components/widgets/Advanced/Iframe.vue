<template>
  <div>
      <WidgetToolbox/>
      <div v-if="demoMode">
        <h1 class="w-100 text-center my-5">
          {{ $t('Iframe') }}
        </h1>
      </div>
      <BgEditable
        v-else>
        <template v-slot:toolbox>
          <div
            class="widget-text-editable--toolbox--group">
            <button :title="$t('iframe')"
            @click="openSettingExtension()"
            v-b-tooltip.hover.top.small
            class="btn btn-sm widget-text-editable--toolbox--button">
              <icon name="link" />
            </button>
            <div
              class="widget-text-editable--toolbox--group-title">
              {{ $t('toolbox.iframe_setting') }}
            </div>
          </div>
          <div
            class="widget-text-editable--toolbox--group-separator"></div>
        </template>
        <iframe
          v-if="touchedData && touchedData.frame && touchedData.frame.href"
          style="width: 100%;border: 0;height: 100%;"
          :src="touchedData.frame.href" />
          <h2
            v-else
            class="w-100 text-center">
            {{ $t('messages.iframe_select_url') }}
          </h2>
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
        extensions: ['Frame'],
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          this.updateWidget(widgetData)
        }
      })
      return false
    }
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
