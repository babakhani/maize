<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6 text-center">
              <h1>Subscribe</h1>
              <div class="input-group mt-4 mb-4">
                <input type="text" class="form-control" placeholder="Enter your email address">
                <span class="input-group-btn">
              <button class="btn" type="button">Submit</button>
            </span>
              </div>

              <p class="text-h4">Find us on <a href="https://www.froala.com">Facebook</a> and <a href="https://www.froala.com">Twitter</a>.</p>
            </div>
          </div>
        </div>
      </section>
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
        <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <div class="input-group mt-4 mb-4">
                  <!--TODO: add input editable-->
                  <input type="text"
                         class="form-control"
                         placeholder="Enter your email address">
                  <span class="input-group-btn">
              <button class="btn"
                      type="button">
                <text-editable tag="span"
                               name="form_description"
                               :partData="touchedData.form_description">
                  </text-editable>
              </button>
            </span>
                </div>

                <p class="text-h4">Find us on
                  <text-editable tag="a"
                                 name="form_link_1"
                                 :partData="touchedData.form_link_1">
                  </text-editable>
                  and
                  <text-editable tag="a"
                                 name="form_link_2"
                                 :partData="touchedData.form_link_2">
                  </text-editable>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Form_1',
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
            mainTitle: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            form_link_1: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            form_link_2: {
              styles: {},
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            },
            form_description: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
          }
        },
        require: false
      }
    }
  }
</script>
