<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <header>
        <nav class="navbar navbar-expand-md no-gutters">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav10" aria-controls="navbarNav10" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="col-4 col-sm-2 text-center order-lg-6">
            <ImageEditable name="logo"
                           :partData="touchedData.logo"/>
          </div>

          <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav10">
            <ul class="navbar-nav col-5">
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_1"
                              :partData="touchedData.header_link_1"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_2"
                              :partData="touchedData.header_link_2"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_3"
                              :partData="touchedData.header_link_3"/>
              </li>
              <li class="nav-item">
                <TextEditable tag="a"
                              cssClass="nav-link"
                              name="header_link_4"
                              :partData="touchedData.header_link_4"/>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
            <li class="nav-item">
              <IconEditable
                cssClass="nav-link"
                name="header_social_link_1"
                :partData="touchedData.header_social_link_1"/>
            </li>
            <li class="nav-item">
              <IconEditable
                cssClass="nav-link"
                name="header_social_link_2"
                :partData="touchedData.header_social_link_2"/>
            </li>
            <li class="nav-item">
              <IconEditable
                cssClass="nav-link"
                name="header_social_link_3"
                :partData="touchedData.header_social_link_3"/>
            </li>
          </ul>
        </nav>
      </header>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Header_12',
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
              styles: {
                'background-color': '#1c1c1c'
              }
            },
            logo: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.logo()
            },
            header_link_1: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_2: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_3: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_4: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_social_link_1: {
              styles: {},
              iconName: 'fab fa-github',
              text: '<i class="fab fa-slack"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_2: {
              styles: {},
              iconName: 'fab fa-instagram',
              text: '<i class="fab fa-instagram"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_3: {
              styles: {},
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
