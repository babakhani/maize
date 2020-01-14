
<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
      <section class="mz-block">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <TextEditable 
               tag="h1"
               name="mainTitle"
               :partData="touchedData.mainTitle"/>
            <p class="mt-5">
            <TextEditable 
               tag="a"
               cssClass="btn btn-primary"
               name="action_link"
               :partData="touchedData.action_link"/>
            </p>
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
              styles: {
                'color': 'white'
              },
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
