<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col col-md-8 text-center">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <br>
                <TextEditable tag="p"
                               name="secondTitle"
                               cssClass="text-h3"
                               :partData="touchedData.secondTitle"/>
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
    name: 'Content_3',
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
            secondTitle: {
              styles: {},
              text: this.faker.lorem.words(30),
              src: this.faker.internet.url(),
            }
          }
        },
        require: false
      }
    }
  }
</script>
