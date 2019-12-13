<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <header>
          <div class="container">
            <nav class="navbar">
              <a href="">
                <ImageEditable name="header_image"
                               :partData="touchedData.header_image"/>
              </a>
            </nav>
          </div>
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
