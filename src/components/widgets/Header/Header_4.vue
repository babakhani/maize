<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <header>
          <div class="container">
            <nav class="navbar navbar-expand-md">
              <ImageEditable 
                class="navbar-brand"
                name="header_image"
                :partData="touchedData.header_image"/>
              <!--TODO: fix button-->
              <button class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav1"
                      aria-controls="navbarNav1"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse"
                   id="navbarNav1">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <!--TODO: fix nested and remove padding on styles-->
                    <!--<a class="nav-link"-->
                    <!--href="">Home <span class="sr-only">(current)</span></a>-->
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
                <a class="btn btn-empty ml-md-3"
                   href="/">Button</a>
              </div>
            </nav>
          </div>
        </header>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Header_4',
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
                height: '30px'
              },
              src: this.faker.img.logo()
            },
            //TODO: fix padding style
            header_link_1: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_2: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_3: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_4: {
              styles: {
                padding: '1em',
                'line-height': '2em'
              },
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
