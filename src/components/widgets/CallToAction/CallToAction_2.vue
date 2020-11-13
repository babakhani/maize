<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 text-center">
          <TextEditable
             tag="h1"
             name="mainTitle"
             :partData="touchedData.mainTitle">
          </TextEditable>
          <TextEditable
             tag="p"
             name="description"
             cssClass="text-h3"
             :partData="touchedData.description">
          </TextEditable>
          <p class="mt-5 mt-sm-4">
          <TextEditable tag="a"
                        cssClass="btn btn-primary px-3"
                        name="action_link"
                        :partData="touchedData.action_link">
          </TextEditable>
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
  name: 'CallToAction_2',
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
            text: this.faker.lorem.words(50),
            src: this.faker.url()
          },
          action_link: {
            styles: {
              'color': 'white'
            },
            text: this.faker.lorem.words(2),
            href: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
