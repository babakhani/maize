<template>
  <div>
    <WidgetToolbox/>
    <BgEditable >
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 text-center">
              <TextEditable 
                tag="h3"
                name="mainTitle"
                :partData="touchedData.mainTitle">
              </TextEditable>
              <p class="mt-5 mt-sm-4">
                <text-editable 
                  tag="a"
                  cssClass="btn"
                  name="action_link"
                  :partData="touchedData.action_link">
                </text-editable>
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
    name: 'CallToAction_3',
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
              text: this.faker.lorem.words(15)
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
