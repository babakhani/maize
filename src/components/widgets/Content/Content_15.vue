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

        <section class="fdb-block pb-0">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <ImageEditable name="image"
                               cssClass="fdb-icon"
                               :partData="touchedData.image">
                </ImageEditable>

                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               name="description"
                               cssClass="text-h3"
                               :partData="touchedData.description">
                </text-editable>
              </div>
              <div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
                <ImageEditable name="imageTall"
                               cssClass="img-fluid br-0"
                               :partData="touchedData.imageTall">
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
    name: 'Content_15',
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
            description: {
              styles: {},
              text: this.faker.lorem.words(100),
              src: this.faker.internet.url(),
            },
            image: {
              styles: {},
              src: this.faker.img.icon()
            },
            imageTall: {
              styles: {},
              src: this.faker.img.tall()
            }
          }
        },
        require: false
      }
    }
  }
</script>
