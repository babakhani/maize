<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <div class="input-group mt-4 mb-4">
                  <!--TODO: add input editable-->
                  <input type="text"
                         class="form-control"
                         placeholder="Enter your email address">
                  <span class="input-group-btn">
              <button class="btn"
                      type="button">
                <TextEditable tag="span"
                               name="form_description"
                               :partData="touchedData.form_description"/>
              </button>
            </span>
                </div>

                <p class="text-h4">Find us on
                  <TextEditable tag="a"
                                 name="form_link_1"
                                 :partData="touchedData.form_link_1"/>
                  and
                  <TextEditable tag="a"
                                 name="form_link_2"
                                 :partData="touchedData.form_link_2"/>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
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
            text: this.faker.lorem.words(1)
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
            text: this.faker.lorem.words(1)
          }
        }
      },
      require: false
    }
  }
}
</script>
