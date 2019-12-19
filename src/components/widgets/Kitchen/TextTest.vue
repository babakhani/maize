<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <TextEditable tag="a"
                    name="sample_text"
                    :partData="touchedData.sample_text"/>
      <TextEditable tag="span"
                    name="sample_text"
                    :partData="touchedData.sample_text"/>
      <TextEditable tag="h1"
                    name="sample_text"
                    :partData="touchedData.sample_text"/>
      <TextEditable tag="h2"
                    name="sample_text"
                    :partData="touchedData.sample_text"/>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'TextTest',
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
            sample_img: {
              src: this.faker.img.size(1800, 700)
            },
            sample_text: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              text: this.faker.lorem.words(10),
              src: this.faker.internet.url
            },
            header_image: {
              styles: {
                height: '30px',
              },
              src: this.faker.img.logo()
            },
          }
        },
        require: false
      }
    }
  }
</script>
