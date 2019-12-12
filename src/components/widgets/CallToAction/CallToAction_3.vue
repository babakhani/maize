<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 text-center">
              <h3>
                <strong>Right at the coast of the Semantics, a large language ocean. A small river named Duden.</strong>
              </h3>
              <p class="mt-5 mt-sm-4">
                <a class="btn" href="/">Download</a>
              </p>
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
            <div class="row justify-content-center">
              <div class="col-12 col-sm-8 col-md-6 col-lg-4 text-center">
                <text-editable tag="h3"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <p class="mt-5 mt-sm-4">
                  <text-editable tag="a"
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
