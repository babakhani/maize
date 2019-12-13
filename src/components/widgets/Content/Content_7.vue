<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>

                <div class="row text-left pt-4">
                  <div class="col-12 col-md-6">
                    <TextEditable tag="p"
                                   name="description1"
                                   cssClass="text-h3"
                                   :partData="touchedData.description1"/>
                  </div>
                  <div class="col-12 col-md-6">
                    <TextEditable tag="p"
                                   name="description2"
                                   cssClass="text-h3"
                                   :partData="touchedData.description2"/>
                  </div>
                </div>
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
    name: 'Content_7',
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
              text: this.faker.lorem.words(3),
            },
            description1: {
              styles: {},
              text: this.faker.lorem.words(100),
              src: this.faker.internet.url(),
            },
            description2: {
              styles: {},
              text: this.faker.lorem.words(100),
              src: this.faker.internet.url(),
            }
          }
        },
        require: false
      }
    }
  }
</script>
