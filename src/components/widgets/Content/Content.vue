<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode"> <h1>Demo Mode {{$options.name}}</h1> </div> <div v-else class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <section class="fdb-block fp-active"
                 data-block-type="contents"
                 data-id="2"
                 draggable="true">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <br>
                <text-editable tag="p"
                               name="secondTitle"
                               :partData="touchedData.secondTitle"
                               :cssClass="'text-h3'">
                </text-editable>
              </div>
              <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                <ImageEditable name="image"
                               :partData="touchedData.image"
                               :cssClass="'img-fluid'">
                </ImageEditable>
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
    name: 'Content',
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
            },
            image: {
              styles: {},
              src: this.faker.img.big()
            }
          }
        },
        require: false
      }
    }
  }
</script>
