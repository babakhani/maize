<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <section class="mz-block">
        <div class="container w-100">
          <div  class="row">
          <header class="col-12">
              <nav class="navbar">
                <h1> Sample </h1>
                <ImageEditable name="header_image"
                               :partData="touchedData.header_image"/>
              </nav>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.icon.normal()}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.icon.normal('fa-instagram')}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.icon.normal('fa-facebook')}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.icon.normal('fa-twitter')}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.icon.normal('fa-battery-4', '26f')}"/>
              <!--
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.img.size(300, 300)}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.img.size(600, 300)}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.img.size(120, 300)}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="{src: faker.img.size(200, 200)}"/>
            <ImageEditable name="sample_img"
                           class="float-left"
                           :partData="touchedData.sample_img"/>
              -->
          </header>
        </div>
        </div>
      </section>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'ImageTest',
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
