<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode"> <h1>Demo Mode {{$options.name}}</h1> </div> <div v-else class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <header>
          <div class="container text-center">
            <nav class="navbar">
              <!--TODO: fix nested component-->
                <!--<text-editable tag="a"-->
                               <!--cssClass="ml-auto mr-auto"-->
                               <!--name="header_link"-->
                               <!--:partData="touchedData.header_link">-->

                <!--</text-editable>-->
                <ImageEditable name="header_image"
                               :partData="touchedData.header_image">
                </ImageEditable>
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
    name: 'Header_2',
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
            header_link: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
