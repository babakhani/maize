<template>
  <div>
      <WidgetToolbox></WidgetToolbox>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col col-md-8 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
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
    name: 'Content_1',
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
              text: this.faker.company.companyName()
            },
          }
        },
        require: false
      }
    }
  }
</script>
