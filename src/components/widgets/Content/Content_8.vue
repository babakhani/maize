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
              <div class="col text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <br>
                <text-editable tag="h2"
                               name="secondTitle"
                               :partData="touchedData.secondTitle">
                </text-editable>
                <br>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="description"
                               :partData="touchedData.description">
                </text-editable>
                <br>
                <ImageEditable name="image"
                               cssClass="img-fluid mt-5"
                               :partData="touchedData.image">
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
    name: 'Content_8',
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
            secondTitle: {
              styles: {},
              text: this.faker.lorem.words(5),
              src: this.faker.internet.url(),
            },
            description: {
              styles: {},
              text: this.faker.lorem.words(100),
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
