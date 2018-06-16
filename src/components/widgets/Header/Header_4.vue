<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-md">
            <a class="navbar-brand" href="https://www.froala.com">
              <img src="/static/imgs/img_logo.png" height="30" alt="image">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav1">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Team</a>
                </li>
              </ul>

              <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>
                </li>
              </ul>

              <a class="btn btn-empty ml-md-3" href="https://www.froala.com">Button</a>
            </div>
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
            <nav class="navbar navbar-expand-md">
              <a class="navbar-brand"
                 href="https://www.froala.com">
                <!--<img src="/static/imgs/img_logo.png"-->
                <!--height="30"-->
                <!--alt="image">-->
                <ImageEditable name="header_image"
                               :partData="touchedData.header_image">
                </ImageEditable>
              </a>
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
                    <!--href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>-->
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_1"
                                   :partData="touchedData.header_link_1">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_2"
                                   :partData="touchedData.header_link_2">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_3"
                                   :partData="touchedData.header_link_3">

                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_4"
                                   :partData="touchedData.header_link_4">

                    </text-editable>
                  </li>
                </ul>

                <!--TODO: Do you want this??-->
                <!--<ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">-->
                <!--<li class="nav-item">-->
                <!--<a class="nav-link"-->
                <!--href="https://www.froala.com"><i class="fa fa-slack"></i></a>-->
                <!--</li>-->
                <!--<li class="nav-item">-->
                <!--<a class="nav-link"-->
                <!--href="https://www.froala.com"><i class="fa fa-twitter"></i></a>-->
                <!--</li>-->
                <!--<li class="nav-item">-->
                <!--<a class="nav-link"-->
                <!--href="https://www.froala.com"><i class="fa fa-github"></i></a>-->
                <!--</li>-->
                <!--</ul>-->

                <a class="btn btn-empty ml-md-3"
                   href="https://www.froala.com">Button</a>
              </div>
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
