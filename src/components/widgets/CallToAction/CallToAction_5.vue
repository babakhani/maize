
<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 text-center">
                <TextEditable 
                   tag="h1"
                   name="mainTitle"
                   :partData="touchedData.mainTitle"/>
                <p class="mt-5">
                  <TextEditable 
                    tag="a"
                    cssClass="btn"
                    name="action_link"
                    :partData="touchedData.action_link"/>
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
    name: 'CallToAction_5',
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
              text: this.faker.lorem.words(9)
            },
            action_link: {
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
