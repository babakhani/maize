<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <header>
        <div class="container">
          <nav class="navbar">
            <a href="/">
              <img src="/static/imgs/img_logo.png"
                   height="30"
                   alt="image">
            </a>
          </nav>
        </div>
      </header>
    </div>
    <div v-else
         class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <header>
          <div class="container">
            <nav class="navbar">
              <!--TODO: fix nested component-->
              <a href="">
                <ImageEditable name="header_image"
                               :partData="touchedData.header_image">
                </ImageEditable>
              </a>
            </nav>
          </div>
        </header>
      </BgEditable>
    </div>
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
