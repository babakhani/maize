<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <footer class="fdb-block footer-small">
        <div class="container">
          <div class="row text-center">
            <div class="col">
              <p>&copy; 2017 Froala. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
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
        <footer class="fdb-block footer-small">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <!--TODO: Extend the text linke : &copy -->
                <text-editable tag="p"
                               name="footer_copyright"
                               :partData="touchedData.footer_copyright">
                </text-editable>
              </div>
            </div>
          </div>
        </footer>
      </BgEditable>
    </div>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer_1',
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
            footer_copyright: {
              styles: {},
              text: this.faker.footer.copyright(),
            },
          }
        },
        require: false
      }
    }
  }
</script>
