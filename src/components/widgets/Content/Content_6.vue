<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <section class="fdb-block">
          <div class="container">
            <div class="row">
              <div class="col text-left">
                <text-editable tag="h2"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               name="description1"
                               :partData="touchedData.description1">
                </text-editable>

                <text-editable tag="p"
                               name="description2"
                               :partData="touchedData.description2">
                </text-editable>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
    </div>
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
