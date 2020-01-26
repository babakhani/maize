<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <div
        v-if="touchedData && touchedData.slider"
        class="slick-slider"
        :data-slick="touchedData.slider.config">
        <pre> {{ touchedData.slider.config }} </pre>
        <div>
          <ImageEditable
            name="image1"
            cssClass="img-fluid"
            :partData="touchedData.image1"/>
        </div>
        <div>
          <ImageEditable
            name="image1"
            cssClass="img-fluid"
            :partData="touchedData.image1"/>
        </div>
        <div>
          <ImageEditable
            name="image1"
            cssClass="img-fluid"
            :partData="touchedData.image1"/>
        </div>
      </div>
      </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'ImageTest',
  mixins: [widgetMixin],
  mounted () {
    console.log('init slider')
    console.log(this.editMode)
    if (this.editMode) {
      setTimeout(() => {
        // https://github.com/kenwheeler/slick/
        $('.slick-slider').slick(this.touchedData.slider.config)
      }, 500)
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
              'background-position': 'center center',
              'background-size': 'cover',
              'background-repeat': 'no-repeat',
              'background-image': `url('${this.faker.img.size(100, 200)}')`
            }
          },
          slider: {
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
              'slidesToScroll': 1
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
  }
}
</script>
