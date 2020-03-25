<template>
  <div>
      <WidgetToolbox/>
      <div v-if="demoMode">
        <h1 class="w-100 text-center my-5">
          {{ $t('Slider') }}
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
            <icon name="bars" />
          </button>
          <div
            class="widget-text-editable--toolbox--group-title">
            {{ $t('toolbox.slider') }}
          </div>
        </div>
      </template>
      <div
        v-if="touchedData && touchedData.slider"
        ref="slider"
        class="slick-slider"
        :data-slider="JSON.stringify(touchedData.slider.config)">
        <img
        style="max-width: 100%; max-height: 100%;"
        :src="pic.url"
        v-for="pic in touchedData.slider.images"
        :alt="pic.alt" />
      </div>
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'
import { EventBus } from '@/events/event-bus'

export default {
  name: 'Slider',
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
            styles: { }
          },
          slider: {
            images: [
              {
                url: 'https://i.picsum.photos/id/64/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              },
              {
                url: 'https://i.picsum.photos/id/65/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              },
              {
                url: 'https://i.picsum.photos/id/99/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              },
              {
                url: 'https://i.picsum.photos/id/200/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              },
              {
                url: 'https://i.picsum.photos/id/100/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              },
              {
                url: 'https://i.picsum.photos/id/77/700/300.jpg',
                caption: 'Sample Slider Image',
                alt: 'sample_1'
              }
            ],
            // https://github.com/kenwheeler/slick/
            config: {
              'autoplay': true,
              'speed': 600,
              'autoplaySpeed': 3000,
              // 'rtl': true,
              // 'centerMode': true,
              'arrows': true,
              'accessibility': true,
              'mobileFirst': true,
              'dots': true,
              'slidesToShow': 2,
              'slidesToScroll': 1,
              'swipeToSlide': true,
              'draggable': true,
              'vertical': false,
              'lazyLoad': false,
              'infinite': false,
              'fade': false,
              'lazyLoad': false,
              'rows': 1
            }
          },
          image1: {
            styles: {},
            src: this.faker.img.big()
          }
        }
      },
      require: false
    }
  },
  mounted () {
    if (this.editMode) {
      setTimeout(() => {
        $(this.$refs.slider).slick(this.touchedData.slider.config)
      }, 500)
    }
  },
  methods: {
    openSettingExtension () {
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['Slider', 'Slides'],
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          this.updateWidget(widgetData)
          $(this.$refs.slider).slick('unslick')
          $(this.$refs.slider).slick(this.touchedData.slider.config)
        }
      })
      return false
    }
  }
}
</script>
