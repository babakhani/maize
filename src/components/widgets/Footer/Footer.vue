<template>
  <div :class="{'container': !touchedData.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        :editMode="editMode"
        :styles="touchedData.bg.styles">
        <footer class="fdb-block footer-large bg-dark">
          <div class="container">
            <div class="row align-items-top text-center text-md-left">
              <div class="col-12 col-sm-6 col-md-4">
                <text-editable tag="h3"
                               name="sec_1_title"
                               :editMode="editMode"
                               :styles="touchedData.sec_1_title.styles"
                               :text="touchedData.sec_1_title.text">
                </text-editable>
                <text-editable tag="p"
                               name="sec_1_desc"
                               :editMode="editMode"
                               :text="touchedData.copyright.text">
                </text-editable>
              </div>
              <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
                <text-editable tag="h3"
                               name="sec_2_title"
                               :editMode="editMode"
                               :styles="touchedData.sec_2_title.styles"
                               :text="touchedData.sec_2_title.text">
                </text-editable>
                <text-editable tag="p"
                               name="sec_2_desc"
                               :editMode="editMode"
                               :text="touchedData.sec_2_desc.text">
                </text-editable>
              </div>
              <div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
                <text-editable tag="h3"
                               name="sec_3_title"
                               :editMode="editMode"
                               :styles="touchedData.sec_3_title.styles"
                               :text="touchedData.sec_3_title.text">
                </text-editable>
                <text-editable tag="p"
                               name="sec_3_desc"
                               :editMode="editMode"
                               :text="touchedData.sec_1_desc.text">
                </text-editable>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col text-center">
                <text-editable tag="p"
                               name="copyright"
                               :editMode="editMode"
                               :styles="touchedData.copyright.styles"
                               :text="touchedData.copyright.text">
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
    name: 'Footer',
    mixins: [widgetMixin],
    props: {
      data: {
        default () {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            copyright: {
              styles: {},
              src: '&copy; 2017 Froala. All Rights Reserved'
            },
            sec_1_title: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            sec_2_title: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            sec_3_title: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            sec_1_desc: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            sec_2_desc: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            sec_3_desc: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },

            bg: {
              styles: {}
            }
          }
        },
        require: false
      }
    }
  }
</script>
