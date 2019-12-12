<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav0">
              <ul class="navbar-nav mr-auto ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Team</a>
                </li>
              </ul>
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
              <button class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav0"
                      aria-controls="navbarNav0"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse"
                   id="navbarNav0">
                <ul class="navbar-nav mr-auto ml-auto">
                  <li class="nav-item active">
                    <!--TODO: fix nested and remove padding on styles-->
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
    name: 'Header_3',
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
            //TODO: fix padding style
            header_link_1: {
              styles: {padding: '1em'},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_2: {
              styles: {padding: '1em'},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_3: {
              styles: {padding: '1em'},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            header_link_4: {
              styles: {padding: '1em'},
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
