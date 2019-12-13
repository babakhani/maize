<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col col-sm-10 col-md-8 text-left">
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="description"
                               :partData="touchedData.description"/>
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
    name: 'Content_5',
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
            description: {
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
