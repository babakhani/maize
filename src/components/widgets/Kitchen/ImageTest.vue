<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <section class="mz-block">
        <div class="container w-100">
          <div  class="row">
          <header class="col-12">
            <nav class="navbar">
              <ImageEditable name="header_image"
                             :partData="touchedData.header_image"/>
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
            </nav>
            <IconEditable 
               cssClass="nav-link p-1 mt-5"
               name="header_social_link_1"
               :partData="touchedData.header_social_link_1"/>
            <br/>
            <IconEditable 
               cssClass="nav-link p-1 mt-5"
               name="header_social_link_2"
               :partData="touchedData.header_social_link_2"/>
            <br/>
            <IconEditable 
               cssClass="nav-link p-1 mt-5"
               name="header_social_link_3"
               :partData="touchedData.header_social_link_3"/>
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
            header_social_link_1: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              iconName: 'fab fa-github',
              text: '<i class="fab fa-slack"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_2: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              iconName: 'fab fa-instagram',
              text: '<i class="fab fa-github"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_3: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              iconName: 'fab fa-twitter',
              text: '<i class="fab fa-twitter"></i>',
              href: this.faker.internet.url()
            }
          }
        },
        require: false
      }
    }
  }
</script>
