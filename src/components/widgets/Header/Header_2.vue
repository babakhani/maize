<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
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
                             :partData="touchedData.header_image"/>
            </nav>
          </div>
        </header>
      </BgEditable>
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
