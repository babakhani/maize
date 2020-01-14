<template>
  <div>
    <WidgetToolbox/>
    <BgEditable >
    <section class="mz-block py-0">
      <div class="row justify-content-center py-5">
        <div class="col-12 col-md-10 col-lg-8 text-left">
          <TextEditable 
             tag="h1"
             name="mainTitle"
             :partData="touchedData.mainTitle"/>
          <TextEditable 
             tag="p"
             name="description"
             :partData="touchedData.description"/>
          <p class="mt-4">
          <TextEditable 
             tag="a"
             cssClass="btn btn-primary px-3"
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
              text: this.faker.lorem.words(3)
            },
            description: {
              styles: {},
              text: this.faker.lorem.words(55)
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
