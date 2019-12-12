<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col col-sm-10 col-md-8 text-left">
              <p class="text-h3">Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small line of blind text
              by the name of Lorem Ipsum decided to leave for the far <a href="/">World of Grammar</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else
         class="widget-block">
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
            <div class="row justify-content-end">
              <div class="col col-sm-10 col-md-8 text-left">
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="description"
                               :partData="touchedData.description">
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
